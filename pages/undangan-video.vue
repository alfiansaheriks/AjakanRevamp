<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import UndanganVideoCarousel from '~/components/Utils/UndanganVideo/UndanganVideoCarousel.vue';

definePageMeta({
    title: 'Undangan Video',
    description: 'Ini adalah halaman undangan video',
    layout: 'page',
});

useSeoMeta({
    title: 'Template Undangan Digital | Ajakan',
    description: 'Undangan Page',
    keywords: 'ajakan, ajakanme, ajakan.me, join partner, partner',
})

const selectedFilter = ref('Video'); // Default value
const searchQuery = ref('');

const isMobile = ref(false);

const updateIsMobile = () => {
    if (typeof window !== 'undefined') {
        isMobile.value = window.innerWidth <= 768;
    }
};

const onSearch = () => {
    console.log('Search query:', searchQuery.value);
    // Implement your search logic here if needed
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
    <div class="flex-1 flex flex-col bg-[#fff]">
        <div class="flex-1 flex flex-col justify-start items-center py-20 mt-20 lg:mt-32" data-aos="fade-up">
            <h1 class="text-[25px] lg:text-4xl text-center">Undangan <strong class="text-[#0191D8]">{{ selectedFilter }}</strong></h1>
            <p v-if="!isMobile" class="text-xl text-center text-[#989898] w-[682px] py-4"> Undangan yang memberikan sentuhan modern dan momen spesial dapat diabadikan dalam video indah yang dapat dibagikan kepada semua orang.</p>
            <p v-else class="text-[14.5] px-5 text-center text-[#989898] w-[381px] py-4"> Undangan yang memberikan sentuhan modern dan momen spesial dapat diabadikan dalam video indah yang dapat dibagikan kepada semua orang.</p>
            <div class="flex flex-row gap-2 px-4">
                <div class="relative w-full">
                    <i v-if="!isMobile" class="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 text-[#0191D8]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#545454">
                            <path fill-rule="evenodd"
                                d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                clip-rule="evenodd" />
                        </svg>
                    </i>
                    <i v-else class="absolute left-2 lg:left-4 top-[70%] transform -translate-y-1/2 text-[#0191D8]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#545454">
                            <path fill-rule="evenodd"
                                d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                clip-rule="evenodd" />
                        </svg>
                    </i>
                    <input v-if="!isMobile" v-model="searchQuery" type="text"
                        class="w-full h-12 pl-12 pr-24 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri atau Ketik URL" />
                    <input v-else v-model="searchQuery" type="text"
                        class="w-full h-10 pl-12 mt-8 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri Tema" />
                </div>
                <button @click="onSearch" v-if="!isMobile" class="bg-[#0191D8] text-white font-normal rounded-2xl focus:outline-none px-10">Cari</button>
                <button @click="onSearch" v-else class="bg-[#0191D8] text-white font-normal rounded-2xl focus:outline-none px-10 h-10 mt-8">Cari</button>
            </div>
            <div class="mt-20">
                <UndanganVideoCarousel :search-query="searchQuery" />
            </div>
        </div>
    </div>
</template>