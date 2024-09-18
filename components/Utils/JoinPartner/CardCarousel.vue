<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const cards = ref([
    {
        cardStyle: "relative flex flex-col p-6 group bg-white hover:bg-[#0191D8] text-black shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "tdesign:internet",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#F5F5F5] group-hover:bg-white rounded-xl mb-10",
        iconColor: "text-white lg:text-[#000]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-[white] rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold text-black",
        subtitle: "",
        description: "Website dengan domain .com dan logo usaha sendiri (hemat hingga Rp4.500.000)"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "oui:integration-security",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#DF1995] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Puluhan template website undangan digital siap pakai yang sudah terintegrasi langsung ke website kamu (hemat hingga Rp3.500.000)"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "solar:tag-price-linear",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#FCAA00] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Harga jual paket undangan digital bisa kamu tentukan sendiri"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "fluent:people-32-regular",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#93328E] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Customer nantinya bisa langsung order lewat website milik kamu sendiri"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "fluent:payment-16-regular",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#00AA13] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Pembayaran untuk customer sudah otomatis menggunakan E-Money dan Virtual Account (hemat hingga Rp1.500.000)"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "fluent:calendar-template-32-regular",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#FF7F32] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Template undangan akan kami update setiap bulan dan akan selalu ada template baru (hemat hingga Rp250.000/bulan)"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "solar:server-linear",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#00AED6] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Server, hosting dan domain sudah kami siapkan untuk kamu (hemat hingga Rp600.000/tahun)"
    },
    {
        cardStyle: "relative flex flex-col p-6 bg-[#fff] group hover:bg-[#0191D8] text-white shadow-md rounded-3xl w-full h-72 lg:h-auto overflow-hidden",
        iconName: "grommet-icons:vm-maintenance",
        bgIconStyle: "w-16 h-16 flex items-center justify-center bg-[#0191D8] lg:bg-[#FF585D] rounded-xl mb-10",
        iconColor: "text-[#fff]",
        iconBstyle: "w-12 h-12 flex items-center justify-center bg-white rounded-xl mb-10",
        titleStyle: "text-48 font-bold",
        title: "16 Juta+",
        pStyle: "text-16 text-black group-hover:text-white",
        subtitleStyle: "font-bold",
        subtitle: "",
        description: "Maintenance website bulanan juga sudah kami siapkan (hemat hingga Rp200.000/bulan)"
    },
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
    <div class="px-4">
        <div v-if="isMobile" class="carousel-container flex overflow-x-auto">
            <div v-for="(card, index) in cards" :key="index" class="flex-shrink-0 w-full">
                <UtilsJoinPartnerBaseCard
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
        <div v-else class="grid-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 lg:px-24 leading-tight">
            <UtilsJoinPartnerBaseCard
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