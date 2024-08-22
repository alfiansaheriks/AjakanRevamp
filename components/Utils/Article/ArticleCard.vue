<script lang="ts" setup>
interface Article {
    title: string;
    excerpt: string;
    image: string;
    slug: string;
}

const props = defineProps<{
    article: Article;
}>();

</script>

<template>
    <div class="border border-gray-200 rounded-lg shadow-sm p-4 h-60">
        <NuxtImg :src="article.image" alt="Article Image" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="mt-4">
            <h3 class="text-xl font-semibold text-sky-700">{{ article.title }}</h3>
            <p class="text-gray-600 mt-2">{{ article.excerpt }}</p>
        </div>
        <div class="mt-4 text-right">
            <NuxtLink :to="`/articles/${article.slug}`" class="text-sky-700 hover:underline">
                Read more
            </NuxtLink>
        </div>
    </div>
</template>