<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

definePageMeta({
    title: 'Filter Instagram',
    description: 'Ini adalah halaman filter instagram.',
    layout: 'page',
});

const selectedFilter = ref('3D'); // Default value
const searchQuery = ref('');

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
    <div class="flex-1 flex flex-col bg-[#fff]">
        <div class="flex-1 flex flex-col justify-start items-center py-20 mt-20 lg:mt-32" data-aos="fade-up">
            <h1 class="text-[25px] lg:text-4xl text-center text-[#0191D8] font-semibold">Undangan <strong class="text-[#0191D8]">{{ selectedFilter }}</strong></h1>
            <p v-if="!isMobile" class="text-xl text-center text-[#989898] w-[682px] py-4"> Dengan dimensi tambahan, seperti tekstur, kedalaman, dan pergerakan, undangan 3D menciptakan kesan yang lebih hidup dan berkesan daripada undangan tradisional.</p>
            <p v-else class="text-[14.5px] text-center text-[#989898] w-[381px] px-5 py-4"> Dengan dimensi tambahan, seperti tekstur, kedalaman, dan pergerakan, undangan 3D menciptakan kesan yang lebih hidup dan berkesan daripada undangan tradisional.</p>
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
                    <input v-model="searchQuery" v-if="!isMobile" type="text"
                        class="w-full h-12 pl-12 pr-24 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri atau Ketik URL" />
                    <input v-model="searchQuery" v-else type="text"
                        class="w-full h-10 pl-12 mt-8 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri Tema" />
                </div>
                <button v-if="!isMobile" class="bg-[#0191D8] text-white font-normal rounded-2xl focus:outline-none px-10">Cari</button>
                <button v-else class="bg-[#0191D8] text-white font-normal rounded-2xl focus:outline-none px-10 h-10 mt-8">Cari</button>
            </div>
            <div class="mt-20">
                <UtilsUndangan3DUndanganCarousel :search-query="searchQuery" />
            </div>
        </div>
    </div>
</template>