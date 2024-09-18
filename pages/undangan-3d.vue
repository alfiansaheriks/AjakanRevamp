<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

definePageMeta({
    title: 'Undangan 3D',
    description: 'Ini adalah halaman undangan save the date.',
    layout: 'page',
});

useSeoMeta({
    title: 'Template Undangan Digital | Ajakan',
    description: 'Undangan Page',
    keywords: 'ajakan, ajakanme, ajakan.me, join partner, partner',
})

const selectedFilter = ref('3D'); // Default value

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
    <div class="flex-1 flex flex-col bg-[#f8f9fd]">
        <div class="flex-1 flex flex-col justify-start items-center py-20 lg:py-28">
            <h1 class="text-4xl text-center">Undangan <strong class="text-[#0191D8]">{{ selectedFilter }}</strong></h1>
            <p class="text-center text-[#989898] max-w-[800px] py-4"> Pilih desain sesuai tema pernikahanmu, tambahkan
                foto dan cerita cinta kamu, lalu kirim undangan dengan cepat melalui platform digital yang <strong
                    class="text-[#0191D8]">Easy to Use.</strong></p>
            <div class="flex flex-row gap-2 py-4 px-4">
                <div class="relative w-full">
                    <i class="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 text-[#0191D8]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#545454">
                            <path fill-rule="evenodd"
                                d="M12.9 14.32a8 8 0 111.414-1.414l4.243 4.243a1 1 0 01-1.414 1.414l-4.243-4.243zM8 14a6 6 0 100-12 6 6 0 000 12z"
                                clip-rule="evenodd" />
                        </svg>
                    </i>
                    <input v-if="!isMobile" type="text"
                        class="w-full h-12 pl-12 pr-4 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri Tema" />
                    <input v-else type="text"
                        class="w-full h-12 pl-12 pr-4 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri Tema" />
                </div>
                <button class="bg-[#0191D8] text-white font-normal rounded-2xl focus:outline-none px-10">Cari</button>
            </div>
            <div class="py-10">
                <UtilsUndangan3DUndanganCarousel  />
            </div>
        </div>
    </div>
</template>