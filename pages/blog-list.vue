<script lang="ts" setup>
import { ref } from 'vue';

definePageMeta({
    title: 'Blog List',
    description: 'Ini adalah halaman blog',
    layout: 'page',
});

const searchQuery = ref('');
const isMobile = ref(false);

// i want this handle search query send to utlis blog article carousel
const handleSearchQuery = () => {
};

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

</script>

<template>
    <div class="flex-1 flex flex-col bg-[#f8f9fd]">
        <section id="section1" class="flex-1 flex flex-col justify-center relative px-4">
            <div class="flex-1 flex flex-col justify-start items-center lg:mt-36">
                <h1 class="text-48 font-normal text-center text-black max-w-[1000px]">
                    Temukan berbagai <span class="text-[#0191D8] font-semibold">informasi yang kamu butuhkan</span> di
                    sini
                </h1>
                <div class="flex-1 flex flex-row justify-start items-start w-[100%] lg:w-[50%] gap-2 mt-4">
                    <div class="relative w-full">
                        <i class="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 text-[#0191D8]">
                            <!-- Replace with your icon, e.g., FontAwesome icon -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#545454">
                                <path fill-rule="evenodd"
                                    d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                    clip-rule="evenodd" />
                            </svg>
                        </i>
                        <input v-if="!isMobile" v-model="searchQuery" type="text"
                            class="w-full h-12 pl-12 pr-4 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                            placeholder="Telusuri atau Ketik URL" />
                        <input v-else v-model="searchQuery" type="text"
                            class="w-full h-12 pl-12 pr-4 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                            placeholder="Telusuri Tema" />
                    </div>
                    <button @click="handleSearchQuery"
                        class="w-40 h-12 bg-[#0191D8] text-white text-16 font-normal rounded-xl focus:outline-none">Cari</button>
                </div>
            </div>
            <div class="mt-20 min-h-[1200px]">
                <UtilsBlogArticleCarousel :searchQuery="searchQuery" />
            </div>
        </section>
    </div>
</template>
