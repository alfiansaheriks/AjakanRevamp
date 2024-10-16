<script lang="ts" setup>
import { ref, watch, computed, onMounted } from 'vue';

const props = defineProps<{ searchQuery: string }>();

const currentPage = ref(1);
const limit = ref(12); // Make limit reactive
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

// Function to detect screen size
const updateLimitBasedOnScreenSize = () => {
    if (window.innerWidth <= 768) {
        limit.value = 9; // Set limit to 9 for mobile screens
    } else {
        limit.value = 12; // Default limit for larger screens
    }
};

const isMobile = ref(false);

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

// Compute the limit based on searchQuery
const computedLimit = computed(() => {
  return props.searchQuery ? 1 : limit.value;
});


// Fetch API
const { data: response, error, refresh } = useFetch(() => {
    let apiUrl = `https://admin-staging-big-product.ajakan.me/api/guest/blog/index?page=${currentPage.value}&limit=${computedLimit.value}&search=${props.searchQuery}`;
    if (activeCategory.value && activeCategory.value !== 'All') {
        apiUrl = `https://admin-staging-big-product.ajakan.me/api/guest/blog/index?page=${currentPage.value}&limit=${computedLimit.value}&category=${activeCategory.value}`;
    }
    return apiUrl;
});

// Categories and Blogs Data
const blogs = computed(() => {
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

const totalPages = computed(() => Math.ceil((response.value as { data?: { blogs?: { last_page?: number } } })?.data?.blogs?.last_page ?? 0 / limit.value));

// Watchers
watch(currentPage, () => {
    loading.value = true;
    refresh();
});

watch(response, () => {
    loading.value = false;
});

watch(() => props.searchQuery, () => {
    currentPage.value = 1;
    loading.value = true;
    refresh();
});

watch(activeCategory, () => {
    // console.log(activeCategory.value);
    loading.value = true;
    refresh();
});

// Detect screen size and adjust limit
onMounted(() => {
    updateLimitBasedOnScreenSize();
    window.addEventListener('resize', updateLimitBasedOnScreenSize); // Watch for screen size changes
    loading.value = true;
    refresh(); // Fetch data when component is mounted
});

// Clean up event listener on unmount
onBeforeUnmount(() => {
    window.removeEventListener('resize', updateLimitBasedOnScreenSize);
});

const changePage = (page: number) => {
    if (page > 0 && page <= totalPages.value) {
        currentPage.value = page;
        window.scrollTo(0, 0); // Scroll to the top of the page
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
    <div class="flex flex-row justify-start items-start mb-2 lg:px-24" data-aos="fade-up">
        <button v-if="isMobile" @click="scrollLeft"
            class="bg-transparent text-white mt-4 rounded-full shadow-none hover:bg-transparent border-2 border-black">
            <Icon name="ic:round-navigate-before" class="flex text-3xl text-black" />
        </button>

        <div v-if="isMobile" ref="carousel" class="category-filter-container flex overflow-x-hidden items-center mx-4 text-sm" data-aos="fade-up">
            <div v-for="category in categories" :key="category.id"
                :class="['p-2 lg:p-3 mr-1 rounded-xl border border-[#0191D8] shadow-md min-w-[calc(100vw-230px)] min-h-auto lg:min-w-[300px] text-center cursor-pointer', activeCategory === category.id ? 'bg-[#0191D8] text-white' : 'bg-white text-[#0191D8]']"
                @click="setActiveCategory(category.id)">
                {{ category.title }}
                <span
                    :class="['inline-block w-6 h-6 rounded-full text-sm', activeCategory === category.id ? 'bg-white text-[#0191D8]' : 'bg-[#0191D8] text-white']"><span class="relative top-0 text-[10px] ">{{
                        category.total }}</span></span>
            </div>
        </div>

        <div v-else ref="carousel"
            class="category-filter-container flex no-scrollbar justify-center items-center text-sm" data-aos="fade-up">
            <div v-for="category in categories" :key="category.id"
                :class="['p-2 lg:p-3 mr-1 rounded-2xl border border-[#0191D8] shadow-none text-center cursor-pointer', activeCategory === category.id ? 'bg-[#0191D8] text-white' : 'bg-white text-[#0191D8]']"
                @click="setActiveCategory(category.id)">
                {{ category.title }}
                <span
                    :class="['inline-block w-6 h-6 rounded-full text-sm', activeCategory === category.id ? 'bg-white text-[#0191D8]' : 'bg-[#0191D8] text-white']"><span class="relative top-0 text-[10px] ">{{
                        category.total }}</span></span>
            </div>
            <button @click="scrollRight"
                class="bg-transparent text-white rounded-full shadow-none hover:bg-transparent border-2 border-black">
                <Icon name="ic:round-navigate-next" class="flex text-3xl text-black" />
            </button>
        </div>


        <button v-if="isMobile" @click="scrollRight"
            class="bg-transparent text-white mt-3 rounded-full shadow-none hover:bg-transparent border-2 border-black">
            <Icon name="ic:round-navigate-next" class="flex text-3xl text-black" />
        </button>
    </div>
    <div class="mx-auto px-1 lg:p-24">
        <div v-if="loading" class="text-center text-gray-500 mt-4">Loading...</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-aos="fade-up">
            <NuxtLink v-for="blog in blogs" :key="blog.id" :to="'blog/' + blog.slug"
                class="bg-transparent rounded-lg overflow-hidden">
                <img :src="blog.image" alt="Random Image" class="w-full h-auto lg:h-64 object-cover rounded-xl">
                <div class="py-4">
                    <p class="text-gray-400 text-sm">{{ blog.created_at_reformat_simple }}</p>
                    <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
                </div>
            </NuxtLink>
        </div>

        <p v-if="!blogs.length && !loading" class="text-center text-gray-500 mt-4">No blogs available.</p>

        <div class="flex justify-start items-center mt-8" v-if="totalPages > 1" data-aos="fade-up">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1"
                class="lg:py-2 bg-transparent text-gray-700 rounded-l disabled:opacity-50 disabled:cursor-not-allowed">
                <Icon name="carbon:previous-outline" class="text-3xl" />
            </button>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages"
                class="lg:px-2 py-2  text-gray-700 rounded-r  disabled:opacity-50 disabled:cursor-not-allowed">
                <Icon name="carbon:next-outline" class="text-3xl" />
            </button>
        </div>

        <p v-if="error" class="text-center text-red-500 mt-4">Error: {{ error.message }}</p>
    </div>
</template>

<style scoped>
.category-filter-container {
    @apply w-full h-auto;
    scroll-behavior: smooth;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
</style>