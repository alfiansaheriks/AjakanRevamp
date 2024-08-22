<script lang="ts" setup>
import { ref } from 'vue';

const cards = ref([
    { title: 'Undangan<br/>Digital', image: '/image/undangandigital.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4' },
    { title: 'Undangan<br/>Video', image: '/image/undanganvideo.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4' },
    { title: 'Undangan Save The Date', image: '/image/undangansavethedate.png', class: 'save-the-date md:mt-5 w-[40%] object-cover rounded-md mb-4' },
    { title: 'Filter<br/>Instagram', image: '/image/filterinstagram.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4' },
    { title: 'Undangan<br/>3D', image: '/image/undangan3d.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4' }
]);

</script>

<template>
    <section id="section1" class="hero-section flex flex-col min-h-[calc(100vh-68px)] relative bg-[#F7FAFC]">
        <!-- Text Section -->
        <div class="text-container flex flex-col px-4 md:px-8 lg:px-16">
            <h1 class="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-normal text-black leading-tight">
                Tersedia Untuk Kamu dan 
                <span class="text-[#0191D8] font-bold">Kami Membuat Produk Khusus Untukmu</span>
            </h1>
            <p class="text-xs sm:text-sm md:text-base lg:text-lg text-black mt-4">
                Tersedia berbagai macam produk yang memiliki beragam fitur dan keunggulan yang sesuai dengan kebutuhan dan preferensi customer kamu.
            </p>
        </div>

        <!-- Arrow Icon -->
        <div class="arrow-container flex items-center justify-center w-full">
            <Icon name="mdi:arrow-down-drop-circle" class="text-sky-300 text-4xl cursor-pointer" />
        </div>

        <!-- Cards Section -->
        <div class="cards-container mt-auto px-4 md:px-8 lg:px-16">
            <div 
                v-for="(card, index) in cards" 
                :key="index" 
                :class="['card', card.class.includes('save-the-date') ? 'save-the-date-card' : '', 'bg-[#0191D8] text-white rounded-3xl shadow-lg p-4 lg:px-16 md:overflow-x-hidden md:h-64 relative']"
            >
            <h3 class="text-lg font-normal text-center max-w-[150px] md:max-w-[170px]" v-html="card.title"></h3>
                <NuxtImg :src="card.image" :alt="card.title" :class="card.class" />
                <Icon name="carbon:next-outline" class="absolute bottom-7 right-2 text-white text-3xl" />
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.hero-section {
    background-image: url('assets/img/image/HeroBg2.png');
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #F9F9F9);
        pointer-events: none;
    }

    @media (max-width: 639px) {
        background-image: url('assets/img/image/HeroBg2-mobile.png');
        height: auto;
        padding: 1rem;
        background-size: 100%;
        background-position: center top;
        background-repeat: no-repeat;
    }
}

.text-container {
    max-width: 600px;
    margin-top: 4rem;
    align-self: flex-start;
    
    @media (max-width: 639px) {
        margin-top: 2rem;
        text-align: left;
    }

    @media (min-width: 640px) {
        text-align: left;
    }
}

.arrow-container {
    margin-top: 10rem;
    margin-bottom: 2rem;

    @media (max-width: 639px) {
        margin-top: 37rem;
    }
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 1rem 0;
    gap: 1.5rem;
    scroll-snap-type: x mandatory;
    scroll-padding: 1rem;

    @media (max-width: 639px) {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        overflow-x: scroll;

        .card {
            flex: 0 0 80%;
            scroll-snap-align: start;
            margin-right: 1rem;
            margin-top: 5rem;
        }
    }

    @media (min-width: 640px) {
        overflow-x: hidden;
        overflow-y: hidden;
    }
}

@media (min-width: 640px) {
    .cards-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 768px) {
    .cards-container {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .cards-container {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}

.card {
    padding: 1rem;
    scroll-snap-align: start;
    overflow-x: hidden;
}

.save-the-date-card {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>