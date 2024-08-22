<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const isMobile = ref(false);

const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
};

onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

</script>

<template>
    <section class="main-container">
        <!-- Undangan Digital -->
        <div class="invitation-section flex flex-col lg:flex-row md:flex-row items-center my-12">
            <!-- Text Section -->
            <div class="text-section lg:w-1/2 px-4">
                <h2 class="text-4xl font-semibold">
                    Undangan <span class="text-[#0191D8]">Digital</span>
                </h2>
                <p class="my-4">
                    Sebuah produk revolusioner yang mengubah cara kita mengundang dan merayakan
                    peristiwa-peristiwa istimewa.
                </p>
                <!-- Daftar Undangan -->
                <ul class="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 custom-list-style">
                    <li>Undangan Pernikahan</li>
                    <li>Undangan Khitanan</li>
                    <li>Undangan Aqiqah</li>
                    <li>Undangan Wisuda</li>
                    <li>Undangan Birthday</li>
                    <li>Undangan Natal</li>
                    <li>Undangan Buka Bersama</li>
                    <li>Undangan Idul Fitri</li>
                </ul>
                <button class="btn-primary">Selengkapnya</button>
            </div>
            <!-- Image Section -->
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
                <!-- Shape Circle -->
                <div v-if="!isMobile" class="shape-circle absolute bg-gradient-to-r from-transparent to-[#84D2F9]">
                </div>
                <!-- Images -->
                <NuxtImg v-if="!isMobile" src="/image/hpdigital1.png" alt="Undangan Digital 1" class="phone-image" />
                <NuxtImg v-if="!isMobile" src="/image/hpdigital2.png" alt="Undangan Digital 2"
                    class="phone-image second-phone" />
                <NuxtImg v-else src="/image/undangandigital-mobile.png" alt="Undangan Digital"
                    class="phone-image-mobile" />
                <NuxtImg v-if="!isMobile" src="/image/titikbirudetailproduk.png" alt="Undangan Digital 2"
                    class="titik-biru" />
            </div>
        </div>

        <!-- Undangan Video -->
        <div class="invitation-section flex flex-col lg:flex-row-reverse items-center my-12">
            <div class="text-section lg:w-1/2 px-4">
                <h2 class="text-4xl font-semibold">
                    Undangan <span class="text-[#0191D8]">Video</span>
                </h2>
                <p class="my-4">Era sosial media sekarang sudah sangat umum dengan yang namanya "Undangan Video".</p>
                <button class="btn-primary">Selengkapnya</button>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
                <!-- Shape Circle -->
                <div class="shape-circle absolute"></div>
                <!-- Images -->
                <NuxtImg v-if="!isMobile" src="/image/undanganvideodetail.png" alt="Undangan Video 1"
                    class="phone-image-uvideo" />
                <NuxtImg v-if="!isMobile" src="/image/undanganvideodetail.png" alt="Undangan Video 2"
                    class="phone-image-uvideo second-phone-uvideo" />
                <NuxtImg v-else src="/image/undanganvideo-mobile.png" alt="Undangan Video" class="" />
            </div>
        </div>

        <!-- Undangan Save The Date Mobile -->
        <div v-if="isMobile" class="invitation-section flex flex-col lg:flex-row-reverse items-center my-12">
            <div class="text-section lg:w-1/2 px-4">
                <h2 class="text-4xl font-semibold">
                    Filter <span class="text-[#0191D8]">Instagram</span>
                </h2>
                <p class="my-4">Bagi kamu yang terbiasa menyebarkan informasi event atau workshop melalui poster saja,
                    sudah saatnya kamu menggunakan website yang super simple, elegant dan modern melalui “Undangan Save
                    The Date”.</p>
                <button class="btn-primary">Selengkapnya</button>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
                <!-- Shape Circle -->
                <div class="shape-circle absolute"></div>
                <!-- Images -->
                <NuxtImg v-if="!isMobile" src="/image/savethedatedetail.png" alt="Undangan Save The Date 1"
                    class="tab-image-savethedate" />
                <NuxtImg v-if="!isMobile" src="/image/titikbirusavethedate.png" alt="Undangan Save The Date 2"
                    class="tab-image-savethedate second-tab-savethedate" />
                <NuxtImg v-else src="/image/savethedatedetail.png" alt="Undangan Save The Date" class="" />
            </div>
        </div>

        <!-- Filter Instagram -->
        <div class="invitation-section flex flex-col lg:flex-row items-center my-12">
            <div class="text-section lg:w-1/2 px-4">
                <h2 class="text-4xl font-semibold">
                    <span class="text-[#0191D8]">Filter Instagram</span>
                </h2>
                <p class="my-4">
                    Momen spesial dapat diabadikan dalam video indah yang dapat dibagikan kepada semua
                    orang, dan filter Instagram khusus menciptakan kesan yang tak terlupakan untuk memeriahkan momen
                    tersebut.
                </p>
                <button class="btn-primary">Selengkapnya</button>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
                <div class="shape-circle absolute"></div>
                <!-- Images with Gradient -->
                <div class="relative">
                    <NuxtImg v-if="!isMobile" src="/image/hpfilter2.png" alt="Filter Instagram 1"
                        class="filter-phone-image" />
                    <NuxtImg v-if="!isMobile" src="/image/hpfilter1.png" alt="Filter Instagram 2"
                        class="filter-phone-image filter-second-phone" />
                    <!-- <NuxtImg v-else src="/image/hpfilter2.png" alt="Filter Instagram" class="filter-phone-image" /> -->
                    <!-- Gradient Overlay -->
                    <div class="gradient-overlay"></div>
                </div>
            </div>
        </div>

        <!-- Undangan Save The Date -->
        <div v-if="!isMobile" class="invitation-section flex flex-col lg:flex-row-reverse items-center my-12">
            <div class="text-section lg:w-1/2 px-4">
                <h2 class="text-4xl font-semibold">
                    Undangan <span class="text-[#0191D8]">Save The Date</span>
                </h2>
                <p class="my-4">Bagi kamu yang terbiasa menyebarkan informasi event atau workshop melalui poster saja,
                    sudah saatnya kamu menggunakan website yang super simple, elegant dan modern melalui “Undangan Save
                    The Date”.</p>
                <button class="btn-primary">Selengkapnya</button>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-6 lg:mt-0">
                <!-- Shape Circle -->
                <div class="shape-circle absolute"></div>
                <!-- Images -->
                <NuxtImg v-if="!isMobile" src="/image/savethedatedetail.png" alt="Undangan Save The Date 1"
                    class="tab-image-savethedate" />
                <NuxtImg v-if="!isMobile" src="/image/titikbirusavethedate.png" alt="Undangan Save The Date 2"
                    class="tab-image-savethedate second-tab-savethedate" />
                <NuxtImg v-else src="/image/savethedatedetail.png" alt="Undangan Save The Date"
                    class="tab-image-savethedate" />
            </div>
        </div>

        <div class="invitation-section flex flex-col lg:flex-row items-center md:my-12">
            <div class="text-section lg:w-1/2">
                <h2 class="text-3xl font-bold text-[#0191D8]">Undangan 3D</h2>
                <p class="my-4">Sebuah produk revolusioner yang mengubah cara kita mengundang dan merayakan
                    peristiwa-peristiwa istimewa.</p>
                <button class="btn-primary">Selengkapnya</button>
            </div>
            <div class="image-section lg:w-1/2 flex justify-center relative mt-72 lg:mt-0">
                <!-- Shape Circle -->
                <div v-if="!isMobile" class="shape-circle absolute bg-gradient-to-r from-transparent to-[#84D2F9]">
                </div>
                <!-- Images -->
                <NuxtImg v-if="!isMobile" src="/image/hp3d1.png" alt="Undangan 3D 1" class="phone-3d-image" />
                <NuxtImg v-if="!isMobile" src="/image/hp3d2.png" alt="Undangan 3D 2"
                    class="phone-3d-image second-3d-phone" />
                <NuxtImg v-else src="/image/undangan3d-mobile.png" alt="Undangan 3D" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.main-container {
    @apply flex flex-col items-center px-6 py-12;
    background-color: #f5f9ff;
}

.invitation-section {
    @apply w-full max-w-7xl;
}

.text-section h2 {
    @apply leading-snug;
}

.btn-primary {
    @apply bg-[#0191D8] text-white px-6 py-2 rounded-md shadow hover:bg-blue-600;
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
    margin-left: 60%;
    bottom: 15%;
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
.custom-list-style {
  list-style: none; /* Remove default bullet points */
}

.custom-list-style li {
  position: relative;
  padding-left: 1.5rem; /* Space for the custom bullet */
  margin-bottom: 0.5rem;
}

.custom-list-style li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.25rem; /* Adjust based on the size of the text */
  width: 1rem;
  height: 1rem;
  border: 4px solid #0191D8; /* Tailwind blue-500 color */
  border-radius: 50%;
  background-color: transparent; /* Make it a hollow circle */
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
        top: 50px;
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