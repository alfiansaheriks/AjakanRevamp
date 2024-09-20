<script lang="ts" setup>
import { ref, onMounted } from 'vue';

definePageMeta({
    title: 'Join Partner',
    description: 'Join Partner Page',
    layout: 'page',
})

useSeoMeta({
    title: 'Gabung Partner Paket Usaha Undangan Digital | Ajakan',
    description: 'Join Partner Page',
    keywords: 'ajakan, ajakanme, ajakan.me, join partner, partner',
})

const isMobile = ref(false);

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

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
        <section id="section1"
            class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative px-6 lg:px-4"
            data-aos="fade-up">
            <div class="flex-1 flex flex-col justify-center items-end left-3/4">
                <div
                    class="w-[70%] lg:w-[30%] h-[30%] rounded-full z-0 blur-80 absolute bg-gradient-to-r from-transparent to-[#84D2F9] lg:mt-96">
                </div>
            </div>
            <div v-if="!isMobile" class="flex-1 flex flex-col justify-center items-center mt-20 lg:mt-52">
                <div class="flex flex-col items-center max-w-[800px]">
                    <h1 class="text-2xl lg:text-5xl font-normal text-center text-[#1A1A1A]">Bergabunglah Bersama Kami,
                        <span class="font-semibold text-[#0191D8]">Jadikan Bisnis Kamu Lebih Mudah dan Sukses</span>
                    </h1>
                </div>
                <div class="flex flex-col items-center lg:max-w-[700px] mt-5">
                    <p class="text-base lg:text-lg text-center text-[#1A1A1A]">Hanya dengan bekerja dari rumah dan tanpa
                        perlu
                        melakukan kustomisasi website, <span class="font-semibold">kamu bisa bisnis undangan
                            digital</span></p>
                </div>
                <div v-if="!isMobile" class="flex flex-col items-center max-w-[700px] mt-12">
                    <button class="py-3 px-4 bg-[#0191D8] text-white rounded-xl">Bergabung Sekarang</button>
                    <Icon name="mdi:arrow-down-drop-circle"
                        class="bg-[#DFF4FF] text-black text-3xl cursor-pointer mt-20" />
                </div>
            </div>
            <div v-else class="flex-1 flex flex-col justify-center items-center mt-32">
                <div class="flex flex-col items-center w-[350px]">
                    <h1 class="text-[29px] font-normal text-center text-[#1A1A1A]">Bergabunglah Bersama Kami,
                        <span class="font-semibold text-[#0191D8]">Jadikan Bisnis Kamu Lebih Mudah dan Sukses</span>
                    </h1>
                </div>
                <div class="flex flex-col items-center w-[350px] mt-5">
                    <p class="text-base lg:text-lg text-center text-[#1A1A1A]">Hanya dengan bekerja dari rumah dan tanpa
                        perlu
                        melakukan kustomisasi website, <span class="font-semibold">kamu bisa bisnis undangan
                            digital</span></p>
                </div>
                <div v-if="!isMobile" class="flex flex-col items-center max-w-[700px] mt-12">
                    <button class="py-3 px-4 bg-[#0191D8] text-white rounded-xl">Bergabung Sekarang</button>
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
        <section id="section2"
            class="flex-1 flex flex-col justify-center min-h-[calc(100vh-68px)] relative px-4 lg:mt-20"
            data-aos="fade-up">
            <div v-if="!isMobile" class="flex-1 flex flex-col lg:flex-row justify-between gap-8 mt-8">
                <div v-if="!isMobile" class="w-full lg:w-20 flex justify-center items-start px-2">
                    <img src="/images/titik-join1.png" alt="Dot Design" class="scale-100 w-10 h-auto object-contain" />
                </div>
                <div
                    class="flex flex-col lg:flex-row items-center justify-center bg-[#0191D8] rounded-3xl w-[1113px] h-[576px] py-4">
                    <div class="w-full lg:w-full px-4 lg:px-[74px]">
                        <div class="flex flex-col items-start justify-center py-10 min-h-auto">
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
                    <div class="w-full lg:w-full mt-4 lg:mt-0">
                        <div class="relative right-14">
                            <img src="/images/woman-smartphone.png" alt="Card Image"
                                class="w-[978px] h-[568px] object-cover rounded-xl" />
                            <div
                                class="absolute w-[70%] h-[30%] left-[25%] top-[70%] inset-0 bg-gradient-to-b from-transparent to-[#0191D8] rounded-3xl z-10">
                            </div>
                        </div>
                    </div>

                </div>
                <div v-if="!isMobile" class="w-full lg:w-20 flex justify-center items-center px-2">
                    <img src="/images/titik-join1.png" alt="Dot Design" class="scale-50 w-20 h-auto object-contain" />
                </div>
            </div>


            <!-- Mobile Section -->
            <div v-else class="flex-1 flex flex-col lg:flex-row justify-between gap-8">
                <div
                    class="flex flex-col lg:flex-row lg:h-1/2 items-center justify-center bg-[#0191D8] rounded-3xl min-w-screen py-4">
                    <div class="w-full lg:w-full px-4 lg:px-8">
                        <div class="flex flex-col items-start justify-center py-10 px-4">
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
                    <div class="w-full lg:w-full mt-4 lg:mt-0">
                        <div class="relative aspect-w-4 aspect-h-3">
                            <img src="/images/woman-smartphone.png" alt="Card Image"
                                class="w-full h-full object-cover rounded-xl" />
                            <div
                                class="absolute h-[50%] top-[50%] inset-0 bg-gradient-to-b from-transparent to-[#0191D8] rounded-3xl z-10">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section id="section3"
            class="flex-1 flex flex-col justify-center lg:min-h-[calc(100vh-68px)] relative px-4 py-10 lg:mt-2">
            <div class="flex-1 flex justify-between">
                <div class="flex flex-col lg:flex-row lg:h-1/2 items-center justify-center bg-[#f8f9fd] w-full lg:py-4">
                    <div class="w-full lg:w-1/2">
                        <div v-if="!isMobile" class="relative aspect-h-3" data-aos="fade-right">
                            <img src="/images/join-partner-2.png" alt="Card Image" class="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 lg:px-20" data-aos="fade-left">
                        <div class="flex flex-col items-start justify-center">
                            <h2 v-if="!isMobile" class="text-xl lg:text-4xl font-semibold text-[#000]">Manfaat Memiliki
                                Bisnis
                                <br />Undangan Digital?
                            </h2>
                            <h2 v-else class="text-[29px] w-[350px] lg:text-4xl font-semibold text-[#000]"><span
                                    class="text-[#0191D8]">Manfaat</span> Memiliki Bisnis
                                <br />Undangan Digital?
                            </h2>
                            <p
                                class="leading-tight lg:leading-tight text-sm w-[350px] lg:w-full lg:text-base text-[#000] mt-8">
                                Kamu bisa
                                mendapatkan penghasilan
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
        <section id="section4" class="flex-1 flex flex-col justify-center lg:min-h-[calc(100vh-68px)] relative">
            <div class="flex-1 flex justify-between items-center relative">
                <div
                    class="flex flex-col lg:flex-row lg:h-1/2 items-start justify-center md:bg-[#0191D8] w-full py-20 relative">
                    <!-- Dot Design on Desktop (Top Left) -->
                    <div v-if="!isMobile" class="absolute top-0 lg:left-5 lg:top-[10%]">
                        <img src="/images/titik-join2.png" alt="Dot Design" class="w-auto h-auto" />
                    </div>

                    <!-- Image for Mobile -->
                    <div class="w-full lg:w-1/2 lg:order-2" data-aos="fade-up">
                        <div v-if="isMobile" class="">
                            <img src="/images/join-phone-1.png" alt="Phone Join Image"
                                class="w-full h-full object-cover rounded-3xl" />
                        </div>
                    </div>

                    <!-- Text Content -->
                    <div class="w-full lg:w-1/2 lg:px-24 px-4 z-10" data-aos="fade-right">
                        <div class="flex flex-col items-start justify-center lg:px-4">
                            <h2 v-if="!isMobile"
                                class="text-xl lg:text-4xl w-[545px] font-semibold text-black lg:text-[#fff] max-w-[500px]">
                                <span class="text-[#0191D8] lg:text-white">Estimasi</span> Keuntungan yang akan Kamu
                                Dapatkan
                            </h2>
                            <h2 v-else
                                class="text-[29px] w-[370px] h-[114px] font-semibold text-black lg:text-[#fff] max-w-[500px]">
                                <span class="text-[#0191D8] lg:text-white">Estimasi</span> Keuntungan yang akan Kamu
                                Dapatkan
                            </h2>
                            <p v-if="!isMobile"
                                class="leading-tight lg:leading-tight w-[545px] text-base lg:text-base text-black lg:text-[#fff] mt-8">
                                Di pasaran, paket website undangan digital biasanya dihargai sekitar Rp100.000 -
                                Rp300.000 tergantung fiturnya. Namun, di Ajakan, mitra kami sering menjual-nya sekitar
                                Rp100.000. Dengan menjual hanya 2 undangan per hari, dengan margin keuntungan
                                Rp100.000,<span v-if="!isMobile">
                                    Anda bisa menghasilkan Rp6.000.000 dalam 30 hari.</span>
                                <b v-if="isMobile"> Dengan menjual hanya 2 undangan per hari, dengan margin keuntungan
                                    Rp100.000, Anda bisa menghasilkan Rp6.000.000 dalam 30 hari.</b>
                            </p>
                            <p v-else
                                class="leading-tight lg:leading-tight w-[360px] lg:w-full text-base lg:text-base text-black lg:text-[#fff] mt-8">
                                Di pasaran, paket website undangan digital biasanya dihargai sekitar Rp100.000 -
                                Rp300.000 tergantung fiturnya. Namun, di Ajakan, mitra kami sering menjualnya sekitar
                                Rp100.000. <span class="font-semibold">Dengan menjual hanya 2 undangan per hari, dengan
                                    margin keuntungan Rp100.000,
                                    Anda bisa menghasilkan Rp6.000.000 dalam 30 hari.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Phone Image for Desktop -->
                    <div v-if="!isMobile" class="absolute h-[700px] right-0 lg:right-[10%] top-[-30%] z-0"
                        data-aos="fade-up">
                        <img src="/images/phone-join-desktop.png" alt="Card Image"
                            class="w-auto h-full object-cover rounded-3xl" />
                    </div>

                    <!-- Bottom Dot Design on Desktop (Right of Phone Image) -->
                    <div v-if="!isMobile" class="absolute right-[2%] bottom-[10%]">
                        <img src="/images/titik-join2.png" alt="Dot Design" class="w-auto h-auto" />
                    </div>
                </div>
            </div>
        </section>

        <section id="section5" class="flex-1 flex flex-col justify-center relative mt-20">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-semibold">Yang Kami Sediakan untuk Kamu</h2>
            </div>
            <UtilsJoinPartnerCardCarousel />
        </section>
        <section id="section6"
            class="bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center lg:min-h-[calc(100vh-68px)] py-10 mt-20">
            <div v-if="!isMobile">
                <div class="flex flex-col justify-center items-center text-center mb-8"
                    data-aos="fade">
                    <h2 class="text-2xl lg:text-3xl font-bold">Temukan <span class="text-[#0191D8]">Pilihan Paket
                            Usaha</span> <br/>Terbaik
                        untuk Kamu</h2>
                </div>
                <div class="px-[74px]" data-aos="fade">
                    <h3 class="leading-tight flex flex-col justify-center text-center text-sm mb-8">
                        Bayangkan harus membayar web developer, desainer, server, domain, dan pemeliharaan website.
                        Berapa
                        biaya yang harus kamu keluarkan? Mungkin lebih dari Rp 10.000.000. <b>Namun, di sini kami
                            menyediakan
                            semua itu dengan harga spesial yang jauh lebih terjangkau.</b>
                    </h3>
                </div>
            </div>
            <div v-else class="px-3">
                <div class="flex flex-col justify-center items-center text-center mb-8 lg:max-w-[600px]"
                    data-aos="fade">
                    <h2 class="text-[29px] lg:text-3xl font-bold">Temukan <span class="text-[#0191D8]">Pilihan Paket
                            Usaha</span> Terbaik
                        untuk Kamu</h2>
                </div>
                <div class="px-2" data-aos="fade">
                    <h3 class="leading-tight flex flex-col justify-center text-center text-sm mb-8">
                        Bayangkan harus membayar web developer, desainer, server, domain, dan pemeliharaan website.
                        Berapa
                        biaya yang harus kamu keluarkan? Mungkin lebih dari Rp 10.000.000. <b>Namun, di sini kami
                            menyediakan
                            semua itu dengan harga spesial yang jauh lebih terjangkau.</b>
                    </h3>
                </div>
            </div>
            <div class="flex flex-col sm:flex-row justify-between items-center w-full mx-auto px-4 lg:px-24 gap-8">
                <div class="flex flex-col sm:flex-row justify-between items-center w-full mx-auto lg:px-4 gap-8">
                    <div class="flex flex-wrap justify-center gap-2 w-full">
                        <UtilsCardPackage />
                    </div>
                </div>
            </div>
        </section>
        <section v-if="!isMobile" id="section7"
            class="bg-image flex-1 flex flex-col justify-center items-start min-h-[100vh]">
            <div class="flex-1 flex flex-col justify-center items-start">
                <div class="flex flex-col items-start lg:w-full px-4 lg:px-28" data-aos="fade-right">
                    <h2 class="text-40 font-bold text-white">
                        <span class="text-40 font-normal">Yakin tidak ingin </span>bergabung<br />sekarang juga dan
                        memanfaatkan<br />kesempatan istimewa yang<br />tersedia?
                    </h2>
                    <div class="flex flex-row gap-4">
                        <button
                            class="py-3 px-6 bg-[#fff] text-[#0191D8] hover:bg-transparent hover:border hover:text-white rounded-xl mt-8">
                            Bergabung Sekarang</button>
                        <button
                            class="py-3 px-16 bg-transparent hover:bg-white hover:text-[#0191D8] border text-white rounded-xl mt-8">
                            Free Trial</button>
                    </div>
                </div>
            </div>
        </section>
        <section v-else id="section7"
            class="flex-1 flex flex-col justify-center items-start min-h-[calc(100vh-100px)] mt-10">
            <div class="flex-1 flex flex-col justify-center items-center bg-[#0191D8]">
                <div class="flex flex-col">
                    <h2 class="text-[29px] font-semibold text-center text-white px-4">
                        Hanya dengan bekerja dari rumah dan tanpa perlu melakukan kustomisasi website, kamu bisa bisnis
                        undangan digital
                    </h2>
                </div>
                <div class="flex flex-row items-center gap-2">
                    <button
                        class="w-[150px] h-[46px] text-sm bg-[#fff] text-[#0191D8] hover:bg-transparent hover:border hover:text-white rounded-xl mt-8">
                        Bergabung Sekarang</button>
                    <button
                        class="w-[150px] h-[46px] text-sm bg-transparent hover:bg-white hover:text-[#0191D8] border text-white rounded-xl mt-8">
                        Free Trial</button>
                </div>
            </div>
        </section>
        <section id="faq-section"
            class="py-10 bg-[#f8f9fd] flex-1 flex flex-col justify-start items-center min-h-[calc(100vh-68px)] lg:mt-[105px]">
            <div class="w-full mx-auto px-5 lg:px-28 text-lg lg:text-base" data-aos="fade">
                <h2 class="text-[28px] lg:text-3xl font-semibold text-center mb-8">Pertanyaan yang Sering Diajukan</h2>
                <div class="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
                    <Ucard v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg p-4">
                        <div class="flex justify-between items-center">
                            <h3 v-if="faq.showAnswer" class="text-base lg:text-2xl font-semibold text-black">{{
                                faq.question
                            }}
                            </h3>
                            <h3 v-else="faq.showAnswer" class="text-base lg:text-lg font-semibold text-black">{{
                                faq.question }}
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
                        <p v-if="faq.showAnswer" class="leading-tight text-base text-[#545454] mt-2"
                            v-html="faq.answer"></p>
                    </Ucard>
                </div>
            </div>
        </section>
        <section id="reminder-section"
            class="py-10 bg-[#F8F9FD] flex-1 flex flex-col justify-center items-center lg:mb-32 lg:mt-[105px]">
            <div class="flex-1 flex justify-center items-center px-8 lg:px-4">
                <div class="flex flex-col lg:flex-col lg:w-[84vw] lg:h-[40vh] justify-center items-center bg-[#0191D8] px-[7%] rounded-3xl py-[7%]"
                    data-aos="fade">
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