<script lang="ts" setup>

definePageMeta({
    title: 'Blog',
    description: 'Ini adalah halaman blog',
    layout: 'page',
});

const route = useRoute();
const slug = route.params.slug as string;

// console.log(slug);

const { data: response } = await useFetch(() => `https://ajakan.me/api/guest/blog/detail/${slug}`);

interface BlogData {
    data: {
        blogs: any; // Replace 'any' with the actual type of 'blogs'
    };
}

const blogDetail = (response.value as BlogData)?.data.blogs;
// console.log(blogDetail);

</script>
<template>
    <section id="section1"
        class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative lg:px-20 lg:py-4 bg-[#fff]">
        <div class="flex-1 flex flex-col justify-start px-4 py-4 lg:px-20 lg:py-20 mt-10">
            <h1 class="text-4xl font-semibold">{{ blogDetail.title }}</h1>
            <p class="text-sm text-[#545454]">{{ blogDetail.created_at_reformat_simple }}</p>
            <div class="flex flex-row justify-start items-start gap-2 mt-4">
                <NuxtImg src="/image/blogimage.png" alt="Article Image" class="object-cover rounded-xl w-[calc(100vw-500px)] h-auto" />
            </div>
            <div v-html="blogDetail.content" class="mt-20 max-w-[1000px]">
            </div>
        </div>
        <div class="lg:px-20">
            <DisqusComments :identifier="'/blog/'+ slug" language="en" lazy />
        </div>
        <div class="py-6 lg:px-20">
            <p class="font-semibold text-xl">Lebih Banyak dari Ajakan</p>
            <div class="py-4">
                <UtilsBlogRecentArticleCarousel />
            </div>
        </div>
        <div class="py-6 lg:px-20">
            <p class="font-semibold text-xl">Direkomendasikan dari Ajakan</p>
            <div class="py-4">
                <UtilsBlogPopularArticleCarousel />
            </div>
        </div>
    </section>
</template>