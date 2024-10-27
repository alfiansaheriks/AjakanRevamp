<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isMobile = ref(false);
const isTablet = ref(false);
const isDesktop = ref(false);

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
    isTablet.value = window.innerWidth > 768 && window.innerWidth < 1024;
    isDesktop.value = window.innerWidth >= 1024;
};
onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

</script>

<template>
    <section class="main-container">
        <!-- Undangan Digital -->
        <div class="invitation-section flex flex-col lg:flex-row md:flex-col xl:flex-col items-center my-12">
            <!-- Text Section -->
            <div class="text-section w-full" data-aos="fade-right">
                <h2 class="text-[29px] lg:text-4xl font-semibold">
                    Undangan <span class="text-black lg:text-[#0191D8]">Digital</span>
                </h2>
                <p v-if="!isMobile" class="my-4">
                    Sebuah produk revolusioner yang mengubah cara kita mengundang dan merayakan
                    peristiwa-peristiwa istimewa.
                </p>
                <p v-else class="text-sm lg:text-base my-4">
                    Sebuah produk revolusioner yang mengubah cara kita mengundang dan merayakan peristiwa-peristiwa
                    istimewa. Undangan digital terdiri dari <span class="font-semibold">undangan pernikahan, undangan
                        khitanan, undangan aqiqah,
                        undangan wisuda, undangan birthday, undangan natal, undangan buka bersama, undangan idul
                        fitri.</span>
                </p>
                <!-- Daftar Undangan -->
                <ul v-if="!isMobile" class="grid grid-cols-2 mb-4 custom-list-style">
                    <li>Undangan Pernikahan</li>
                    <li>Undangan Khitanan</li>
                    <li>Undangan Aqiqah</li>
                    <li>Undangan Wisuda</li>
                    <li>Undangan Birthday</li>
                    <li>Undangan Natal</li>
                    <li>Undangan Buka Bersama</li>
                    <li>Undangan Idul Fitri</li>
                </ul>
                <NuxtLink to="/undangan-digital">
                    <button class="bg-[#0191D8] text-white text-sm px-6 py-2 rounded-xl">Selengkapnya</button>
                </NuxtLink>
            </div>
            <!-- Image Section -->
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0" data-aos="fade-up">
                <!-- Shape Circle -->
                <div v-if="!isMobile" class="shape-circle absolute bg-gradient-to-r from-transparent to-[#84D2F9]">
                </div>
                <!-- Images -->
                <img v-if="isDesktop" src="~/assets/img/image/group-633.png" alt="Undangan Digital 1"
                    class="w-full scale-150 mt-10 object-cover" />
                <img v-if="isMobile" src="~/assets/img/image/undangandigital-mobile.png" alt="Undangan Digital"
                    class="" />
                <img v-if="isTablet" src="~/assets/img/image/undangandigital-mobile.png" alt="Undangan Digital"
                    class="phone-image-mobile" />
                <img v-if="!isMobile" src="~/assets/img/image/titikbirudetailproduk.png" alt="Undangan Digital 2"
                    class="titik-biru" />
            </div>
        </div>

        <!-- Undangan Video -->
        <div class="invitation-section flex flex-col lg:flex-row-reverse items-center my-12">
            <div class="text-section lg:w-1/2 lg:px-4" data-aos="fade-left">
                <h2 class="text-[29px] lg:text-4xl font-semibold">
                    Undangan <span class="text-black lg:text-[#0191D8]">Video</span>
                </h2>
                <p v-if="!isMobile" class="my-4">Era sosial media sekarang sudah sangat umum dengan yang namanya
                    "Undangan Video", yang
                    memberikan sentuhan modern pada undangan digital.</p>
                <p v-else class="text-sm lg:text-base my-4">Era sosial media sekarang sudah sangat umum dengan yang
                    namanya "Undangan Video",
                    yang memberikan sentuhan modern pada undangan digital. </p>
                <NuxtLink to="/undangan-video">
                    <button class="bg-[#0191D8] text-white text-sm px-6 py-2 rounded-xl">Selengkapnya</button>
                </NuxtLink>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0" data-aos="fade-up">
                <!-- Shape Circle -->
                <div class="shape-circle absolute"></div>
                <!-- Images -->
                <img v-if="!isMobile" src="~/assets/img/image/group-634.png" alt="Undangan Video 1"
                    class="scale-150 z-10 md:w-[500px] w-[400px] h-[300px] lg:h-auto absolute -top-10" />
                <!-- <img v-if="!isMobile" src="~/assets/img/image/undanganvideodetail.png" alt="Undangan Video 2"
                    class="lg:scale-150 md:w-[800px] w-[500px] relative lg:top-10 top-44 -left-20" /> -->
                <img v-else src="~/assets/img/image/undanganvideo-mobile.png" alt="Undangan Video" class="" />
            </div>
        </div>

        <!-- Undangan Save The Date Mobile -->
        <div v-if="isMobile" class="invitation-section flex flex-col lg:flex-row-reverse items-center my-12">
            <div class="text-section lg:w-1/2">
                <h2 class="text-[29px] lg:text-4xl font-semibold">
                    Undangan <span class="text-black">Save The Date</span>
                </h2>
                <p class="text-sm lg:text-base my-4">Bagi kamu yang terbiasa menyebarkan informasi event atau workshop
                    melalui poster saja,
                    sudah saatnya kamu menggunakan website yang super simple, elegant dan modern melalui “Undangan Save
                    The Date”.</p>
                <NuxtLink to="/undangan-std">
                    <button class="bg-[#0191D8] text-white text-sm px-6 py-2 rounded-xl">Selengkapnya</button>
                </NuxtLink>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
                <!-- Shape Circle -->
                <div class="shape-circle absolute"></div>
                <!-- Images -->
                <img v-if="!isMobile" src="~/assets/img/image/savethedatedetail.png" alt="Undangan Save The Date 1"
                    class="tab-image-savethedate" />
                <img v-if="!isMobile" src="~/assets/img/image/titikbirusavethedate.png" alt="Undangan Save The Date 2"
                    class="tab-image-savethedate second-tab-savethedate" />
                <img v-else src="~/assets/img/image/savethedatedetail.png" alt="Undangan Save The Date" class="" />
            </div>
        </div>

        <!-- Filter Instagram -->
        <div class="invitation-section flex flex-col lg:flex-row items-center my-12">
            <div class="text-section lg:w-1/2 lg:max-w-[545px]" data-aos="fade-right">
                <h2 class="text-[29px] lg:text-4xl font-semibold">
                    <span class="text-black lg:text-[#0191D8]">Filter Instagram</span>
                </h2>
                <p v-if="isMobile" class="text-sm lg:text-base my-4">
                    Momen spesial dapat diabadikan dalam video indah yang dapat dibagikan kepada semua
                    orang, dan filter Instagram khusus menciptakan kesan yang tak terlupakan untuk memeriahkan momen
                    tersebut.
                </p>
                <p v-else class="text-sm lg:text-base my-4">
                    Momen spesial dapat diabadikan dalam video indah yang dapat dibagikan kepada semua
                    orang, dan filter Instagram khusus menciptakan kesan yang tak terlupakan untuk memeriahkan momen
                    tersebut.
                </p>
                <NuxtLink to="/filter-instagram">
                    <button class="bg-[#0191D8] text-white text-sm px-6 py-2 rounded-xl">Selengkapnya</button>
                </NuxtLink>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0" data-aos="fade-up">
                <div class="shape-circle absolute"></div>
                <!-- Images with Gradient -->
                <div class="relative">
                    <img v-if="!isMobile" src="~/assets/img/image/group-635.png" alt="Filter Instagram 1"
                        class="filter-phone-image scale-150" />
                    <img v-else src="~/assets/img/image/group-635.png" alt="Filter Instagram 1"
                        class="rounded-lg relative w-full scale-150 mt-10" />
                </div>
            </div>
        </div>

        <!-- Undangan Save The Date -->
        <div v-if="!isMobile" class="invitation-section flex flex-col lg:flex-row-reverse items-center my-12">
            <div class="text-section lg:w-1/2 px-4" data-aos="fade-left">
                <h2 class="text-4xl font-semibold">
                    Undangan <span class="text-black lg:text-[#0191D8]">Save The Date</span>
                </h2>
                <p class="my-4">Bagi kamu yang terbiasa menyebarkan informasi event atau workshop melalui poster saja,
                    sudah saatnya kamu menggunakan website yang super simple, elegant dan modern melalui “Undangan Save
                    The Date”.</p>
                <NuxtLink to="/undangan-std">
                    <button class="bg-[#0191D8] text-white text-sm px-6 py-2 rounded-xl">Selengkapnya</button>
                </NuxtLink>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0" data-aos="fade-up">
                <!-- Shape Circle -->
                <div class="shape-circle absolute"></div>
                <div v-if="!isMobile"
                    class="shape-circle absolute left-1 bg-gradient-to-r from-transparent to-[#84D2F9]">
                </div>
                <!-- Images -->
                <img v-if="!isMobile" src="~/assets/img/image/savethedatedetail.png" alt="Undangan Save The Date 1"
                    class="tab-image-savethedate" />
                <img v-if="!isMobile" src="~/assets/img/image/titikbirusavethedate.png" alt="Undangan Save The Date 2"
                    class="tab-image-savethedate second-tab-savethedate" />
                <img v-else src="~/assets/img/image/savethedatedetail.png" alt="Undangan Save The Date"
                    class="tab-image-savethedate" />
            </div>
        </div>

        <div class="invitation-section flex flex-col lg:flex-row items-center md:my-12 my-12">
            <div class="text-section lg:w-1/2" data-aos="fade-right">
                <h2 class="text-[29px] lg:text-3xl font-bold text-black lg:text-[#0191D8]">Undangan 3D</h2>
                <p v-if="isMobile" class="text-sm lg:text-base my-4">Bagi kamu yang terbiasa menyebarkan informasi event
                    atau workshop melalui poster saja, sudah saatnya kamu menggunakan website yang super simple, elegant
                    dan modern melalui “Undangan Save The Date”.</p>
                <p v-else class="my-4">Undangan pernikahan 3D dibuat dengan teknologi yang canggih, undangan ini
                    memberikan
                    pengalaman visual yang menakjubkan kepada para undangan. Dengan dimensi tambahan, seperti tekstur,
                    kedalaman, dan pergerakan, undangan 3D menciptakan kesan yang lebih hidup dan berkesan daripada
                    undangan tradisional.</p>
                <NuxtLink to="/undangan-3d">
                    <button class="bg-[#0191D8] text-white text-sm px-6 py-2 rounded-xl">Selengkapnya</button>
                </NuxtLink>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative lg:mt-0" data-aos="fade-up">
                <!-- Shape Circle -->
                <div v-if="!isMobile" class="shape-circle absolute bg-gradient-to-r from-transparent to-[#84D2F9]">
                </div>
                <!-- Images -->
                <img v-if="!isMobile" src="~/assets/img/image/group-636.png" alt="Undangan 3D 1"
                    class="absolute w-[1000px] -bottom-[80%] scale-150 z-0" />
                <!-- <img v-if="!isMobile" src="~/assets/img/image/hp3d2.png" alt="Undangan 3D 2"
                    class="phone-3d-image second-3d-phone" /> -->
                <img v-else src="~/assets/img/image/undangan3d-mobile.png" alt="Undangan 3D"
                    class="relative -bottom-24" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.main-container {
    @apply flex flex-col items-center w-full py-12 overflow-hidden;
    background-color: #f5f5f5;
}

