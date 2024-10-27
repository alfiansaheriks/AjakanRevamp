<script lang="ts" setup>
import { ref, watch, computed, onMounted } from 'vue';

// State variables
const currentPage = ref(1);
const limit = 3;
const loading = ref(false);
const activeCategory = ref<string>('');

// Function to set active category
const setActiveCategory = (category: string) => {
    if (activeCategory.value === category) {
        activeCategory.value = '';
    } else {
        activeCategory.value = category;
    }
};

// Fetch API
const { data: response, error, refresh } = useFetch(() => {
    let apiUrl = `https://admin-staging-big-product.ajakan.me/api/guest/blog/index?page=${currentPage.value}&limit=${limit}`;
    if (activeCategory.value && activeCategory.value !== 'All') {
        apiUrl = `https://admin-staging-big-product.ajakan.me/api/guest/blog/index?page=${currentPage.value}&limit=${limit}&category=${activeCategory.value}`;
    }
    // console.log('Fetching data from:', apiUrl); // Debugging
    return apiUrl;
});

// Categories and Blogs Data
const blogs = computed(() => {
    // console.log('Response data:', response.value); // Debugging
    return (response.value as { data: { blogs: { data: any[] } } })?.data?.blogs.data.map((blog: any) => ({
        ...blog,
        image: `https://picsum.photos/800/600?random=${blog.id}`
    })) || [];
});

const categories = computed(() => {
    return (response.value as { data?: { categories: any[] } })?.data?.categories.map((category: any) => ({
        id: category.id,
        title: category.title,
        total: category.total_posting
    })) || [];
});

const totalPages = computed(() => Math.ceil((response.value as { data?: { blogs?: { last_page?: number } } })?.data?.blogs?.last_page ?? 0 / limit));

// Watchers
watch(currentPage, () => {
    loading.value = true;
    refresh();
});

watch(response, () => {
    loading.value = false;
});

watch(activeCategory, () => {
    // console.log('Active category changed:', activeCategory.value); // Debugging
    loading.value = true;
    refresh();
});

// Load data on mount
onMounted(() => {
    loading.value = true;
    refresh(); // Fetch data when component is mounted
});

// Pagination
const changePage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

// Carousel functionality
const carousel = ref<HTMLElement | null>(null);

const scrollLeft = () => {
    if (carousel.value) {
        carousel.value.scrollLeft -= 200;
    }
};

const scrollRight = () => {
    if (carousel.value) {
        carousel.value.scrollLeft += 200;
    }
};
</script>

<template>
    <div class="mx-auto lg:px-24" data-aos="fade-in">
        <div v-if="loading" class="text-center text-gray-500 mt-4">Loading...</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="blog in blogs" :key="blog.id" :to="'blog/' + blog.slug"
                class="bg-transparent rounded-lg overflow-hidden">
                <img :src="blog.image" alt="Random Image" class="w-full h-72 object-cover rounded-xl">
                <div class="py-4">
                    <p class="text-gray-400 text-sm">{{ blog.created_at_reformat_simple }}</p>
                    <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
                </div>
            </NuxtLink>
        </div>

        <p v-if="!blogs.length && !loading" class="text-center text-gray-500 mt-4">No blogs available.</p>

        <div class="flex justify-start items-center lg:mt-8" v-if="totalPages > 1">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="py-2 bg-transparent text-gray-700 rounded-l disabled:opacity-50 disabled:cursor-not-allowed">
                <Icon name="carbon:previous-outline" class="text-3xl" />
            </button>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="px-2 lg:px-4 py-2  text-gray-700 rounded-r  disabled:opacity-50 disabled:cursor-not-allowed">
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