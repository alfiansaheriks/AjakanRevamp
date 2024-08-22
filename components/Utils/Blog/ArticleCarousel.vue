<script lang="ts" setup>
import { ref, watch, computed } from 'vue';

const props = defineProps<{ searchQuery: string }>();

const currentPage = ref(1);
const limit = 12;
const loading = ref(false);

const activeCategory = ref<string>('');
// Fungsi untuk mengatur kategori aktif
const setActiveCategory = (category: string) => {
    if (activeCategory.value === category) {
        activeCategory.value = '';
    } else {
        activeCategory.value = category;
    }
};

const { data: response, error, refresh } = useFetch(() => {
    let apiUrl = `https://ajakan.me/api/guest/blog/index?page=${currentPage.value}&limit=${limit}&search=${props.searchQuery}`;
    if (activeCategory.value && activeCategory.value !== 'All') {
        apiUrl = `https://ajakan.me/api/guest/blog/index?page=${currentPage.value}&limit=${limit}&category=${activeCategory.value}`;
    }
    return apiUrl;
});

const blogs = computed(() => {
    return (response.value as { data: { blogs: { data: any[] } } })?.data?.blogs.data.map((blog: any) => ({
        ...blog,
        image: `https://picsum.photos/800/600?random=${blog.id}`
    })) || [];
});

const categories = (response.value as { data?: { categories: any[] } })?.data?.categories.map((category: any) => ({
    id: category.id,
    title: category.title,
    total: category.total_posting
})) || [];

const totalPages = computed(() => Math.ceil((response.value as { data?: { blogs?: { last_page?: number } } })?.data?.blogs?.last_page ?? 0 / limit));

watch(currentPage, () => {
    loading.value = true;
    refresh();
});

watch(response, () => {
    loading.value = false;
});

watch(() => props.searchQuery, () => {
    currentPage.value = 1; // Reset to first page on new search
    loading.value = true;
    refresh();
});

watch(activeCategory, () => {
    console.log(activeCategory.value);
    loading.value = true;
    refresh();
});

const changePage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const carousel = ref<HTMLElement | null>(null);

const scrollLeft = () => {
    if (carousel.value) {
        carousel.value.scrollLeft -= 200; // Jumlah scroll ke kiri
    }
};

const scrollRight = () => {
    if (carousel.value) {
        carousel.value.scrollLeft += 200; // Jumlah scroll ke kanan
    }
};
</script>

<template>
    <div class="flex flex-row justify-start items-start mb-2">
        <UButton @click="scrollLeft" class="bg-transparent text-white p-2 shadow-none hover:bg-transparent">
            <Icon name="carbon:previous-outline" class="text-3xl text-black" />
        </UButton>

        <div ref="carousel" class="category-filter-container flex overflow-x-hidden mx-4">
            <div v-for="category in categories" :key="category.id"
                :class="['p-4 mr-2 rounded-lg shadow-md min-w-[250px] lg:min-w-[300px] text-center cursor-pointer', activeCategory === category.id ? 'bg-[#0191D8] text-white' : 'bg-white text-[#0191D8]']"
                @click="setActiveCategory(category.id)">
                {{ category.title }}
                <span
                    :class="['inline-block w-8 h-auto rounded-full text-center leading-6', activeCategory === category.id ? 'bg-white text-[#0191D8]' : 'bg-[#0191D8] text-white']">{{
                        category.total }}</span>
            </div>
        </div>

        <UButton @click="scrollRight"
            class="bg-transparent text-white p-2 rounded-full shadow-none hover:bg-transparent">
            <Icon name="carbon:next-outline" class="text-3xl text-black" />
        </UButton>
    </div>
    <div class="container mx-auto p-4">
        <div v-if="loading" class="text-center text-gray-500 mt-4">Loading...</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="blog in blogs" :key="blog.id" :to="'blog/' + blog.slug"
                class="bg-transparent rounded-lg overflow-hidden">
                <img :src="blog.image" alt="Random Image" class="w-full h-48 object-cover rounded-xl">
                <div class="py-4">
                    <p class="text-gray-400 text-sm">{{ blog.created_at_reformat_simple }}</p>
                    <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
                </div>
            </NuxtLink>
        </div>

        <p v-if="!blogs.length && !loading" class="text-center text-gray-500 mt-4">No blogs available.</p>

        <div class="flex justify-start items-center mt-8" v-if="totalPages > 1">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="px-4 py-2 bg-transparent text-gray-700 rounded-l disabled:opacity-50 disabled:cursor-not-allowed">
                <Icon name="carbon:previous-outline" class="text-3xl" />
            </button>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="px-4 py-2  text-gray-700 rounded-r  disabled:opacity-50 disabled:cursor-not-allowed">
                <Icon name="carbon:next-outline" class="text-3xl" />
            </button>
        </div>

        <p v-if="error" class="text-center text-red-500 mt-4">Error: {{ error.message }}</p>
    </div>
</template>

<style scoped>
.category-filter-container {
    @apply w-full;
    scroll-behavior: smooth;
}
</style>