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
        // console.log(blogs.value);
    } catch (error) {
        // console.error('Error fetching blogs:', error);
    }
};

fetchBlogs();

const next = () => {
    if (currentIndex.value < blogs.value.length - itemsToShow) {
        currentIndex.value += 1;
    }
};

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value -= 1;
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
        <div class="overflow-x-auto">
            <div class="flex transition-transform duration-300 ease-in-out"
                :style="`transform: translateX(-${currentIndex * (100 / itemsToShow)}%)`">
                <div v-for="blog in blogs" :key="blog.id" class="flex-shrink-0 w-full sm:w-1/3 px-2">
                    <NuxtLink :to="`/blog/${blog.slug}`" class="bg-transparent p-4 rounded-lg h-full flex flex-col">
                        <img :src="`https://picsum.photos/1920/1080?random=${blog.id}`" alt="Blog Image"
                            class="w-full h-40 object-cover rounded-md mb-4">
                        <p class="text-sm text-gray-600">{{ blog.created_at_reformat_simple }}</p>
                        <h3 class="text-lg font-semibold mb-2">{{ blog.meta_title }}</h3>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div v-if="!isMobile" class="flex mt-4 px-2">
            <button @click="prev" class="px-4 py-2 bg-transparent text-black rounded-md">
                <Icon name="carbon:previous-outline" class="text-3xl" />
            </button>
            <button @click="next" class="px-4 py-2 bg-transparent text-black rounded-md">
                <Icon name="carbon:next-outline" class="text-3xl" />
            </button>
        </div>
    </div>
</template>
