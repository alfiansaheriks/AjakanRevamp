<script setup lang="ts">

import { ref, computed, watch } from 'vue';

const currentPage = ref(1);
const limit = 12;
const loading = ref(false);
const type = 'filterig';

const { data: response, pending, refresh } = useFetch(() =>
    `https://ajakan.me/api/guest/themes?type=${type}&limit=${limit}&page=${currentPage.value}`
);


const articles = computed(() => (response.value as { data: { themes: { data: any[] } } })?.data.themes.data || []);

const totalPages = computed(() => Math.ceil((response.value as { data?: { themes?: { last_page?: number } } })?.data?.themes?.last_page ?? 0 / limit));

watch(pending, (newPending) => {
    loading.value = newPending;
});

watch(currentPage, () => {
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
        <div v-else class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-4 lg:px-28" data-aos="fade-up">
            <div v-for="item in articles" :key="item.id" class="w-full mx-auto">
                <NuxtLink to="" class="block bg-transparent w-full rounded-none">
                    <NuxtImg :src="item.image" alt="Article Image"
                        class="w-full h-auto lg:h-[600px] object-cover rounded-xl" />
                    <div class="py-2">
                        <p class="text-sm lg:text-base text-black">Filter Instagram</p>
                        <h3 class="text-base lg:text-lg font-semibold py-2">{{ item.title }}</h3>
                        <button class="bg-[#0191D8] text-white text-sm lg:text-base font-normal rounded-lg focus:outline-none w-full py-2 mt-1">
                            <Icon name="icon-park-outline:preview-open" class="text-sm lg:text-lg text-white" />
                            Preview
                            </button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
    <div class="flex justify-start items-center mt-8 px-4 lg:px-28" v-if="totalPages > 1">
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                    class="lg:px-4 py-2 bg-transparent text-gray-700 rounded-l disabled:opacity-50 disabled:cursor-not-allowed">
                    <Icon name="carbon:previous-outline" class="text-3xl" />
                </button>
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                    class="px-1 py-2  text-gray-700 rounded-r  disabled:opacity-50 disabled:cursor-not-allowed">
                    <Icon name="carbon:next-outline" class="text-3xl" />
                </button>
            </div>
</template>

<style scoped>
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