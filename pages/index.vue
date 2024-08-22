<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

definePageMeta({
    layout: 'page',
})

const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
    }
}

// Define reactive variable to track screen size
const isLargeScreen = ref(false);
// Function to update screen size based on window width
const updateScreenSize = () => {
    if (typeof window !== 'undefined') {
        isLargeScreen.value = window.innerWidth >= 768;
    }
};
// Set initial screen size and add event listener on mount
onMounted(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
});
// Remove event listener on unmount
onUnmounted(() => {
    if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateScreenSize);
    }
});
// Computed property to adjust slides per view based on screen size
const slidesPerView = computed(() => (isLargeScreen.value ? 3 : 1));

interface FAQ {
    question: string;
    answer: string;
    showAnswer: boolean;
}
const faqs = ref<FAQ[]>([
    { question: "Saya berminat, bagaimana cara bergabung menjadi partner?", answer: "Kamu cukup klik tombol Bergabung Sekarang, kemudian lengkapi data yang diminta. Dalam waktu 1 x 24 jam tim Ajakan akan menghubungi kamu untuk mengkonfirmasi ketersediaan domain dan melengkapi proses pembayaran.", showAnswer: false },
    { question: "Setelah saya bergabung dan memiliki website sendiri, apakah ada panduan tentang cara penggunaan websitenya?", answer: "Ada .. kami sudah siapkan panduan lengkap tentang bagaimana cara menerima orderan, mengisi data undangan dari customer, melakukan penarikan dana, dsb.", showAnswer: false },
    { question: "Apakah website saya nantinya memiliki masa expired tertentu?", answer: "We accept all major credit cards, PayPal, and bank transfers.", showAnswer: false },
    { question: "Apakah produk yang dijual cuma website website undangan digital? Apakah tidak ada produk lain, seperti video undangan?", answer: "You can track your order using the tracking number provided in your confirmation email.", showAnswer: false },
    { question: "Jika saya mengalami kendala dalam proses pengoperasian website, kemana saya harus bertanya?", answer: "Yes, you can change or cancel your order within 24 hours of placing it.", showAnswer: false },
    { question: "Ada berapa jenis paket undangan digital yang disediakan Ajakan untuk dijual di website saya?", answer: "Yes, our customer support team is available 24/7 via chat, email, or phone.", showAnswer: false },
    { question: "Apakah Ajakan akan menjamin keberhasilan saya setelah join?", answer: "Yes, our customer support team is available 24/7 via chat, email, or phone.", showAnswer: false }
]);
const toggleAnswer = (index: number): void => {
    faqs.value[index].showAnswer = !faqs.value[index].showAnswer;
};



</script>

