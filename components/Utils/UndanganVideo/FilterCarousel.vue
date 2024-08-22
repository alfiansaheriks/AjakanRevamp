<script lang="ts" setup>
import { ref } from 'vue';

const activeCategory = ref<string>('All');
// Fungsi untuk mengatur kategori aktif
const setActiveCategory = (category: string) => {
    activeCategory.value = category;
};

const categories = [
    { name: 'Gold Video Package', total: 2 },
    { name: 'Platinum Video Package', total: 2 },
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
</script>

<template>
    <div class="flex flex-row justify-center items-center gap-2">
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
