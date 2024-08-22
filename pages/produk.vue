<script lang="ts" setup>

definePageMeta({
    title: 'Produk',
    description: 'Halaman produk',
    layout: 'page',
});

</script>

<template>
    <div class="flex flex-col">
        <div>
            <PagesProduk />
        </div>
        <div>
            <PagesProdukDetail />
        </div>
    </div>
</template>
