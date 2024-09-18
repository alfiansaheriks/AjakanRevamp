<script lang="ts" setup>
import { ref } from 'vue';

const activeCategory = ref<string>('All');
// Fungsi untuk mengatur kategori aktif
const setActiveCategory = (category: string) => {
    activeCategory.value = category;
};

const categories = [
    { name: 'Undangan Pernikahan', total: 2, type: 'wedding' },
    { name: 'Undangan Khitanan', total: 2, type: 'khitanan' },
    { name: 'Undangan Aqiqah', total: 2, type: 'aqiqah' },
    { name: 'Undangan Wisuda', total: 2, type: 'wisuda' },
    { name: 'Undangan Birthday', total: 2, type: 'birthday' },
    { name: 'Undangan Berbuka', total: 2, type: 'bukber' },
    { name: 'Undangan Natal', total: 2, type: 'natal' },
    { name: 'Undangan Idul Fitri', total: 2, type: 'idul_fitri' },
];

const emit = defineEmits(['filter-change']);

// Function to select and emit the filter (excluding the first word)
function selectFilter(categoryName: string) {
    const words = categoryName.split(' ');
    const remainingWords = words.slice(1).join(' ');
    if (remainingWords) {
        emit('filter-change', remainingWords);
    }
}

// Set default value to the first category
onMounted(() => {
    const firstCategoryName = categories[0].name;
    setActiveCategory(firstCategoryName);
    selectFilter(firstCategoryName);
});

const carousel = ref<HTMLElement | null>(null);

const scrollLeft = () => {
    if (carousel.value) {
        carousel.value.scrollLeft -= 200; // Jumlah scroll ke kiri
    }
};

const scrollRight = () => {
    if (carousel.value) {
        carousel.value.scrollLeft += 200; // Jumlah scroll ke kanan
    }
};
</script>

<template>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        <div
            v-for="category in categories"
            :key="category.name"
            @click="setActiveCategory(category.name); selectFilter(category.name);"
            class="justify-start text-center lg:px-4 cursor-pointer py-2 rounded-lg text-xs hover:bg-[#0191D8] hover:text-white whitespace-nowrap overflow-hidden"
            :class="activeCategory === category.name ? 'bg-[#0191D8] text-[white]' : 'bg-[#DFF4FF] text-[#0191D8]'">
            <span>{{ category.name }}</span>
        </div>
    </div>
</template>
