<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

interface ApiResponse {
        data: {
            total_visitor: number;
            total_order: number;
            total_mitra: number;
            total_theme: number;
        }
    }

const { data: stats } = await useFetch<ApiResponse>('https://ajakan.me/api/guest/statistic');


const stat = stats.value?.data;

const cards = ref([
    {
        cardStyle: "relative flex flex-col p-6 bg-[#0191D8] text-white shadow-md rounded-3xl h-96 overflow-hidden",
        iconName: "fluent:people-32-regular",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-10",
        iconColor: "text-[#0191D8]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: stat?.total_visitor,
        pStyle: "text-16 text-white",
        subtitleStyle: "font-bold",
        subtitle: "Tamu undangan",
        description: "sudah pernah menggunakan produk digital dari kami"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-white md:bg-[#0191D8] text-black md:text-white shadow-md rounded-3xl h-96 overflow-hidden",
        iconName: "material-symbols:shopping-cart-outline",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-white rounded-xl mb-10",
        iconColor: "text-white lg:text-black",
        titleStyle: "text-48 font-bold",
        title: stat?.total_order,
        pStyle: "text-16 md:text-white text-black",
        subtitleStyle: "font-bold",
        subtitle: "Orderan",
        description: "yang telah dibuat menjadi bukti bahwa client kami puas atas layanan yang kami berikan serta fitur menarik yang kami sediakan"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#0191D8] text-white shadow-md rounded-3xl h-96 overflow-hidden",
        iconName: "carbon:partnership",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-white rounded-xl mb-10",
        iconColor: "text-black",
        titleStyle: "text-48 font-bold",
        title: stat?.total_mitra,
        pStyle: "text-16 text-white",
        subtitleStyle: "font-bold",
        subtitle: "Partner percaya",
        description: "untuk berkolaborasi dengan kami, saling support dan meraih keuntungan bersama"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-white md:bg-[#0191D8] text-black md:text-white shadow-md rounded-3xl h-96 overflow-hidden",
        iconName: "icon-park-outline:theme",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-white  rounded-xl mb-10",
        iconColor: "text-white lg:text-black",
        titleStyle: "text-48 font-bold",
        title: stat?.total_theme,
        pStyle: "text-16 md:text-white text-black",
        subtitleStyle: "font-bold",
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
        <div v-if="isMobile" class="carousel-container flex overflow-x-auto">
            <div v-for="(card, index) in cards" :key="index" class="flex-shrink-0 w-full">
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
                />
            </div>
        </div>
        <div v-else class="grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
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