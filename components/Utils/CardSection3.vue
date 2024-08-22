<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

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

const cards = ref([
    {
        cardStyle: "relative flex flex-col p-6 bg-[#0191D8] text-white shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden",
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-4",
        iconName: "mdi:internet",
        iconColor: "text-[#0191D8]",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Website Usaha",
        pStyle: "text-16 text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Website dengan domain .com sudah termasuk biaya hosting selama 1 tahun. Plus brand serta logo website yang bisa kamu custom"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden",
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-[#F5F5F5] rounded-xl mb-4",
        iconName: "tabler:template",
        iconColor: "text-black",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Template Undangan",
        pStyle: "text-16 text-black",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Website kamu sudah terintegrasi dengan puluhan template website, video dan filter instagram dari Ajakan. Cukup isi data, biar kami yang siapkan"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden",
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-[#F5F5F5] rounded-xl mb-4",
        iconName: "fluent:payment-16-regular",
        iconColor: "text-black",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Payment Gateway",
        pStyle: "text-16 text-black",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Pembayaran untuk customer di website kamu sudah otomatis menggunakan E-Money dan Virtual Account seperti hal nya online shop"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden",
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-[#F5F5F5] rounded-xl mb-4",
        iconName: "material-symbols:support-agent-rounded",
        iconColor: "text-black",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Support & Update",
        pStyle: "text-16 text-black",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Kami siap membantu Anda 24/7 dengan update bulanan untuk template dan fitur website, serta maintenance selama 1 tahun."
    }
]);
</script>


<template>
    <div class="max-w-[500px] mb-4">
        <h1 class="text-5xl text-[#0191D8]">
            Apa <span class="text-black">Keuntungan </span> Bergabung Bersama Ajakan?
        </h1>
        <div class="text-xl mt-4">
            Jelajahi peluang bisnis yang terus berkembang dengan paket usaha khusus untuk memulai atau mengembangkan
            bisnis undangan digital. <b>Bergabunglah dan dapatkan semua manfaat yang kami tawarkan.</b>
        </div>
    </div>
    <div v-if="isMobile" class="carousel-container flex overflow-x-auto">
        <div v-for="(card, index) in cards" :key="index" class="flex-shrink-0 w-full">
            <UtilsCardBenefit :cardStyle="card.cardStyle" :cardIconStyle="card.cardIconStyle" :iconName="card.iconName"
                :iconColor="card.iconColor" :iconSize="card.iconSize" :titleStyle="card.titleStyle" :title="card.title"
                :pStyle="card.pStyle" :subtitleStyle="card.subtitleStyle" :subtitle="card.subtitle"
                :description="card.description" />
        </div>
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <UtilsCardBenefit v-for="(card, index) in cards" :key="index" :cardStyle="card.cardStyle"
            :cardIconStyle="card.cardIconStyle" :iconName="card.iconName" :iconColor="card.iconColor"
            :iconSize="card.iconSize" :titleStyle="card.titleStyle" :title="card.title" :pStyle="card.pStyle"
            :subtitleStyle="card.subtitleStyle" :subtitle="card.subtitle" :description="card.description" />
    </div>
</template>



<style scoped>
.carousel-container {
    scroll-snap-type: x mandatory;
}

.carousel-container>div {
    scroll-snap-align: start;
}
</style>