.invitation-section {
    @apply w-full md:px-20 lg:px-14;
}

.text-section h2 {
    @apply leading-tight;
}

.btn-primary {
    @apply bg-[#0191D8] text-white px-6 py-2 shadow hover:bg-blue-600;
}

.image-section {
    @apply relative flex justify-center;
    min-height: 250px; // Tinggi minimum untuk memastikan gambar dan shape lingkaran muat
}

.shape-circle {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    z-index: 0;
    filter: blur(80px);
}

.phone-image {
    @apply rounded-lg z-10;
    width: 100%;
    height: auto;
}

.second-phone {
    position: absolute;
    margin-right: -5%;
    bottom: 15%;
    width: 100%;
    // transform: rotate(10deg)
}

.titik-biru {
    position: absolute;
    right: -100px;
    top: 100%;
    width: 50px;
    height: 50px;
}

.phone-image-uvideo {
    @apply rounded-lg z-10;
    width: 100%;
    height: auto;
}

.second-phone-uvideo {
    position: absolute;
    width: 70%;
    margin-left: 10%;
    top: 15%;
    // transform: rotate(-10deg);
}

.tab-image-savethedate {
    @apply rounded-lg z-10;
    width: 100%;
    height: auto;
}

.second-tab-savethedate {
    position: absolute;
    width: 10%;
    margin-right: 50%;
    top: 60%;
    z-index: 1;
    // transform: rotate(-10deg);
}

.phone-3d-image {
    @apply rounded-lg z-10;
    width: 100%;
    height: auto;
}

.second-3d-phone {
    position: absolute;
    margin-left: 25%;
    bottom: 10%;
    z-index: 1;
    // transform: rotate(10deg);
}

.filter-phone-image {
    @apply rounded-lg z-20;
    width: 62.5rem;
    position: relative;
    margin-right: 60px;
    /* Posisi relatif untuk overlay */
}

.filter-second-phone {
    @apply absolute;
    width: 100%;
    margin-right: -10%;
    bottom: 15%;

}

.gradient-overlay {
    @apply absolute bottom-0 left-0 w-full h-1/2;
    /* Mengatur tinggi overlay */
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f8f9fd 100%);
    filter: blur(10px);
    /* Menambahkan efek blur */
    z-index: 30;
    /* Memastikan overlay berada di atas gambar */
    pointer-events: none;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
}

