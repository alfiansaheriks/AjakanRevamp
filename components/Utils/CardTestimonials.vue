<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Define an interface for the testimonial data
interface Testimonial {
  brand: string;
  logo: string;
  location: string;
  message: string;
}

// Create a ref to hold the testimonial data
const testimonials = ref<Testimonial[]>([]);

// Fetch data from API on component mount
const { data } = await useFetch('https://ajakan.me/api/guest/testimoni');
testimonials.value = data.value.data.testimoni_list;

// Carousel controls
const currentSlide = ref(1); // Start with the middle slide
const totalSlides = ref(0);
const slideStep = ref(2); // Jumlah slide yang digeser sekaligus

// Handle card click and set it as the active (center) slide
const setActiveSlide = (index: number) => {
  currentSlide.value = index;
};

// Calculate total slides
onMounted(() => {
  totalSlides.value = testimonials.value.length;
});

// Function to determine the style for slider positioning
const getTranslateStyle = () => {
  // Ensure the currentSlide is always centered in the middle of the carousel
  const slideWidth = 240 / totalSlides.value;
  const offset = (currentSlide.value - 1) * slideWidth;
  return { transform: `translateX(-${offset}%)` };
};

const isMobile = ref(false);
const isTablet = ref(false);

const updateIsMobile = () => {
  if (typeof window !== 'undefined') {
    isMobile.value = window.innerWidth <= 768;
    isTablet.value = window.innerWidth <= 1024;
  }
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});

// Computed property to determine if the current view is mobile
const isMobileView = computed(() => isMobile.value);
const isTabletView = computed(() => isTablet.value);
</script>

<template>
  <div v-if="!isMobileView && !isTabletView" class="relative overflow-hidden h-[500px]">
    <!-- Carousel container -->
    <div class="flex flex-row transition-transform duration-300 ease-in-out gap-12" :style="getTranslateStyle()">
      <div v-for="(testimonial, index) in testimonials" :key="index"
        class="flex-shrink-0 w-full md:w-1/3 lg:w-1/3 cursor-pointer" @click="setActiveSlide(index)"
        :class="{ 'scale-110': currentSlide === index }">

        <!-- Container to position logo outside the card -->
        <div class="relative pt-16">
          <!-- Logo -->
          <div
            class="absolute z-20 top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white flex items-center justify-center rounded-full"
            :class="{ 'z-20': index === 1 }">
            <NuxtImg :src="testimonial.logo" alt="Logo"
              class="w-full h-full object-contain rounded-full border-8 border-[#DFF4FF]" />
          </div>
          <!-- Testimonial card -->
          <div class="relative p-4 rounded-3xl shadow-md bg-white h-[300px] transition-transform duration-300"
            :class="{ 'active-card': currentSlide === index }">
            <Icon v-if="currentSlide === index" name="material-symbols:format-quote" class="absolute right-[45%] top-[25%] text-5xl text-white" />
            <Icon v-else name="material-symbols:format-quote" class="absolute right-[45%] top-[25%] text-5xl text-[#0191D8]" />
            <!-- Quote Icon and Paragraph -->
            <div class="mt-28 text-center relative">
              <h3 class="text-lg font-semibold">{{ testimonial.brand }}</h3>
              <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
              <p class="leading-tight mt-4 text-sm text-gray-600">{{ testimonial.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="relative overflow-hidden px-4">
  <!-- Carousel container (scrollable on mobile) -->
  <div class="flex overflow-x-auto scroll-smooth snap-x snap-mandatory py-6" style="scrollbar-width: none;">
    <div v-for="(testimonial, index) in testimonials" :key="index"
      class="flex-shrink-0 w-[calc(100vw-70px)] md:w-[100vw-10px] cursor-pointer snap-start"
      @click="setActiveSlide(index)">
      <!-- Testimonial card -->
      <div class="relative p-5 rounded-3xl shadow-md bg-white w-[75vw] h-[300px] transition-transform duration-300 mt-10"
        :class="{ 'active-card': isMobileView || currentSlide === index }">
        <!-- Logo -->
        <div
          class="absolute z-20 -top-10 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white flex items-center justify-center rounded-full"
          :class="{ 'z-20': index === 1 }">
          <NuxtImg :src="testimonial.logo" alt="Logo"
            class="w-full h-full object-contain rounded-full border-8 border-[#DFF4FF]" />
        </div>
        <Icon v-if="isMobileView || currentSlide === index" name="material-symbols:format-quote" class="absolute right-[45%] top-16 text-2xl text-white" />
        <Icon v-else name="material-symbols:format-quote" class="absolute right-36 top-16 text-2xl text-[#0191D8]" />
        <!-- Quote Icon and Paragraph -->
        <div class="mt-20 text-center relative">
          <h3 class="text-xs font-semibold">{{ testimonial.brand }}</h3>
          <p class="text-xs text-gray-500">{{ testimonial.location }}</p>
          <p class="text-xs text-gray-600 mt-[12.5px]">{{ testimonial.message }}</p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<style scoped>
.active-card {
  background-color: #0191D8;
  color: white;
}
.active-card h3 {
  color: white;
}
.active-card p {
  color: #e0e0e0;
}
.z-0 {
  z-index: 0 !important;
}

.scale-110 {
  transform: scale(1.1);
  z-index: 1;
}

.shadow-lg {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
}

/* Hide scrollbar for Webkit browsers */
.flex::-webkit-scrollbar {
  display: none;
}

/* Optional: Smooth scrolling */
.scroll-smooth {
  scroll-behavior: smooth;
}

/* Snap functionality to make it "snap" to the closest card on scroll */
.snap-x {
  scroll-snap-type: x mandatory;
}

.snap-start {
  scroll-snap-align: start;
}
</style>