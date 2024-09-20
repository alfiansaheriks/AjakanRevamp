<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const activeCategory = ref<number | null>(null);
const loading = ref(true);
const currentPage = ref(1);
const limit = 12;

const setActiveCategory = (categoryId: number) => {
    activeCategory.value = categoryId;
    currentPage.value = 1; // Reset ke halaman pertama saat kategori diubah
    refresh();
};

// Fetch data from the API
const { data: undangan, pending, refresh } = useFetch(() =>
    `https://ajakan.me/api/guest/themes?type=video_3d&limit=${limit}&page=${currentPage.value}`
);

watch(pending, (newPending) => {
    // console.log('pending:', newPending);
    loading.value = newPending;
});

watch(undangan, (newUndangan) => {
    // console.log('undangan:', newUndangan);
});

const dataUndangan = computed(() => {
    // console.log('undangan.value:', undangan.value);
    return (undangan.value as { data: { themes: { data: any[] } } })?.data.themes.data || [];
});

const subThemes = computed(() => {
    // console.log('subThemes:', (undangan.value as { data: { sub_themes: any[] } })?.data.sub_themes);
    return (undangan.value as { data: { sub_themes: any[] } })?.data.sub_themes.map(subTheme => {
        // Replace "Undangan 3D " (note the space after 3D) with an empty string
        return {
            ...subTheme,
            name: subTheme.name.replace('Undangan 3D ', '')
        };
    }) || [];
});


// Filtered data undangan berdasarkan activeCategory
const filteredDataUndangan = computed(() => {
    let filteredData = dataUndangan.value;
    // console.log('activeCategory:', activeCategory.value);
    if (activeCategory.value) {
        filteredData = filteredData.filter(item => item.category === activeCategory.value);
    }
    // console.log('filteredData:', filteredData);
    return filteredData.slice(0, limit); // Apply limit after filtering
});

const totalPages = computed(() => Math.ceil((undangan.value as { data?: { themes?: { last_page?: number } } })?.data?.themes?.last_page ?? 0 / limit));

watch(currentPage, () => {
    loading.value = true;
    refresh();
});

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
            <div class="mb-[42px] lg:mb-[64px] flex justify-between items-center">
                <div>&#8203;</div>
                <div class="flex overflow-x-auto space-x-2 w-full lg:w-full justify-center lg:justify-center lg:mx-4">
                    <button
                        v-for="subTheme in subThemes" :key="subTheme.id"
                        @click="setActiveCategory(subTheme.id)"
                        :class="{
                            'bg-[#0191D8] text-white text-xs': activeCategory === subTheme.id,
                            'bg-transparent border border-[#0191D8] text-[#0191D8] text-xs': activeCategory !== subTheme.id
                        }"
                        class="px-4 py-2 rounded-lg whitespace-nowrap">
                        {{ subTheme.name }}
                    </button>
                </div>
                <div>&#8203;</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-4 lg:px-28">
                <div v-for="undangan in filteredDataUndangan" :key="undangan.id" class="w-full">
                    <NuxtLink to="/" class="block bg-transparent w-full rounded-none">
                        <NuxtImg :src="undangan.image" alt="Article Image"
                            class="w-full h-[310px] object-cover rounded-xl" />
                        <div class="py-2">
                            <p class="text-sm lg:text-base text-black">{{ undangan.category_name }}</p>
                            <h3 class="text-base lg:text-lg font-semibold py-2">{{ undangan.title }}</h3>
                            <button
                                class="bg-[#0191D8] text-white font-normal rounded-lg focus:outline-none w-full py-2">
                                <Icon name="icon-park-outline:preview-open" class="relative top-0.5 text-base text-white" />
                                Preview
                            </button>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <!-- Pagination -->
            <div class="flex justify-start items-center mt-8 px-4 lg:px-24" v-if="totalPages > 1">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                    class="px-4 py-2 bg-transparent text-gray-700 rounded-l disabled:opacity-50 disabled:cursor-not-allowed">
                    <Icon name="carbon:previous-outline" class="text-3xl" />
                </button>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                    class="py-2  text-gray-700 rounded-r  disabled:opacity-50 disabled:cursor-not-allowed">
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
