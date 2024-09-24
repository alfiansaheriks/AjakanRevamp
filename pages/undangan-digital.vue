<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

definePageMeta({
    title: 'Undangan Digital',
    description: 'Ini adalah halaman undangan digital',
    layout: 'page',
});

useSeoMeta({
    title: 'Template Undangan Digital | Ajakan',
    description: 'Undangan Page',
    keywords: 'ajakan, ajakanme, ajakan.me, join partner, partner',
})

const selectedFilter = ref('');
const searchQuery = ref('');

function onFilterChange(newFilter: string) {
    selectedFilter.value = newFilter;
}

function onSearch() {
    console.log('Search query:', searchQuery.value);
    // Implement your search logic here
}

const filterType = computed(() => {
  switch (selectedFilter.value) {
    case 'Pernikahan':
      return 'wedding';
    case 'Khitanan':
      return 'khitanan';
    case 'Aqiqah':
      return 'aqiqah';
    case 'Wisuda':
      return 'wisuda';
    case 'Birthday':
      return 'birthday';
    case 'Berbuka':
      return 'bukber';
    case 'Natal':
      return 'natal';
    case 'Idul Fitri':
      return 'idul_fitri';
    default:
      return 'other';
  }
});

const paragraphContent = computed(() => {
  switch (selectedFilter.value) {
    case 'Pernikahan':
      return ' Pilih desain sesuai tema pernikahanmu, tambahkan foto dan cerita cinta kamu, lalu kirim undangan dengan cepat melalui platform digital yang <span class="font-semibold text-black lg:text-[#0191d8]">Easy to Use.</span>';
    case 'Khitanan':
      return 'Berbagi kebahagiaan dengan teman-teman dan keluarga tanpa batas, sambil menjaga tradisi dan keintiman acara tersebut.';
    case 'Aqiqah':
      return 'Pilih desain sesuai tema aqiqahmu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
    case 'Wisuda':
      return 'Pilih desain sesuai tema wisudamu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
    case 'Birthday':
      return 'Pilih desain sesuai tema ulang tahunmu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
    case 'Berbuka':
      return 'Pilih desain sesuai tema berbukamu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
    case 'Natal':
      return 'Pilih desain sesuai tema Natalmu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
    case 'Idul Fitri':
      return 'Pilih desain sesuai tema Idul Fitri-mu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
    default:
      return 'Pilih desain sesuai tema acara kamu, tambahkan foto dan cerita kamu, lalu kirim undangan dengan cepat melalui platform digital yang Easy to Use.';
  }
});

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
        <div class="flex-1 flex flex-col justify-start items-center py-20 mt-20 px-4 lg:px-0 lg:mt-32" data-aos="fade-up">
            <h1 class="text-[25px] lg:text-4xl text-center">Undangan <strong class="text-[#0191D8]">{{ selectedFilter }}</strong></h1>
            <p v-if="!isMobile" class="text-xl text-center text-[#989898] w-[682px] py-4" v-html="paragraphContent"></p>
            <p v-else class="text-[14.5px] text-center text-[#989898] w-[381px] px-5 py-4" v-html="paragraphContent"></p>
            <div class="flex flex-row gap-2 py-4 lg:py-10 px-4">
                <div class="relative w-full">
                    <i class="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 text-[#0191D8]">
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
                        class="w-full h-10 pl-12 pr-4 py-2 text-16 text-black border border-none bg-[#F5F5F5] rounded-xl focus:outline-none focus:border-[#0191D8]"
                        placeholder="Telusuri Tema" />
                </div>
                <button @click="onSearch" class="bg-[#0191D8] text-white font-normal rounded-2xl focus:outline-none px-10">Cari</button>
            </div>
            <div class="w-full lg:w-full lg:px-28 mt-10 lg:mt-20" data-aos="fade" data-aos-delay="500">
                <ClientOnly>
                <UtilsUndanganDigitalFilterCarousel @filter-change="onFilterChange" />
                </ClientOnly>
            </div>
            <div class="mt-20" >
                <UtilsUndanganDigitalUndanganCarousel :filter="filterType" :search-query="searchQuery"/>
            </div>
        </div>
    </div>
</template>