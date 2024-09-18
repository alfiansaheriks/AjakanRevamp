<script lang="ts" setup>

definePageMeta({
    title: 'Produk',
    description: 'Halaman produk',
    layout: 'page',
});

useSeoMeta({
    title: 'Paket Bisnis Undangan Digital | Ajakan',
    description: 'Paket Bisnis Undangan Digital | Ajakan',
    keywords: 'ajakan.me, ajakan, undangan, digital, undangan digital',
})

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