<template>
    <div class="flex-1 flex flex-col">
        <!-- First Section with a transition background -->
        <section id="section1"
            class="bg-gradient-to-br from-white to-sky-100 flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)] relative">
            <!-- Arrow icon -->
            <div @click="scrollToSection('section2')" class="absolute bottom-4 flex items-center justify-center w-full">
                <Icon name="mdi:arrow-down-drop-circle" class="text-sky-300 text-3xl cursor-pointer" />
            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-4">
                <div class="max-w-[500px]">
                    <h1 class="text-5xl">
                        Platform <b class="text-sky-400">B2B</b> <b class="text-sky-700">Paket </b>
                    </h1>
                    <h1 class="text-4xl"><b class="text-sky-700">Bisnis Undangan Digital</b></h1>
                    <div class="text-lg mt-2">
                        Mulai bisnis undangan digital dengan brand dan website milik kamu sendiri. Dengan dukungan
                        kami,
                        kamu dapat membangun bisnis sendiri dan menghasilkan pendapatan sampingan yang menjanjikan
                    </div>
                    <div class="flex justify-start gap-4 mt-4">
                        <UButton label="Get Started" />
                        <UButton color="gray" label="Read More" />
                    </div>
                </div>
                <div class="mt-4 sm:mt-0">
                    <NuxtImg src="/image/dashboardlaptop.png" alt="testing" height="1024" densities="x1 x2"
                        class="w-[80%] sm:w-[90%] lg:w-[1000px] sm:w-auto" />
                </div>

            </div>
        </section>

        <!-- Second Section with cards -->
        <section id="section2"
            class="bg-gradient-to-tr from-white to-sky-100 flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)] relative">
            <div class=" w-full max-w-[1200px] mx-auto px-4">
                <div>
                    <UtilsCardSection2 />
                </div>
            </div>
        </section>
        <section id="section3"
            class="bg-[#E7F7FF] flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
            <div class="md:flex md:flex-row md:justify-between md:items-center w-full max-w-[1200px] mx-auto px-4">
                <UtilsCardSection3 />
            </div>
        </section>
        <section id="section4"
            class="bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
            <div
                class="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-4 gap-8">

                <div class="flex justify-center sm:w-7/12 w-full">
                    <NuxtImg src="/image/phone-benefit-edited.png" alt="Deskripsi Gambar"
                        class="w-full h-auto max-w-none sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]" />
                </div>

                <!-- Right Side: Text -->
                <div class="w-full sm:w-5/12 max-w-none">
                    <h2 class="text-4xl font-semibold mb-4">Estimasi <span class="text-[#0191D8]">Keuntungan</span> yang
                        akan Kamu Dapatkan</h2>
                    <p class="text-lg">
                        Di pasaran, paket website undangan digital biasanya dihargai sekitar Rp100.000 - Rp300.000
                        tergantung fiturnya. Namun, di Ajakan, mitra kami sering menjualnya sekitar Rp100.000. <span
                            class="text-[#0191D8] font-semibold">Dengan
                            menjual hanya 2 undangan per hari, dengan margin keuntungan Rp100.000, Anda bisa
                            menghasilkan Rp6.000.000 dalam 30 hari.</span>
                    </p>
                </div>
            </div>
        </section>
        <section id="section5"
            class="bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold">Temukan <span class="text-[#0191D8]">Pilihan Paket Usaha</span> Terbaik
                    untuk Kamu</h2>
            </div>
            <div
                class="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-4 gap-8">
                <div class="flex flex-wrap justify-center gap-2 max-w-[1200px]">
                    <UtilsCardPackage />
                </div>
            </div>
        </section>
        <section id="section6"
            class="bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center lg:min-h-[500px] min-h-[700px] px-4 md:px-8">
            <!-- Title -->
            <div class="text-center mb-8 mt-10">
                <h2 class="text-3xl md:text-4xl font-normal">Kebahagiaan pelanggan merupakan aset berharga bagi kami
                </h2>
            </div>
            <div class="flex flex-1 w-full gap-8 mx-auto">
                <UtilsCardTestimonials />
            </div>
        </section>
        <section id="section7"
            class="bg-[#F8F9FD] flex-1 flex flex-col justify-start items-start min-h-[calc(100vh-68px)] relative">
            <div class="flex flex-col sm:flex-row justify-between items-start w-full max-w-[1200px] mx-auto px-4">
                <div class="max-w-[500px] mb-4">
                    <h1 class="text-4xl font-semibold">Peluang yang Menjanjikan untuk <span
                            class="text-[#0191D8]">Bisnis Kamu</span></h1>
                    <div class="text-lg mt-2">
                        Bersama kami, bisnis undangan digitalmu akan lebih mudah. <b>Kami menyediakan layanan
                            terintegrasi
                            otomatis, termasuk sistem pembayaran E-Money & Virtual Account.</b> Tak perlu lagi
                        konfirmasi manual
                        atau biaya transfer antar bank, semuanya otomatis! Mulai fokus pada bisnis atau gunakan sebagai
                        sampingan untuk penghasilan tambahan. Coba sekarang dengan pembayaran satu kali untuk setahun!
                    </div>
                    <UButton label="Bergabung Sekarang" class="bg-[#0191D8] py-2 mt-6" />
                </div>
                <div class="relative mt-4 sm:mt-0 w-full max-w-xs sm:max-w-sm h-full">
                    <div class="hidden md:hidden lg:block">
                        <NuxtImg src="/image/hplayer.png" alt="Gambar Kecil"
                            class="w-72 h-[125%] object-cover absolute top-40 left-9" />
                        <NuxtImg src="/image/hplayer.png" alt="Gambar Besar"
                            class="w-64 md:h-96 object-cover relative top-56" />
                    </div>
                    <div
                        class="flex flex-col lg:absolute md:-bottom-72 md:-left-[800px] right-0 bg-white p-4 rounded-xl shadow-lg mx-4 md:min-w-[1085px] sm:max-w-[calc(100%-4rem)]">
                        <div class="flex justify-center items-center mb-4">
                            <!-- Logo Placeholder -->
                            <NuxtImg src="/image/awardlogo.png" alt="Logo Ajakan" class="w-full h-full lg:w-40" />
                        </div>
                        <h2 class="text-2xl font-bold text-center mb-2">Penghargaan</h2>
                        <p class="text-center text-sm lg:text-base mb-1">Ajakan berhasil meraih penghargaan <strong>Website of The
                                Month</strong> pada bulan
                            Desember 2021 dan <strong>Website of The Year 2021</strong> pada ajang Indonesia Website
                            Awards (IWA).</p>
                        <p class="text-center text-sm lg:text-base">Indonesia Website Awards (IWA), adalah sebuah ajang penghargaan website
                            terbaik yang didedikasikan khusus bagi para pelaku Usaha Kecil Menengah (UKM) Digital di
                            Indonesia sebagai bentuk dukungan akan perkembangan ekonomi digital di Indonesia.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="faq-section"
            class="py-10 bg-[#F8F9FD] flex-1 flex flex-col justify-start items-start min-h-[calc(100vh-68px)]">
            <div class="max-w-[1200px] mx-auto px-4 text-lg lg:text-base">
                <h2 class="text-4xl font-normal text-center mb-8">Pertanyaan yang Sering Diajukan</h2>
                <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
                    <Ucard v-for="(faq, index) in faqs" :key="index"
                        class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <div class="flex justify-between items-center">
                            <h3 v-if="faq.showAnswer" class="text-2xl font-normal text-[#0191D8]">{{ faq.question }}
                            </h3>
                            <h3 v-else="faq.showAnswer" class="text-24 font-normal text-black">{{ faq.question }}</h3>
                            <button @click="toggleAnswer(index)"
                                class="w-8 h-8 flex items-center justify-center rounded-full bg-sky-100 hover:bg-sky-200 focus:outline-none">
                                <span v-if="!faq.showAnswer" class="text-sky-700">
                                    <Icon name="ic:round-plus" class="w-5 h-5" />
                                </span>
                                <span v-else class="text-sky-700">
                                    <Icon name="lucide:minus" />
                                </span>
                            </button>
                        </div>
                        <p v-if="faq.showAnswer" class="text-16 text-[#545454] mt-2">{{ faq.answer }}</p>
                    </Ucard>
                </div>
            </div>
        </section>
        <section id="article-section"
            class="bg-gradient-to-br from-[#F8F9FD] to-sky-50 flex-1 flex flex-col justify-start items-center min-h-[calc(100vh-68px)] px-4 md:px-8">
            <div class="max-w-full md:max-w-[1200px] mx-auto px-4">
                <h2 class="text-5xl font-normal text-center mb-8">Blog</h2>
                <UtilsArticleCarousel />
            </div>
        </section>
        <section id="HeroSection">
            <div>
                <UtilsHero />
            </div>
        </section>
    </div>
</template>