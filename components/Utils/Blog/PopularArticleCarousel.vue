<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const slug = route.params.slug as string;
const blogs = ref<any[]>([]);
const currentIndex = ref(0);
const itemsToShow = 3;

// Fetch blogs immediately when the component is set up
const fetchBlogs = async () => {
    try {
        const { data }: { data: any } = await useFetch(`https://ajakan.me/api/guest/blog/detail/${slug}`);
        blogs.value = data.value.data.populars;
    } catch (error) {
        // console.error('Error fetching blogs:', error);
    }
};

fetchBlogs();

const next = () => {
    if (currentIndex.value + itemsToShow < blogs.value.length) {
        currentIndex.value += itemsToShow; // Pindah ke halaman berikutnya
    }
};

const prev = () => {
    if (currentIndex.value - itemsToShow >= 0) {
        currentIndex.value -= itemsToShow; // Kembali ke halaman sebelumnya
    }
};

const isMobile = ref(false);
const updateIsMobile = () => {
    if (typeof window !== 'undefined') {
        isMobile.value = window.innerWidth <= 768;
    }
};

onMounted(() => {
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile);
});
</script>

<template>
    <div class="relative">
        <!-- Desktop View -->
        <div v-if="!isMobile" class="overflow-x-hidden">
            <div class="flex transition-transform duration-300 ease-in-out gap-2"
                :style="{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }">
                <div v-for="blog in blogs" :key="blog.id" class="flex-shrink-0 w-full sm:w-1/3">
                    <NuxtLink :to="`/blog/${blog.slug}`" class="bg-transparent rounded-lg h-full flex flex-col">
                        <img :src="`https://picsum.photos/1920/1080?random=${blog.id}`" alt="Blog Image"
                            class="w-full h-40 object-cover rounded-md mb-4">
                        <p class="text-sm text-gray-600">{{ blog.created_at_reformat_simple }}</p>
                        <h3 class="text-lg font-semibold mb-2">{{ blog.meta_title }}</h3>
                    </NuxtLink>
                </div>
            </div>
            <div class="flex mt-4">
                <button @click="prev" class="py-2 bg-transparent text-black rounded-md" :disabled="currentIndex === 0">
                    <Icon name="carbon:previous-outline" class="text-3xl" />
                </button>
                <button @click="next" class="px-2 py-2 bg-transparent text-black rounded-md"
                        :disabled="currentIndex + itemsToShow >= blogs.length">
                    <Icon name="carbon:next-outline" class="text-3xl" />
                </button>
            </div>
        </div>

        <!-- Mobile View -->
        <div v-else class="grid grid-cols-1 gap-4">
            <div v-for="(blog, index) in blogs.slice(currentIndex, currentIndex + itemsToShow)" :key="blog.id" class="w-full">
                <NuxtLink :to="`/blog/${blog.slug}`" class="bg-transparent rounded-lg h-full flex flex-col">
                    <img :src="`https://picsum.photos/1920/1080?random=${blog.id}`" alt="Blog Image"
                        class="w-full h-40 object-cover rounded-md mb-4">
                    <p class="text-sm text-gray-600">{{ blog.created_at_reformat_simple }}</p>
                    <h3 class="text-lg font-semibold mb-2">{{ blog.meta_title }}</h3>
                </NuxtLink>
            </div>
            <div class="flex mt-4">
                <button @click="prev" class="py-2 bg-transparent text-black rounded-md" :disabled="currentIndex === 0">
                    <Icon name="carbon:previous-outline" class="text-3xl" />
                </button>
                <button @click="next" class="px-1 py-2 bg-transparent text-black rounded-md" 
                        :disabled="currentIndex + itemsToShow >= blogs.length">
                    <Icon name="carbon:next-outline" class="text-3xl" />
                </button>
            </div>
        </div>
    </div>
</template>
