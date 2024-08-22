<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const activeCategory = ref<string>('All');
const currentIndex = ref<number>(0);
const categoriesPerPage = 3; // Number of categories to show per page

const setActiveCategory = (category: string) => {
    activeCategory.value = category;
};

const categories = [
    { name: 'Popular', total: 2 },
    { name: 'Aesthetic', total: 2 },
    { name: 'Elegant', total: 2 },
    { name: 'Culture', total: 2 },
    { name: 'Majestic', total: 2 },
    { name: 'Minimalist', total: 2 },
    { name: 'Cartoon', total: 2 },
];

const next = () => {
    if (currentIndex.value < categories.length - categoriesPerPage) {
        currentIndex.value++;
    }
};

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    }
};

const visibleCategories = computed(() => {
    return categories.slice(currentIndex.value, currentIndex.value + categoriesPerPage);
});

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
    <div v-if="isMobile" class="flex-1 flex flex-row gap-4 justify-center items-center">
        <button @click="prev" :disabled="currentIndex === 0" class="px-2 py-1 bg-transparent rounded">
            <Icon name="carbon:previous-outline" class="text-2xl text-black" />
        </button>
        <div class="flex flex-row gap-4 lg:flex-row overflow-hidden">
            <div v-for="category in visibleCategories" :key="category.name" @click="setActiveCategory(category.name)"
                class="flex items-center px-4 cursor-pointer py-2 rounded-lg text-xs hover:bg-[#0191D8] hover:text-white"
                :class="activeCategory === category.name ? 'bg-[#0191D8] text-[white]' : 'bg-white border border-[#0191D8] text-[#0191D8]'">
                <span>{{ category.name }}</span>
            </div>
        </div>
        <button @click="next" :disabled="currentIndex >= categories.length - categoriesPerPage" class="px-2 py-1 bg-transparent rounded">
            <Icon name="carbon:next-outline" class="text-2xl text-black" />
        </button>
    </div>
    <div v-if="!isMobile" class="flex-1 flex flex-row gap-4 justify-center">
        <div v-for="category in categories" :key="category.name" @click="setActiveCategory(category.name)"
            class="flex items-center px-4 cursor-pointer py-2 rounded-lg text-xs hover:bg-[#0191D8] hover:text-white"
            :class="activeCategory === category.name ? 'bg-[#0191D8] text-[white]' : 'bg-white border border-[#0191D8] text-[#0191D8]'">
            <span>{{ category.name }}</span>
        </div>
    </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>