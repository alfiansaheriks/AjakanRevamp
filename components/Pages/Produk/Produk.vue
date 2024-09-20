<script lang="ts" setup>
import { ref } from 'vue';

const cards = ref([
    { title: 'Undangan<br/>Digital', image: '/images/undangandigital.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4 scale-150 lg:scale-125 mt-2 p-4' },
    { title: 'Undangan<br/>Video', image: '/images/undanganvideo.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4 scale-150 lg:scale-125 mt-2 p-4' },
    { title: 'Undangan Save The Date', image: '/images/undangansavethedate.png', class: 'save-the-date md:mt-5 w-[40%] object-cover scale-110 rounded-md mb-4 lg:scale-125 mt-2' },
    { title: 'Filter<br/>Instagram', image: '/images/filterinstagram.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4 scale-150 lg:scale-125 mt-2' },
    { title: 'Undangan<br/>3D', image: '/images/undangan3d.png', class: 'save-the-date w-full h-auto object-cover rounded-md mb-4 scale-150  lg:scale-125 mt-2' }
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
    <section id="section1" class="hero-section flex flex-col min-h-[1000px] relative bg-[#F7FAFC]">
        <!-- Text Section -->
        <div class="text-container flex flex-col px-2 py-8 lg:py-28 md:px-8 lg:px-28 lg:min-w-[639px] lg:min-h-[168px]"
            data-aos="fade-right">
            <h1 class="leading-tight mt-[50px] lg:mt-0 text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-normal text-black">
                Tersedia Untuk Kamu dan
                <span class="text-[#0191D8] font-bold">Kami Membuat Produk Khusus Untukmu</span>
            </h1>
            <p class="leading-tight lg:leading-tight text-sm sm:text-sm md:text-base lg:text-lg text-black mt-5">
                Tersedia berbagai macam produk yang memiliki beragam fitur dan keunggulan yang sesuai dengan kebutuhan
                dan preferensi customer kamu.
            </p>
        </div>

        <!-- Centered Arrow Icon -->
        <div class="arrow-wrapper flex items-center justify-center flex-grow lg:mb-[70px]">
            <div class="arrow-container flex items-center justify-center w-10 h-10">
                <Icon name="lets-icons:arrow-drop-down" class="text-[#0191d8] text-4xl cursor-pointer" />
            </div>
        </div>

        <!-- Cards Section -->
        <div v-if="!isMobile" class="cards-container mt-auto px-4 md:px-8 lg:px-28">
            <div v-for="(card, index) in cards" :key="index"
                :class="['card overflow-hidden', card.class.includes('save-the-date') ? 'save-the-date-card' : '', 'bg-[#0191D8] text-white rounded-3xl shadow-lg lg:px-16 md:overflow-x-hidden md:h-auto relative']"
                :data-aos="'fade-up'" :data-aos-delay="index * 100">
                <h3 class="text-lg font-normal text-center max-w-[150px] md:max-w-[170px]" v-html="card.title"></h3>
                <img :src="card.image" :alt="card.title" :class="card.class" />
                <Icon name="carbon:next-outline" class="absolute bottom-7 right-2 text-white text-3xl" />
            </div>
        </div>
        <div v-else class="w-full mt-[124px] md:px-8 lg:px-36 overflow-hidden">
            <div class="flex flex-row gap-4 overflow-x-scroll sm:gap-4 sm:overflow-x-auto sm:scroll-snap-x-mandatory"
                style="scrollbar-width: none; -ms-overflow-style: none;">
                <div v-for="(card, index) in cards" :key="index" :class="[
                    'card flex-shrink-0 w-4/5 bg-[#0191D8] text-white rounded-3xl shadow-lg relative overflow-hidden',
                    card.class.includes('save-the-date') ? 'save-the-date-card' : '',
                    'sm:mr-4 sm:mt-20 sm:scroll-snap-start'
                ]" style="scrollbar-width: none;" :data-aos="'fade-up'" :data-aos-delay="index * 100">
                    <h3 :class="[
                        'text-lg font-normal text-center max-w-[150px] md:max-w-[170px]',
                        card.title.toLowerCase() === 'undangan save the date' ? '' : ''
                    ]" v-html="card.title"></h3>

                    <img :src="card.image" :alt="card.title" :class="card.class" />
                    <Icon name="carbon:next-outline" class="absolute bottom-7 right-2 text-white text-3xl" />
                </div>
            </div>
        </div>


    </section>
</template>

<style scoped lang="scss">
.hero-section {
    background-image: url('assets/img/image/HeroBg2.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 1024px;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

    @media (max-width: 639px) {
        background-image: url('assets/img/image/HeroBg2-mobile.png');
        height: auto;
        padding: 1rem;
        background-size: cover;
        background-position: center 100px;
        background-repeat: no-repeat;
    }
}

.text-container {
    max-width: 800px;
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

    @media (max-width: 639px) {
        margin-top: 29rem;
    }
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 1rem 0;
    padding-left: 7rem;
    padding-right: 7rem;
    gap: 1.5rem;
    scroll-snap-type: x mandatory;
    scroll-padding: 1rem;
    overflow: hidden;

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