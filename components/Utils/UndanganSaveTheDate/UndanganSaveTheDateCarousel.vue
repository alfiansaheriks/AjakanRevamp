<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps({
    searchQuery: {
        type: String,
        default: '',
    },
});

const activeCategory = ref<string>('');
const loading = ref(true);
const currentPage = ref(1);
const limit = 9;
const type = 'save_the_date';

// Fetch data from the API
const { data: undangan, pending, refresh } = useFetch(() =>
    `https://ajakan.me/api/guest/themes?type=${type}&limit=${limit}&page=${currentPage.value}&sub_theme=${activeCategory.value}`
);

// Filter and compute the undangan data based on search query
const filteredDataUndangan = computed(() => {
    let undanganData = (undangan.value as { data: { themes: { data: any[] } } })?.data.themes.data || [];

    // Filter based on search query if it exists
    if (props.searchQuery) {
        undanganData = undanganData.filter(item =>
            item.name.toLowerCase().includes(props.searchQuery.toLowerCase())
        );
    }

    return undanganData;
});

// Watch the pending state to update the loading state
watch(pending, (newPending) => {
    loading.value = newPending;
});

// Calculate the total pages
const totalPages = computed(() => Math.ceil((undangan.value as { data?: { themes?: { last_page?: number } } })?.data?.themes?.last_page ?? 0 / limit));

// Watch current page change to refresh data
watch(currentPage, () => {
    loading.value = true;
    refresh();
});

// Change page functionality
const changePage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
    }
};
</script>

<template>
    <div class="relative px-2">
        <div v-if="loading" class="flex justify-center items-center h-48">
            <p>Loading...</p>
        </div>
        <div v-else class="flex flex-col">
            <!-- Grid layout for filtered undangan -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:px-28" data-aos="fade-up">
                <div v-for="undangan in filteredDataUndangan" :key="undangan.id" class="w-full mx-auto">
                    <NuxtLink :to="`https://ajakan.me/theme/preview/${undangan.url}`" target="_blank" class="block bg-transparent w-full rounded-none">
                        <NuxtImg :src="undangan.image" alt="Article Image"
                            class="w-full h-auto object-cover rounded-xl" />
                        <div class="py-2">
                            <p class="text-sm lg:text-base text-[#B7B7B7]">{{ undangan.category_name }}</p>
                            <h3 class="text-base lg:text-lg font-semibold py-2">{{ undangan.name }}</h3>
                            <button
                                class="bg-[#0191D8] text-white font-normal rounded-lg focus:outline-none w-full py-2">
                                <Icon name="icon-park-outline:preview-open" class="relative top-1 text-lg text-white" />
                                Preview
                            </button>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <!-- Pagination buttons, hidden when filtered data has only 1 result -->
            <div v-if="filteredDataUndangan.length > 1 && totalPages > 1" class="flex justify-start items-center mt-8 px-24">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                    class="lg:px-4 marker:py-2 bg-transparent text-gray-700 rounded-l disabled:opacity-50 disabled:cursor-not-allowed">
                    <Icon name="carbon:previous-outline" class="text-3xl" />
                </button>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                    class="px-1 py-2  text-gray-700 rounded-r  disabled:opacity-50 disabled:cursor-not-allowed">
                    <Icon name="carbon:next-outline" class="text-3xl" />
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Adjust the styles as needed */
.max-w-xs {
    max-width: 30rem;
    /* Adjust the max width */
}

.max-h-48 {
    max-height: 15rem;
    /* Adjust the max height */
}
</style>
