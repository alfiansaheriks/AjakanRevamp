<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

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
const currentSlide = ref(0);
const totalSlides = ref(0);

const nextSlide = () => {
  if (currentSlide.value < totalSlides.value - 1) {
    currentSlide.value += 1;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value -= 1;
  }
};

onMounted(() => {
  totalSlides.value = testimonials.value.length;
});

// Computed properties to determine if buttons should be disabled
const isNextDisabled = computed(() => currentSlide.value >= totalSlides.value - 1);
const isPrevDisabled = computed(() => currentSlide.value <= 0);
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Carousel container -->
    <div class="flex flex-row transition-transform duration-300" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
      >
        <!-- Testimonial card -->
        <div class="relative p-6 rounded-lg shadow-md bg-white h-full">
          <!-- Logo -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white flex items-center justify-center rounded-full">
            <NuxtImg :src="testimonial.logo" alt="Logo" class="w-full h-full object-contain" />
          </div>
          <!-- Client Name and Location -->
          <div class="mt-32 text-center">
            <h3 class="text-lg font-semibold">{{ testimonial.brand }}</h3>
            <p class="text-sm text-gray-500">{{ testimonial.location }}</p>
          </div>
          <Icon name="material-symbols:format-quote" class="absolute right-4 top-4 text-2xl text-gray-400" />
          <!-- Quote Icon and Paragraph -->
          <div class="mt-6 text-center relative">
            <p class="text-sm text-gray-600">{{ testimonial.message }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation buttons -->
    <button
      @click="prevSlide"
      :disabled="isPrevDisabled"
      :class="{ 'opacity-50 cursor-not-allowed': isPrevDisabled }"
      class="absolute top-[35%] lg:top-[40%] left-2 transform -translate-y-1/2 bg-transparent p-2 rounded-full"
    >
      <Icon name="carbon:previous-outline" class="text-lg" />
    </button>
    <button
      @click="nextSlide"
      :disabled="isNextDisabled"
      :class="{ 'opacity-50 cursor-not-allowed': isNextDisabled }"
      class="absolute top-[35%] lg:top-[40%] right-2 transform -translate-y-1/2 bg-transparent p-2 rounded-full"
    >
      <Icon name="carbon:next-outline" class="text-lg" />
    </button>
  </div>
</template>