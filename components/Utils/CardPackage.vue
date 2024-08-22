<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Product {
  type: string;
  name: string;
  price: number;
  price_reformat: string;
  benefit: string[];
}

// Data untuk produk
const products = ref<Product[]>([]);

// Ambil data dari API saat komponen dimuat
  const { data } = await useFetch('https://ajakan.me/api/guest/product');
  products.value = data.value?.data.product;

</script>

<template>
  <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    <div v-for="(product, index) in products" :key="index" class="relative p-6 rounded-lg shadow-md w-full z-10 overflow-hidden flex flex-col h-full">
      <div class="absolute inset-0 bg-white" style="height: 50%"></div>
      <div class="absolute inset-0 bg-[#DFF4FF]" style="height: 50%; top: 50%"></div>
      <div class="relative flex-grow mb-4">
        <h3 class="text-base font-semibold mb-2">{{ product.name }}</h3>
        <h4 class="text-3xl font-semibold mb-4">{{ product.price_reformat }}</h4>
        <ul class="space-y-2">
          <li v-for="(feature, index) in product.benefit" :key="index" class="flex items-start text-sm">
            <Icon name="icon-park-solid:check-one" class="text-[#0191D8] mr-2 w-5 h-5 flex-shrink-0" />
            <span class="flex-1" v-html="feature"></span>
          </li>
        </ul>
      </div>
      <div class="relative mt-auto">
        <button class="bg-[#0191D8] text-white py-2 px-4 rounded-lg hover:bg-[#017bb5] transition-colors duration-300 w-full">
          Bergabung Sekarang
        </button>
      </div>
    </div>
  </div>
</template>
