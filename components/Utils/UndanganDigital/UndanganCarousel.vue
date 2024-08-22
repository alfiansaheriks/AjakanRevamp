<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps({
    totalArticles: {
        type: Number,
        default: 9 // Nilai default jika tidak diberikan
    }
});

const articles = ref([
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 1.',
        image: 'https://picsum.photos/1920/1080?random=1',
        slug: 'article-1'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 2.',
        image: 'https://picsum.photos/1920/1080?random=2',
        slug: 'article-2'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 3.',
        image: 'https://picsum.photos/1920/1080?random=3',
        slug: 'article-3'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 4.',
        image: 'https://picsum.photos/1920/1080?random=4',
        slug: 'article-4'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 5.',
        image: 'https://picsum.photos/1920/1080?random=5',
        slug: 'article-5'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 6.',
        image: 'https://picsum.photos/1920/1080?random=6',
        slug: 'article-6'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 7.',
        image: 'https://picsum.photos/1920/1080?random=7',
        slug: 'article-7'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 8.',
        image: 'https://picsum.photos/1920/1080?random=8',
        slug: 'article-8'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 9.',
        image: 'https://picsum.photos/1920/1080?random=9',
        slug: 'article-9'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 10.',
        image: 'https://picsum.photos/1920/1080?random=10',
        slug: 'article-10'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 11.',
        image: 'https://picsum.photos/1920/1080?random=11',
        slug: 'article-11'
    },
    {
        title: 'Beautiful Roses Wreath',
        excerpt: 'This is the excerpt for article 12.',
        image: 'https://picsum.photos/1920/1080?random=12',
        slug: 'article-12'
    },
    // Add more articles as needed
]);

const currentPage = ref(1);

const paginatedArticles = computed(() => {
    const start = (currentPage.value - 1) * props.totalArticles;
    const end = start + props.totalArticles;
    return articles.value.slice(start, end);
});
</script>

<template>
    <div class="relative px-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="item in paginatedArticles" :key="item.slug" class="w-full max-w-xs mx-auto">
                <NuxtLink :to="`/articles/${item.slug}`" class="block bg-transparent w-full rounded-none">
                    <NuxtImg :src="item.image" alt="Article Image"
                        class="w-full h-auto object-cover rounded-xl max-h-48" />
                    <div class="p-3">
                        <p class="text-sm text-[#B7B7B7]">Tema Elegant</p>
                        <h3 class="text-md font-semibold py-2">{{ item.title }}</h3>
                        <button class="bg-[#0191D8] text-white font-normal rounded-lg focus:outline-none w-full py-2">
                            <Icon name="icon-park-outline:preview-open" class="text-lg text-white" />
                            Preview
                            </button>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="flex justify-start mt-4 px-6">
            <UButton @click="currentPage > 1 && currentPage--"
                class="px-4 py-2 mx-2 bg-transparent shadow-none hover:bg-transparent rounded">
                <Icon name="carbon:previous-outline" class="text-4xl text-black" />
            </UButton>
            <UButton @click="currentPage++"
                class="px-4 py-2 mx-2 bg-transparent shadow-none hover:bg-transparent rounded">
                <Icon name="carbon:next-outline" class="text-4xl text-black" />
            </UButton>
        </div>
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