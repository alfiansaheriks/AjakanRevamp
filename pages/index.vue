<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';


definePageMeta({
    title: 'Paket Bisnis Undangan Digital | Ajakan',
    description: 'Paket Bisnis Undangan Digital | Ajakan',
    layout: 'page',
})

useSeoMeta({
    title: 'Paket Bisnis Undangan Digital | Ajakan',
    description: 'Paket Bisnis Undangan Digital | Ajakan',
    keywords: 'ajakan.me, ajakan, undangan, digital, undangan',
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

// Define an interface for the FAQ data
interface FAQ {
    question: string;
    answer: string;
    showAnswer: boolean;
}

// Create a ref to hold the FAQ data
const faqs = ref<FAQ[]>([
    {
        question: "Halo, saya mau bertanya seputar cara join menjadi partner di Ajakan",
        answer: "Jika kamu berminat bisa langsung klik link nya ya <a href='https://ajakan.me/partner' target='_blank'>https://ajakan.me/partner</a> pada website ini akan menjelaskan tatacara menjadi partner Ajakan.",
        showAnswer: false
    },
    {
        question: "Sistemnya bagaimana setelah kita daftar paketnya?",
        answer: "Setelah berlangganan pada website kami sesuai dengan paket: <br>A. Paket 1 (189rb/ tahun) <br>B. Paket 2 (329rb/ tahun) <br>C. Paket 3 (629rb/ tahun) <br>Tidak ada biaya tambahan lainnya saat pendaftaran. Setelahnya biaya layanan sebesar 0-20rb untuk setiap order undangan per paket. Sedangkan harga jual rata-rata 50-100ribuan (harga bisa diatur sendiri). Template undangan sudah kami sediakan, partner hanya perlu menginput data-data konsumen saja, seperti data mempelai, alamat, dll. Website kami juga di support untuk konsumen yang ingin menginput datanya sendiri, pembayaran bisa melalui online maupun offline, keduanya sudah kami support. Kami juga sudah sediakan tutorial penggunaan websitenya dalam bentuk step by step, jadi lebih praktis. Konten untuk promosi juga kami sediakan, nanti bisa diakses pada website partner.",
        showAnswer: false
    },
    {
        question: "Untuk website yang saya dapatkan apakah ada masa expirednya?",
        answer: "Expired website partner tentu ada. Baik paket bisnis 1 ataupun paket bisnis 2 itu berlaku masa aktifnya selama 1 (satu) tahun. Websitenya juga bisa diperpanjang jika ingin melanjutkan langganan partner Ajakan. Apabila telah menjadi partner Ajakan, untuk biaya perpanjangannya itu akan kita sesuaikan dengan harga domain pada saat perpanjangan dan nantinya akan kami follow up kembali.",
        showAnswer: false
    },
    {
        question: "Bedanya paket 1, 2 & 3 apa? Apa hanya di nama domain-nya?",
        answer: "Selain pada domain juga ada perbedaan pada layanan, seperti:<br>A. Paket 1 (189rb) menggunakan subdomain Ajakan, contohnya: <a href='https://merestui.ajakan.me' target='_blank'>https://merestui.ajakan.me</a> <br>B. Paket 2 (329rb) menggunakan domain .com (bisa juga domain .web.id atau my.id) <a href='https://merestui.com' target='_blank'>https://merestui.com</a><br>C. Paket 3 (629rb) menggunakan domain .com (bisa juga domain .web.id atau my.id) <a href='https://merestui.com' target='_blank'>https://merestui.com</a> serta layanan Support Digital Marketing",
        showAnswer: false
    },
    {
        question: "Setelah pembayaran apakah saya bisa langsung mendapatkan website bisnis tersebut?",
        answer: "Untuk orderan undangannya itu hanya ada biaya admin layanan dari Rp 0 sampai Rp 20.000 per-undangan yang diorder nantinya, tergantung paketnya (dari paket Free sampai Platinum). Ini merupakan biaya yang digunakan untuk generate undangannya, dan support dari admin kami jika terdapat kendala selama proses penggunaannya. Dengan harga jual rata-rata undangan biasanya dari mitra kami yang sudah join itu mulai dari Rp50.000 sampai Rp200.000/undangan, jadi ada margin keuntungan 80% - 90% untuk partner Ajakan. Harga jual bisa diatur sendiri pada website partner Ajakan nantinya. Jadi cukup terjual 2-3 undangan pertama, partner Ajakan sudah untung. Selain itu tidak ada biaya lain lagi, dan webnya bisa dipakai selama 1 tahun ke depan.",
        showAnswer: false
    },
    {
        question: "Terkait akses database dan lainnya apakah diberikan kepada partner Ajakan?",
        answer: "Website Partner sepenuhnya milik partner Ajakan. Nantinya apabila ada customer yang ingin order undangan, bisa langsung diarahkan ke website partner Ajakan itu sendiri serta bisa untuk mendaftarkan pesanannya. Setelah itu, customer akan mendapatkan akun akses sebagai customer pada website partner Ajakan. Pada penginputan data orderan undangan, customer bisa mengisi datanya sendiri melalui website tersebut secara langsung, karena disesuaikan dengan paket undangan yang diorder juga, mulai dari paket silver sampai paket platinum. Partner Ajakan bisa login di halaman admin sedangkan customer ada akunnya sendiri. Beda halnya dengan undangan video, customer perlu mengisi data dan checkout saja. Maka undangan videonya akan kami proses selama 24 jam. Selanjutnya video akan kami serahkan kepada Partner Ajakan.",
        showAnswer: false
    },
    {
        question: "Saat order undangan apakah diberi batasan jumlahnya?",
        answer: "Tidak ada batasan. Nantinya Partner Ajakan bisa mengorder banyak undangan dalam jangka waktu berapapun tanpa limit. Bukan hanya itu saja, Partner Ajakan juga bisa share undangannya kemanapun dan berapapun untuk setiap paket undangan. Ditambah lagi untuk limit tamu undangannya juga unlimited. Selain itu, untuk nama tamu yang diundang juga bisa mengisi nama tamu sesuai dengan yang diinginkan.",
        showAnswer: false
    },
    {
        question: "Saat proses order undangan oleh partner Ajakan apakah ada biaya orderan lagi yang dikenakan selain biaya admin tersebut?",
        answer: "Untuk orderan undangannya itu hanya ada biaya admin layanan dari Rp 0 sampai Rp 20.000 per-undangan yang diorder nantinya, tergantung paketnya (dari paket Free sampai Platinum). Ini merupakan biaya yang digunakan untuk generate undangannya, dan support dari admin kami jika terdapat kendala selama proses penggunaannya. Dengan harga jual rata-rata undangan biasanya dari mitra kami yang sudah join itu mulai dari Rp50.000 sampai Rp200.000/undangan, jadi ada margin keuntungan 80% - 90% untuk partner Ajakan. Harga jual bisa diatur sendiri pada website partner Ajakan nantinya. Jadi cukup terjual 2-3 undangan pertama, partner Ajakan sudah untung. Selain itu tidak ada biaya lain lagi, dan webnya bisa dipakai selama 1 tahun ke depan.",
        showAnswer: false
    },
    {
        question: "Apa itu Payment Gateway dalam pembayaran undangan?",
        answer: "Payment gateway adalah layanan yang memfasilitasi transaksi pembayaran online antara pelanggan dan penjual, khususnya untuk pembayaran berlangganan produk. Ketika pelanggan memilih untuk berlangganan produk. Kami menyediakan pembayaran otomatis menggunakan virtual akun dan e-money, pelanggan yang order langsung melalui website partner Ajakan nantinya bisa menggunakan pembayaran ini secara otomatis, jadi tidak perlu konfirmasi/kirim bukti pembayaran lagi. Nanti uangnya akan masuk ke saldo wallet partner Ajakan dan bisa dicek dari halaman admin (saldo ini bisa dicairkan kapanpun). Ini memastikan bahwa pembayaran dilakukan dengan aman dan efisien setiap kali langganan diperpanjang, dalam jangka waktu tertentu.",
        showAnswer: false
    },
    {
        question: "Apakah setelah menjadi Partner Ajakan tetap mendapatkan layanan Chat Admin?",
        answer: "Tidak perlu khawatir, di dalam website nantinya telah ada fitur Panduan dan Tutorial untuk dieksplorasi lagi saat mengoperasikan websitenya. Apabila partner Ajakan ingin bertanya lebih lanjut pun kami siap sedia menjawab karena kami menyediakan layanan 24/7.",
        showAnswer: false
    },
    {
        question: "Apakah template yang disediakan bisa digunakan semuanya?",
        answer: "Tentu saja bisa. Selain mendapatkan website untuk usaha, juga akan mendapatkan update template dan fitur website nantinya. Tidak perlu khawatir lagi untuk mendesain undangan dan pengembangan website. Karena platform yang dimiliki adalah website undangan digital milik kamu sendiri. Kami telah menyediakan puluhan tema undangan website dan undangan video yang akan kami update setiap bulannya. Saat ini telah ada 50++ tema dan template yang tersedia. Kita juga telah update 7 produk undangan digital, seperti: <br>• Undangan Website Pernikahan <br>• Undangan Video Pernikahan <br>• Undangan Khitanan <br>• Undangan Aqiqah <br>• Undangan Wisuda <br>• Undangan Birthday <br>• Undangan Hari Besar",
        showAnswer: false
    },
    {
        question: "Berikan contoh website partner Ajakan",
        answer: "Berikut contoh website partner kami yang sudah bergabung: <br> <a href='https://undigindo.com' target='_blank'>https://undigindo.com</a> <br> <a href='https://nuivah.com' target='_blank'>https://nuivah.com</a> <br> <a href='https://aisianwedding.com' target='_blank'>https://aisianwedding.com</a> <br> <a href='https://theparade.id' target='_blank'>https://theparade.id</a>",
        showAnswer: false
    },
]);

const toggleAnswer = (index: number): void => {
    faqs.value[index].showAnswer = !faqs.value[index].showAnswer;
};
</script>

<template>
    <div class="flex-1 flex flex-col bg-[#f8f9fd]">
        <!-- First Section with a transition background -->
        <section v-if="isLargeScreen" id="section1"
            class="bg-gradient-to-br from-white to-sky-100 flex-1 flex flex-col justify-center items-center relative bg-cover bg-center mt-20 min-h-[1300px] animate__animated animate__fadeInRight"
            style="background-image: url('/images/HeroSection1.png');">
            <!-- Arrow icon -->
            <div @click="scrollToSection('section2')"
                class="absolute top-[46%] z-20 flex items-center justify-center w-full">
                <Icon name="mdi:arrow-down-drop-circle" class="text-sky-300 text-5xl cursor-pointer" />
            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center w-full px-5 lg:px-28 py-20 mb-20">
                <div class="max-w-[800px] mt-20 px-4 animate__animated animate__fadeInLeft custom-delay-500ms">
                    <h1 class="text-xl lg:leading-10 lg:text-5xl mb-7">
                        Platform <b class="text-sky-400">B2B</b><span class="font-semibold"> Paket<h1
                                class="text-xl lg:text-5xl font-semibold"> Bisnis Undangan Digital</h1></span>
                    </h1>
                    <div class="text-md lg:leading-tight lg:text-lg lg:mt-2 mt-4 lg:max-w-[700px]">
                        Mulai bisnis undangan digital dengan brand dan website milik kamu sendiri. Dengan dukungan
                        kami,
                        kamu dapat membangun bisnis sendiri dan menghasilkan pendapatan sampingan yang menjanjikan
                    </div>
                    <div class="flex justify-start gap-4 mt-7">
                        <button
                            class="bg-[#0191D8] p-2 lg:p-3 lg:w-[200px] text-white text-md border border-transparent font-normal hover:bg-transparent hover:border hover:border-[#0191D8] hover:text-[#0191D8] rounded-md">Bergabung
                            Sekarang</button>
                        <button
                            class="bg-transparent lg:p-3 lg:w-[200px] w-[100px] border border-[#0191D8] text-[#0191D8] text-md font-normal hover:bg-[#0191D8] hover:text-white rounded-md">Free
                            Trial</button>
                    </div>
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-center items-center relative w-full px-24">
                <UtilsCardSection2 />
            </div>
        </section>
        <section v-else id="section1"
            class="bg-gradient-to-br from-white to-sky-100 flex-1 flex flex-col justify-center items-center relative bg-cover bg-center mt-20 min-h-[1300px] py-20"
            style="background-image: url('/images/HeroMobile1.png');" data-aos="fade-right">
            <!-- Arrow icon -->
            <div @click="scrollToSection('section2')"
                class="absolute top-[60%] z-20 flex items-center justify-center w-full">
                <Icon name="mdi:arrow-down-drop-circle" class="text-sky-300 text-3xl cursor-pointer" />
            </div>

            <div class="flex flex-col sm:flex-row justify-between items-center w-full px-5 lg:px-28 py-10 mb-20">
                <div class="max-w-[550px]" data-aos="fade-left">
                    <h1 class="text-xl lg:text-4xl">
                        Platform <b class="text-sky-400">B2B</b><span class="font-semibold"> Paket<h1
                                class="text-xl lg:text-4xl font-semibold"> Bisnis Undangan Digital</h1></span>
                    </h1>
                    <div class="text-md lg:text-lg lg:mt-2 mt-4">
                        Mulai bisnis undangan digital dengan brand dan website milik kamu sendiri. Dengan dukungan
                        kami,
                        kamu dapat membangun bisnis sendiri dan menghasilkan pendapatan sampingan yang menjanjikan
                    </div>
                    <div class="flex justify-start gap-4 mt-4">
                        <button
                            class="bg-[#0191D8] p-2 lg:p-3 lg:w-[200px] text-white text-xs border border-transparent font-normal hover:bg-transparent hover:border hover:border-[#0191D8] hover:text-[#0191D8] rounded-md">Bergabung
                            Sekarang</button>
                        <button
                            class="bg-transparent lg:p-3 lg:w-[200px] w-[100px] border border-[#0191D8] text-[#0191D8] text-xs font-normal hover:bg-[#0191D8] hover:text-white rounded-md">Free
                            Trial</button>
                    </div>
                </div>
            </div>
            <div class="flex-1 flex flex-col justify-center items-center relative w-full px-5 mt-[500px]">
                <UtilsCardSection2 />
            </div>
        </section>
        <section id="section3"
            class="bg-[#E7F7FF] lg:bg-[#f8f9fd] flex-1 flex flex-col justify-center items-center py-4">
            <div class="md:flex md:flex-row md:justify-between md:items-center w-full px-5 lg:px-28">
                <UtilsCardSection3 />
            </div>
        </section>
        <section v-if="isLargeScreen" id="section4"
            class="flex-1 flex flex-col justify-center items-center min-h-[100vh] bg-cover bg-center"
            style="background-image: url('/images/HeroSection3.png'); background-color: #F5F5F5;" data-aos="fade-right">
            <div class="flex flex-col sm:flex-row justify-between items-center w-full px-5 lg:px-28">
                <div class="flex justify-center w-full sm:w-6/12 h-full">
                    <!-- Empty container, background image will fill the section -->
                </div>

                <!-- Right Side: Text -->
                <div class="w-full sm:w-5/12" data-aos="fade-left">
                    <h2 class="text-xl lg:text-4xl font-semibold mb-4">Estimasi <span
                            class="text-[#0191D8]">Keuntungan</span> yang
                        akan Kamu Dapatkan</h2>
                    <p class="leading-tight text-base lg:leading-tight lg:text-lg mt-8">
                        Di pasaran, paket website undangan digital biasanya dihargai sekitar Rp100.000 - Rp300.000
                        tergantung
                        fiturnya. Namun, di Ajakan, mitra kami sering menjualnya sekitar Rp100.000. <span
                            class="lg:leading-tight text-base lg:text-lg lg:text-[#0191D8] font-semibold">Dengan menjual hanya 2 undangan
                            per
                            hari, dengan margin keuntungan Rp100.000, Anda bisa menghasilkan Rp6.000.000 dalam 30
                            hari.</span>
                    </p>
                </div>
            </div>
        </section>
        <section v-else id="section4" class="flex-1 flex flex-col justify-center items-center min-h-[100vh]" data-aos="fade-right">
            <div class="flex flex-col sm:flex-row justify-between items-center w-full">
                <div class="flex justify-center w-full sm:w-6/12 h-full">
                    <NuxtImg src="/image/HpMobileSection4.png" alt="Hero Section 3" class="w-full h-full mt-2" />
                </div>

                <!-- Right Side: Text -->
                <div class="w-full sm:w-5/12 px-5 py-10" data-aos="fade-left">
                    <h2 class="text-xl lg:text-4xl font-semibold mb-4">Estimasi <span
                            class="text-[#0191D8]">Keuntungan</span> yang
                        akan Kamu Dapatkan</h2>
                    <p class="text-sm lg:text-lg">
                        Di pasaran, paket website undangan digital biasanya dihargai sekitar Rp100.000 - Rp300.000
                        tergantung
                        fiturnya. Namun, di Ajakan, mitra kami sering menjualnya sekitar Rp100.000. <span
                            class="text-sm lg:text-lg lg:text-[#0191D8] font-semibold">Dengan menjual hanya 2 undangan
                            per
                            hari, dengan margin keuntungan Rp100.000, Anda bisa menghasilkan Rp6.000.000 dalam 30
                            hari.</span>
                    </p>
                </div>
            </div>
        </section>

        <section id="section5"
            class="bg-[#f8f9fd] flex-1 flex flex-col justify-center items-center min-h-[calc(100vh-68px)]">
            <div class="text-center py-12">
                <h2 class="text-2xl lg:text-4xl font-bold">Temukan <span class="text-[#0191D8]">Pilihan Paket Usaha</span> Terbaik
                    <br/>untuk Kamu</h2>
            </div>
                <div class="flex justify-center gap-2 w-full px-5 lg:px-28">
                    <UtilsCardPackage />
                </div>
        </section>
        <section id="section6"
            class="bg-[#f8f9fd] flex-1 flex flex-col justify-center items-center lg:min-h-[550px] px-5 lg:px-0 mt-32">
            <!-- Title -->
            <div class="text-center mt-10 mb-10">
                <h2 class="text-3xl md:text-3xl font-semibold">Kebahagiaan pelanggan merupakan <span
                        class="text-[#0191D8]">aset <br/>berharga bagi kami</span>
                </h2>
            </div>
            <div class="flex flex-1 w-full gap-8 mx-auto">
                <UtilsCardTestimonials />
            </div>
        </section>
        <section v-if="isLargeScreen" id="section7"
            class="flex-1 flex flex-col justify-center items-center min-h-[100vh] bg-cover bg-center"
            style="background-image: url('/images/HeroSection7.png'); background-color: #f8f9fd;"
            data-aos="fade-left">
            <div class="flex flex-col lg:flex-row justify-between w-full px-5 lg:px-28" data-aos="fade-right">
                <div class="mb-4">
                    <h1 class="text-3xl font-semibold max-w-[600px] lg:max-w-[500px]">Peluang yang Menjanjikan untuk <span
                            class="text-[#0191D8]">Bisnis Kamu</span></h1>
                    <div class="text-lg mt-6">
                        <p class="max-w-[600px] lg:max-w-[550px] leading-tight">
                            Bersama kami, bisnis undangan digitalmu akan lebih mudah. <b>Kami menyediakan layanan
                                terintegrasi
                                otomatis, termasuk sistem pembayaran E-Money & Virtual Account.</b> Tak perlu lagi
                            konfirmasi manual
                            atau biaya transfer antar bank, semuanya otomatis! Mulai fokus pada bisnis atau gunakan
                            sebagai
                            sampingan untuk penghasilan tambahan. <b>Coba sekarang dengan pembayaran satu kali untuk
                                setahun!</b>
                        </p>
                    </div>
                    <button
                        class="bg-[#0191D8] border text-white hover:bg-transparent hover:text-[#0191D8] hover:border hover:border-[#0191D8] p-3 mt-8 rounded-xl">Bergabung
                        Sekarang</button>
                </div>
            </div>
        </section>
        <section v-else id="section7"
            class="flex-1 flex flex-col justify-center items-center min-h-[100vh] bg-cover bg-center">
            <div class="flex flex-col lg:flex-row justify-between w-full lg:mt-10 px-5 lg:px-28">
                <div class="text-center mb-8 py-12">
                    <h2 class="text-3xl font-bold">Temukan <span class="text-[#0191D8]">Pilihan Paket Usaha</span>
                        Terbaik
                        untuk Kamu</h2>
                </div>
                <div data-aos="fade-left">
                    <NuxtImg src="/image/LaptopSection7.png" alt="Hero Section 7" class="w-full h-full" />
                </div>
                <div class="mb-4 mt-4" data-aos="fade-right">
                    <h1 class="text-3xl max-w-[600px]">Peluang yang Menjanjikan untuk <span
                            class="text-[#0191D8]">Bisnis Kamu</span></h1>
                    <div class="text-lg mt-2">
                        <p class="max-w-[600px]">
                            Bersama kami, bisnis undangan digitalmu akan lebih mudah. <b>Kami menyediakan layanan
                                terintegrasi
                                otomatis, termasuk sistem pembayaran E-Money & Virtual Account.</b> Tak perlu lagi
                            konfirmasi manual
                            atau biaya transfer antar bank, semuanya otomatis! Mulai fokus pada bisnis atau gunakan
                            sebagai
                            sampingan untuk penghasilan tambahan. <b>Coba sekarang dengan pembayaran satu kali untuk
                                setahun!</b>
                        </p>
                    </div>
                    <button
                        class="bg-[#0191D8] border text-white hover:bg-transparent hover:text-[#0191D8] hover:border hover:border-[#0191D8] p-3 mt-6 rounded-xl">Bergabung
                        Sekarang</button>
                </div>
            </div>
        </section>
        <section v-if="isLargeScreen" id="award-section" class="bg-[#f8f9fd] flex-1 flex flex-col justify-center items-center mt-8" data-aos="fade">
            <div class="flex flex-col justify-center items-center w-full px-28">
                <div class="flex flex-col sm:flex-row justify-between items-center w-full  mx-auto gap-8">
                    <div class="flex flex-col bg-white px-36 py-11 rounded-xl w-full">
                        <div class="flex justify-center items-center mb-4">
                            <!-- Logo Placeholder -->
                            <NuxtImg src="/image/awardlogo.png" alt="Logo Ajakan" class="w-40 h-full lg:w-40" />
                        </div>
                        <h2 class="text-4xl font-bold text-center mb-6">Penghargaan</h2>
                        <p class="leading-tight text-center text-base mb-1">Ajakan berhasil meraih penghargaan
                            <strong>Website of The Month</strong> pada bulan
                            Desember 2021 dan <strong>Website of The Year 2021</strong> pada ajang Indonesia Website
                            Awards (IWA).
                        </p><br />
                        <p class="leading-tight text-center text-base">Indonesia Website Awards (IWA), adalah sebuah ajang
                            penghargaan website
                            terbaik yang didedikasikan khusus bagi para pelaku Usaha Kecil Menengah (UKM) Digital di
                            Indonesia sebagai bentuk dukungan akan perkembangan ekonomi digital di Indonesia.</p>
                    </div>
                </div>
            </div>
        </section>
        <section v-else id="award-section" class="bg-[#f8f9fd] flex-1 flex flex-col justify-center items-center mt-8">
            <div class="flex flex-col justify-center items-center w-full px-5">
                <div class="flex flex-col sm:flex-row justify-between items-center w-full">
                    <div class="flex flex-col bg-white p-4 rounded-xl w-full">
                        <div class="flex justify-center items-center mb-4">
                            <!-- Logo Placeholder -->
                            <NuxtImg src="/image/awardlogo.png" alt="Logo Ajakan" class="w-40 h-full lg:w-40" />
                        </div>
                        <h2 class="text-2xl font-bold text-center mb-2">Penghargaan</h2>
                        <p class="text-center text-sm lg:text-base mb-1">Ajakan berhasil meraih penghargaan
                            <strong>Website of The Month</strong> pada bulan
                            Desember 2021 dan <strong>Website of The Year 2021</strong> pada ajang Indonesia Website
                            Awards (IWA).
                        </p><br />
                        <p class="text-center text-sm lg:text-base">Indonesia Website Awards (IWA), adalah sebuah ajang
                            penghargaan website
                            terbaik yang didedikasikan khusus bagi para pelaku Usaha Kecil Menengah (UKM) Digital di
                            Indonesia sebagai bentuk dukungan akan perkembangan ekonomi digital di Indonesia.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="faq-section"
            class="py-10 bg-[#f8f9fd] flex-1 flex flex-col justify-start items-center min-h-[calc(100vh-68px)] lg:mt-20">
            <div class="w-full mx-auto px-5 lg:px-28 text-lg lg:text-base" data-aos="fade-in">
                <h2 class="text-4xl font-semibold text-center mb-8">Pertanyaan yang Sering Diajukan</h2>
                <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-1 mt-8">
                    <Ucard v-for="(faq, index) in faqs" :key="index"
                        class="bg-white rounded-2xl px-12 py-4">
                        <div class="flex justify-between items-center">
                            <h3 v-if="faq.showAnswer" class="lg:text-xl font-semibold text-black">{{ faq.question
                                }}
                            </h3>
                            <h3 v-else="faq.showAnswer" class="lg:text-lg font-semibold text-black">{{ faq.question }}
                            </h3>
                            <button @click="toggleAnswer(index)"
                                class="p-4 w-4 h-4 lg:w-8 lg:h-8 flex items-center justify-center rounded-full bg-[#0191D8] focus:outline-none">
                                <span v-if="!faq.showAnswer" class="text-sky-700">
                                    <Icon name="ic:round-plus" class="text-white lg:w-5 lg:h-5 mt-2" />
                                </span>
                                <span v-else class="text-sky-700">
                                    <Icon name="lucide:minus" class="text-white lg:w-5 lg:h-5 mt-2" />
                                </span>
                            </button>
                        </div>
                        <p v-if="faq.showAnswer" class="leading-tight text-16 text-[#545454] mt-2" v-html="faq.answer"></p>
                    </Ucard>
                </div>
            </div>
        </section>
        <section id="article-section"
            class="bg-[#f8f9fd] flex-1 flex flex-col justify-start items-center min-h-[calc(100vh-250px)] px-5 mt-10">
            <div class="w-full">
                <h2 class="text-3xl font-semibold text-center mb-8">Blog</h2>
                <UtilsArticleCarousel />
                <!-- <div v-if="isLargeScreen"
                    class="w-[70%] lg:w-[30%] h-[30%] rounded-full z-10 blur-80 absolute right-0 bg-gradient-to-r from-[#84D2F9] to-transparent mt-6">
                </div> -->
            </div>
        </section>
        <section v-if="isLargeScreen" id="HeroSection" class="mt-10">
            <div>
                <UtilsHero />
            </div>
        </section>
        <section v-else>
            <div>
                <UtilsHeroMobile />
            </div>
        </section>
    </div>
</template>

<style scoped>
.custom-delay-500ms {
  animation-delay: 0.5s;
}
</style>