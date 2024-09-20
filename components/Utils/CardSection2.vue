<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
interface ApiResponse {
    data: {
        total_visitor: string | number;
        total_order: number;
        total_mitra: number;
        total_theme: number;
    }
}

const { data: stats } = await useFetch<ApiResponse>('https://ajakan.me/api/guest/statistic');
const stat = stats.value?.data;

// Fungsi untuk memformat angka menjadi 'Juta+' jika mencapai jutaan
function formatToJutaPlus(value: string | number): string {
  // Jika value berupa string, hapus tanda titik dan konversi menjadi angka
  if (typeof value === 'string') {
    value = Number(value.replace(/\./g, ''));
  }

  if (value >= 1_000_000) {
    const juta = (value / 1_000_000).toFixed(0); // Menambahkan satu angka desimal
    return `${juta} Juta+`;
  }

  return value.toLocaleString(); // Memformat angka kecil dengan koma
}

// console.log('Total Visitor Unformatted: ', stat?.total_visitor);

// Memformat angka total visitor
const totalVisitorFormatted = stat ? formatToJutaPlus(stat.total_visitor) : '0';

// console.log('Total Visitor Formatted: ', totalVisitorFormatted);

const cards = ref([
    {
        cardStyle: "relative flex flex-col w-full h-[336px] lg:h-96 lg:h-auto p-6 bg-white text-black md:text-white shadow-md rounded-3xl overflow-hidden group hover:bg-[#0191D8]",
        iconName: "fluent:people-32-regular",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] rounded-xl mb-10 group-hover:bg-[white]",
        iconColor: "text-white group-hover:text-[#0191D8]",
        titleStyle: "text-48 font-bold text-black group-hover:text-white",
        title: totalVisitorFormatted,
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "Tamu undangan",
        description: "sudah pernah menggunakan produk digital dari kami"
    },
    {
        cardStyle: "relative flex flex-col w-full h-[336px] lg:h-96 p-6 bg-white text-black md:text-white shadow-md rounded-3xl overflow-hidden group hover:bg-[#0191D8]",
        iconName: "material-symbols:shopping-cart-outline",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] rounded-xl mb-10 group-hover:bg-[white]",
        iconColor: "text-white group-hover:text-[#0191D8]",
        titleStyle: "text-48 font-bold text-black group-hover:text-white",
        title: stat?.total_order,
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "Orderan",
        description: "yang telah dibuat menjadi bukti bahwa client kami puas atas layanan yang kami berikan serta fitur menarik yang kami sediakan"
    },
    {
        cardStyle: "relative flex flex-col w-full h-[336px] lg:h-96 p-6 bg-white text-white shadow-md rounded-3xl overflow-hidden group hover:bg-[#0191D8]",
        iconName: "carbon:partnership",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] rounded-xl mb-10 group-hover:bg-[white]",
        iconColor: "text-white group-hover:text-[#0191D8]",
        titleStyle: "text-48 font-bold text-black group-hover:text-white",
        title: stat?.total_mitra,
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold text-black group-hover:text-white",
        subtitle: "Partner percaya",
        description: "untuk berkolaborasi dengan kami, saling support dan meraih keuntungan bersama"
    },
    {
        cardStyle: "relative flex flex-col p-6 w-full h-[336px] lg:h-96 bg-white text-black md:text-white shadow-md rounded-3xl overflow-hidden group hover:bg-[#0191D8]",
        iconName: "icon-park-outline:theme",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] rounded-xl mb-10 group-hover:bg-[white]",
        iconColor: "text-white group-hover:text-[#0191D8]",
        titleStyle: "text-48 font-bold text-black group-hover:text-white",
        title: stat?.total_theme,
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold text-black group-hover:text-white",
        subtitle: "Koleksi tema",
        description: "yang menawan, menciptakan suasana unik dan memukau dalam sebuah undangan digital"
    }
]);

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
    <div>
        <div v-if="isMobile" class="carousel-container flex overflow-x-auto gap-6 w-full overflow-hidden">
            <div v-for="(card, index) in cards" :key="index" class="flex-shrink-0 w-full max-w-[263px] h-[400px]">
                <UtilsCard
                    :cardStyle="card.cardStyle"
                    :iconName="card.iconName"
                    :bgIconStyle="card.bgIconStyle"
                    :iconColor="card.iconColor"
                    :titleStyle="card.titleStyle"
                    :title="card.title"
                    :pStyle="card.pStyle"
                    :subtitleStyle="card.subtitleStyle"
                    :subtitle="card.subtitle"
                    :description="card.description"
                    :data-aos="'fade-up'"
                    :data-aos-delay="index * 300"
                />
            </div>
        </div>
        <div v-else class="grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-8 overflow-hidden">
            <UtilsCard
                v-for="(card, index) in cards"
                :key="index"
                :cardStyle="card.cardStyle"
                :iconName="card.iconName"
                :bgIconStyle="card.bgIconStyle"
                :iconColor="card.iconColor"
                :titleStyle="card.titleStyle"
                :title="card.title"
                :pStyle="card.pStyle"
                :subtitleStyle="card.subtitleStyle"
                :subtitle="card.subtitle"
                :description="card.description"
                :data-aos="'fade-up'"
                :data-aos-delay="index * 300"
            />
        </div>
    </div>
</template>

<style scoped>
.carousel-container {
    scroll-snap-type: x mandatory;
}

.carousel-container > div {
    scroll-snap-align: start;
}

.grid-container {
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

.grid-container > div {
    scroll-snap-align: start;
}
</style>
