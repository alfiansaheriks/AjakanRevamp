<script lang="ts" setup>
import { ref, onMounted } from 'vue';

definePageMeta({
    title: 'Join Partner',
    description: 'Join Partner Page',
    layout: 'page',
})

useSeoMeta({
    title: 'Join Partner',
    description: 'Join Partner Page',
    keywords: 'join partner, partner',
})

const isMobile = ref(false);

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

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
    <div class="flex-1 flex flex-col bg-[#f8f9fd]">
        <section id="section1" class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative px-4">
            <div class="flex-1 flex flex-col justify-center items-end left-3/4">
                <div
                    class="w-[70%] lg:w-[30%] h-[30%] rounded-full z-0 blur-80 absolute bg-gradient-to-r from-transparent to-[#84D2F9] lg:mt-96">
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-center items-center">
                <div class="flex flex-col items-center max-w-[800px]">
                    <h1 class="text-2xl lg:text-5xl font-normal text-center text-[#1A1A1A]">Bergabunglah Bersama Kami,
                        <span class="font-semibold text-[#0191D8]">Jadikan Bisnis Kamu Lebih Mudah dan Sukses</span>
                    </h1>
                </div>
                <div class="flex flex-col items-center lg:max-w-[700px]">
                    <p class="text-base lg:text-lg text-center text-[#1A1A1A]">Hanya dengan bekerja dari rumah dan tanpa
                        perlu
                        melakukan kustomisasi website, <span class="font-semibold">kamu bisa bisnis undangan
                            digital</span></p>
                </div>
                <div v-if="!isMobile" class="flex flex-col items-center max-w-[700px] mt-24">
                    <UButton class="py-3 px-4 bg-[#0191D8] text-white rounded-xl">Bergabung Sekarang</UButton>
                    <Icon name="mdi:arrow-down-drop-circle"
                        class="bg-[#DFF4FF] text-black text-3xl cursor-pointer mt-20" />
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-end items-start">
                <div
                    class="w-[70%] lg:w-[30%] h-[30%] rounded-full z-0 blur-80 absolute bg-gradient-to-r from-[#84D2F9] to-transparent">
                </div>
            </div>
            <div v-if="isMobile" class="flex flex-col items-center max-w-[700px] mb-4">
                <Icon name="mdi:arrow-down-drop-circle" class="bg-[#DFF4FF] text-black text-3xl cursor-pointer mt-20" />
            </div>
        </section>
        <section id="section2" class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative px-4 mt-2">
            <div class="flex-1 flex flex-col lg:flex-row justify-between gap-8">
                <div v-if="!isMobile" class="w-full lg:w-1/4">
                    <NuxtImg src="/image/titik-join1.png" alt="Dot Design" class="w-[20%] h-auto" />
                </div>
                <div
                    class="flex flex-col lg:flex-row lg:h-1/2 items-center justify-center bg-[#0191D8] rounded-3xl w-full px-4 py-4">
                    <div class="w-full lg:w-1/2 px-4 lg:px-20">
                        <div class="flex flex-col items-start justify-center">
                            <h2 class="text-xl lg:text-4xl font-semibold text-[#fff]">Mau Sukses Hasilkan<br /> Jutaan
                                Rupiah
                                Dari Rumah Dengan Buka Bisnis <br />Undangan Digital?</h2>
                            <p class="text-base lg:text-base text-[#fff] mt-8">Sekarang, memulai bisnis undangan digital
                                tak
                                perlu ribet lagi. Kami hadir dengan platform yang akan membantumu memiliki website
                                undangan
                                digital dengan brand, logo, dan domain sendiri. Semua template kami sediakan dan kami
                                update
                                bulanan. Semuanya kami yang atur! Hebat, bukan? Tertarik?</p>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 mt-4 lg:mt-0">
                        <div class="relative aspect-w-4 aspect-h-3">
                            <NuxtImg src="/image/woman-smartphone.png" alt="Card Image"
                                class="w-full h-full object-cover rounded-xl" />
                            <div
                                class="absolute h-[50%] top-[50%] inset-0 bg-gradient-to-b from-transparent to-[#0191D8] rounded-3xl z-10">
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!isMobile" class="w-full lg:w-1/4 flex justify-center items-center">
                    <NuxtImg src="/image/titik-join1.png" alt="Dot Design" class="w-[20%] h-auto" />
                </div>
            </div>
        </section>
        <section id="section3" class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative px-4 mt-2">
            <div class="flex-1 flex justify-between">
                <div
                    class="flex flex-col lg:flex-row lg:h-1/2 items-center justify-center bg-[#f8f9fd] w-full px-4 py-4">
                    <div class="w-full lg:w-1/2">
                        <div v-if="!isMobile" class="relative aspect-h-3">
                            <NuxtImg src="/image/join-partner-2.png" alt="Card Image"
                                class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 lg:px-20">
                        <div class="flex flex-col items-start justify-center">
                            <h2 v-if="!isMobile" class="text-xl lg:text-4xl font-semibold text-[#000]">Manfaat Memiliki
                                Bisnis
                                <br />Undangan Digital?
                            </h2>
                            <h2 v-else class="text-xl lg:text-4xl font-semibold text-[#000]"><span
                                    class="text-[#0191D8]">Manfaat</span> Memiliki Bisnis
                                <br />Undangan Digital?
                            </h2>
                            <p class="text-base lg:text-base text-[#000] mt-8">Kamu bisa mendapatkan penghasilan
                                tambahan jutaan rupiah dengan menjadi penyedia undangan melalui media sosial seperti
                                Facebook, WhatsApp, dan Instagram. Bisnis ini terus berkembang karena hampir semua orang
                                memiliki akses internet melalui gadget. Peluang bisnisnya sangat besar dengan margin
                                keuntungan yang besar pula, karena Kamu menjual jasa bukan barang. Ini adalah pilihan
                                ideal bagi Anda yang ingin bekerja dari rumah.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section id="section4" class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative">
            <div class="flex-1 flex justify-between items-center relative">
                <div
                    class="flex flex-col lg:flex-row lg:h-1/2 items-start justify-center md:bg-[#0191D8] w-full py-20 relative">
                    <!-- Dot Design on Desktop (Top Left) -->
                    <div v-if="!isMobile" class="absolute top-0 lg:left-5 lg:top-[10%]">
                        <NuxtImg src="/image/titik-join2.png" alt="Dot Design" class="w-auto h-auto" />
                    </div>

                    <!-- Image for Mobile -->
                    <div class="w-full lg:w-1/2 lg:order-2">
                        <div v-if="isMobile" class="">
                            <NuxtImg src="/image/join-phone-1.png" alt="Phone Join Image"
                                class="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="w-full lg:w-1/2 lg:px-20 px-4 z-10">
                        <div class="flex flex-col items-start justify-center">
                            <h2 class="text-xl lg:text-4xl font-semibold text-black lg:text-[#fff] max-w-[500px]">
                                <span class="text-[#0191D8] lg:text-white">Estimasi</span> Keuntungan yang akan Kamu
                                Dapatkan
                            </h2>
                            <p class="text-base lg:text-base text-black lg:text-[#fff] mt-8">
                                Di pasaran, paket website undangan digital biasanya dihargai sekitar Rp100.000 -
                                Rp300.000 tergantung fiturnya. Namun, di Ajakan, mitra kami sering menjual-nya sekitar
                                Rp100.000.
                                <b v-if="isMobile">Dengan menjual hanya 2 undangan per hari, dengan margin keuntungan
                                    Rp100.000, Anda bisa menghasilkan Rp6.000.000 dalam 30 hari.</b>
                            </p>
                        </div>
                    </div>

                    <!-- Phone Image for Desktop -->
                    <div v-if="!isMobile" class="absolute h-[700px] right-0 lg:right-[10%] top-[-50%] z-0">
                        <NuxtImg src="/image/phone-join-desktop.png" alt="Card Image"
                            class="w-auto h-full object-cover rounded-3xl" />
                    </div>

                    <!-- Bottom Dot Design on Desktop (Right of Phone Image) -->
                    <div v-if="!isMobile" class="absolute right-[2%] bottom-[10%]">
                        <NuxtImg src="/image/titik-join2.png" alt="Dot Design" class="w-auto h-auto" />
                    </div>
                </div>
            </div>
        </section>

        <section id="section5" class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-semibold">Yang Kami Sediakan untuk Kamu</h2>
            </div>
            <UtilsJoinPartnerCardCarousel />
        </section>
        <section id="section6"
            class="bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
            <div class="flex flex-col justify-center items-center text-center mb-8 max-w-[600px]">
                <h2 class="text-3xl font-bold">Temukan <span class="text-[#0191D8]">Pilihan Paket Usaha</span> Terbaik
                    untuk Kamu</h2>
            </div>
            <div>
                <h3 class="flex flex-col justify-center text-center text-sm mb-8">
                    Bayangkan harus membayar web developer, desainer, server, domain, dan pemeliharaan website. Berapa
                    biaya yang harus kamu keluarkan? Mungkin lebih dari Rp 10.000.000. <b>Namun, di sini kami
                        menyediakan
                        semua itu dengan harga spesial yang jauh lebih terjangkau.</b>
                </h3>
            </div>
            <div
                class="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-4 gap-8">
                <div
                    class="flex flex-col sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-4 gap-8">
                    <div class="flex flex-wrap justify-center gap-2 max-w-[1200px]">
                        <UtilsCardPackage />
                    </div>
                </div>
            </div>
        </section>
        <section v-if="!isMobile" id="section7"
            class="bg-image flex-1 flex flex-col justify-center items-start min-h-[calc(100vh-100px)]">
            <div class="flex-1 flex flex-col justify-center items-start">
                <div class="flex flex-col items-start lg:max-w-[1024px] px-4">
                    <h2 class="text-40 font-bold text-white">
                        <span class="text-40 font-normal">Yakin tidak ingin </span>bergabung<br />sekarang juga dan
                        memanfaatkan<br />kesempatan istimewa yang<br />tersedia?
                    </h2>
                    <div class="flex flex-row gap-4">
                        <UButton
                            class="py-3 px-6 bg-[#fff] text-[#0191D8] hover:bg-transparent hover:border hover:text-white rounded-xl mt-8">
                            Bergabung Sekarang</UButton>
                        <UButton
                            class="py-3 px-16 bg-transparent hover:bg-white hover:text-[#0191D8] border text-white rounded-xl mt-8">
                            Free Trial</UButton>
                    </div>
                </div>
            </div>
        </section>
        <section v-else id="section7"
            class="flex-1 flex flex-col justify-center items-start min-h-[calc(100vh-100px)] mt-10">
            <div class="flex-1 flex flex-col justify-center items-center bg-[#0191D8]">
                <div class="flex flex-col">
                    <h2 class="text-xl font-semibold text-center text-white">
                        Hanya dengan bekerja dari rumah dan tanpa perlu melakukan kustomisasi website, kamu bisa bisnis
                        undangan digital
                    </h2>
                </div>
                <div class="flex flex-row items-center gap-2 px-4">
                    <UButton
                        class="py-3 bg-[#fff] text-[#0191D8] hover:bg-transparent hover:border hover:text-white rounded-xl mt-8">
                        Bergabung Sekarang</UButton>
                    <UButton
                        class="py-3 bg-transparent hover:bg-white hover:text-[#0191D8] border text-white rounded-xl mt-8">
                        Free Trial</UButton>
                </div>
            </div>
        </section>
        <section id="faq-section"
            class="py-10 bg-[#F8F9FD] flex-1 flex flex-col justify-start items-start min-h-[calc(100vh-68px)]">
            <div class="max-w-[1200px] mx-auto px-4">
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
        <section id="reminder-section"
            class="py-10 bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
            <div class="flex-1 flex justify-center items-center px-2">
                <div
                    class="flex flex-col lg:flex-col lg:w-[1440px] justify-center items-center bg-[#0191D8] px-[7%] rounded-3xl py-[7%]">
                    <div class="flex-1 flex flex-col justify-center items-center">
                        <h2 class="text-white text-lg lg:text-40 text-center font-semibold mb-4">Informasi Penting</h2>
                        <p class="text-white text-sm lg:text-base text-center">Keberhasilan, testimonial, bonus, dan
                            contoh yang
                            disebutkan adalah hasil nyata dan tidak menjamin <b>hasil yang sama untuk Anda atau orang
                                lain,
                                serta tidak terkait dengan Instagram® dan Facebook®.</b> Hasil individu bervariasi
                            tergantung
                            kapasitas, pengalaman, motivasi, ketekunan, dan faktor lainnya.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.bg-image {
    background-image: url('~/assets/img/image/bg-join-img-7.png');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
}

.aspect-w-4 {
    aspect-ratio: 4 / 3;
}
</style>