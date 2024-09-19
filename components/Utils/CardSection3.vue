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
        cardStyle: "relative flex flex-col p-6 w-full h-80 lg:h-auto bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden group hover:bg-[#0191D8] hover:text-white", // Add group here
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-[#0191D8] rounded-xl mb-4 group-hover:bg-white", // Apply group-hover here
        iconName: "mdi:internet",
        iconColor: "bg-white group-hover:bg-[#0191D8]", // Apply group-hover here for the icon color
        iconSize: "2rem",
        titleStyle: "text-20 font-bold group-hover:text-white", // Apply group-hover here for the title color
        title: "Website Usaha",
        pStyle: "text-16  text-black group-hover:text-white", // Apply group-hover here for paragraph color
        subtitleStyle: "font-bold group-hover:text-white", // Apply group-hover here for subtitle
        subtitle: "",
        description: "Website dengan domain .com sudah termasuk biaya hosting selama 1 tahun. Plus brand serta logo website yang bisa kamu custom"
    },
    {
        cardStyle: "relative flex flex-col p-6 w-full h-80 lg:h-auto bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden group hover:bg-[#0191D8] hover:text-white",
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-[#0191D8] rounded-xl mb-4 group-hover:bg-[white]",
        iconName: "tabler:template",
        iconColor: "bg-white group-hover:bg-[#0191D8]",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Template Undangan",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Website kamu sudah terintegrasi dengan puluhan template website, video dan filter instagram dari Ajakan. Cukup isi data, biar kami yang siapkan"
    },
    {
        cardStyle: "relative flex flex-col p-6 w-full h-80 lg:h-auto bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden group hover:bg-[#0191D8] hover:text-white",
        cardIconStyle: "w-12 h-12 flex items-center justify-center rounded-xl mb-4 group-hover:bg-white bg-[#0191D8]",
        iconName: "fluent:payment-16-regular",
        iconColor: "bg-white group-hover:bg-[#0191D8]",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Payment Gateway",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Pembayaran untuk customer di website kamu sudah otomatis menggunakan E-Money dan Virtual Account seperti hal nya online shop"
    },
    {
        cardStyle: "relative flex flex-col p-6 w-full h-80 lg:h-auto bg-white text-black shadow-md rounded-3xl h-64 w-full md:w-auto overflow-hidden group hover:bg-[#0191D8] hover:text-white",
        cardIconStyle: "w-12 h-12 flex items-center justify-center bg-[#0191D8] rounded-xl mb-4 group-hover:bg-white",
        iconName: "material-symbols:support-agent-rounded",
        iconColor: "bg-white group-hover:bg-[#0191D8]",
        iconSize: "2rem",
        titleStyle: "text-20 font-bold",
        title: "Support & Update",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Kami siap membantu Anda 24/7 dengan update bulanan untuk template dan fitur website, serta maintenance selama 1 tahun."
    }
]);
</script>


<template>
    <div data-aos="fade-right" data-aos-delay="300" class="max-w-[1200px] mb-4 py-10 mr-10 overflow-hidden">
        <h1 class="lg:text-5xl text-3xl text-[#0191D8] font-semibold">
            Apa <span class="text-black">Keuntungan </span> Bergabung Bersama Ajakan?
        </h1>
        <div class="lg:leading-tight lg:text-xl text-base mt-8">
            Jelajahi peluang bisnis yang terus berkembang dengan paket usaha khusus untuk memulai atau mengembangkan
            bisnis undangan digital. <b>Bergabunglah dan dapatkan semua manfaat yang kami tawarkan.</b>
        </div>
    </div>
    <div v-if="isMobile" class="flex overflow-x-auto gap-4">
        <div v-for="(card, index) in cards" :key="index" class="flex-shrink-0 w-[calc(100%-40px)]" data-aos="fade-up" data-aos-delay="300">
            <UtilsCardBenefit :cardStyle="card.cardStyle" :cardIconStyle="card.cardIconStyle" :iconName="card.iconName"
                :iconColor="card.iconColor" :iconSize="card.iconSize" :titleStyle="card.titleStyle" :title="card.title"
                :pStyle="card.pStyle" :subtitleStyle="card.subtitleStyle" :subtitle="card.subtitle"
                :description="card.description" />
        </div>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <UtilsCardBenefit v-for="(card, index) in cards" :key="index" class="card-container leading-tight" data-aos="fade-left" data-aos-delay="300"
            :cardStyle="card.cardStyle" :cardIconStyle="card.cardIconStyle" :iconName="card.iconName"
            :iconColor="card.iconColor" :iconSize="card.iconSize" :titleStyle="card.titleStyle" :title="card.title"
            :pStyle="card.pStyle" :subtitleStyle="card.subtitleStyle" :subtitle="card.subtitle"
            :description="card.description" />
    </div>
</template>



<style scoped>
.carousel-container {
    scroll-snap-type: x mandatory;
}

.carousel-container>div {
    scroll-snap-align: start;
}

.card-container:hover .cardStyle {
    background-color: #0191D8;
    color: white;
}

.card-container:hover .cardIconStyle {
    background-color: #0191D8;
}

.card-container:hover .iconColor {
    color: white;
}

.card-container:hover .pStyle {
    color: white;
}
</style>