.custom-list-style {
    list-style: none;
    /* Remove default bullet points */
}

.custom-list-style li {
    position: relative;
    padding-left: 1.5rem;
    /* Space for the custom bullet */
    margin-bottom: 0.5rem;
}

.custom-list-style li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.25rem;
    /* Adjust based on the size of the text */
    width: 1rem;
    height: 1rem;
    border: 4px solid #0191D8;
    /* Tailwind blue-500 color */
    border-radius: 50%;
    background-color: transparent;
    /* Make it a hollow circle */
}


@media (max-width: 1440px) {
    .main-container {
        @apply flex flex-col items-center px-4 py-12;
        background-color: #f5f9ff;
        overflow-x: hidden;
    }

    .invitation-section {
        @apply w-full max-w-7xl;
    }

    .text-section h2 {
        @apply leading-snug;
    }

    .btn-primary {
        @apply bg-blue-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-600;
    }

    .image-section {
        @apply relative flex justify-center;
        min-height: 250px; // Tinggi minimum untuk memastikan gambar dan shape lingkaran muat
    }

    .shape-circle {
        width: 80%;
        height: 80%;
        border-radius: 50%;
        z-index: 0;
        filter: blur(80px);
    }

    .phone-image {
        @apply rounded-lg z-10;
        width: 50%;
        height: auto;
    }

    .second-phone {
        position: absolute;
        width: 50%;
        bottom: 15%;
        right: 10%;
        // transform: rotate(10deg)
    }

    .titik-biru {
        position: absolute;
        top: 350px;
        right: 10px;
        width: 50px;
        height: 50px;
    }


    .phone-image-uvideo {
        @apply rounded-lg z-10;
        width: 100%;
        height: auto;
    }

    .second-phone-uvideo {
        position: absolute;
        width: 70%;
        margin-left: 10%;
        top: 15%;
        // transform: rotate(-10deg);
    }

    .tab-image-savethedate {
        @apply rounded-lg z-10;
        width: 100%;
        height: auto;
    }

    .second-tab-savethedate {
        position: absolute;
        width: 10%;
        margin-right: 50%;
        top: 60%;
        z-index: 1;
        // transform: rotate(-10deg);
    }

    .phone-3d-image {
        @apply rounded-lg z-10;
        width: 100%;
        height: auto;
    }

    .second-3d-phone {
        position: absolute;
        margin-left: 25%;
        bottom: 10%;
        z-index: 1;
        // transform: rotate(10deg);
    }

    .filter-phone-image {
        @apply rounded-lg z-20;
        width: 30rem;
        position: relative;
        /* Posisi relatif untuk overlay */
    }

    .filter-second-phone {
        @apply absolute;
        width: 100%;
        margin-left: 25%;
        bottom: 15%;

    }

    .gradient-overlay {
        @apply absolute bottom-0 left-0 w-full h-1/2;
        /* Mengatur tinggi overlay */
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #f8f9fd 100%);
        filter: blur(10px);
        /* Menambahkan efek blur */
        z-index: 30;
        /* Memastikan overlay berada di atas gambar */
        pointer-events: none;
        border-bottom-left-radius: inherit;
        border-bottom-right-radius: inherit;
    }
}
</style>