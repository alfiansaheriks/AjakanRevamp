<script lang="ts" setup>
definePageMeta({
    layout: 'page',
})
const leadingsText = computed(() => [
  {
    text: 'Ini',
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: 'Landing',
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: 'Pages',
    startColor: '#FF4D4D',
    endColor: '#F9CB28',
    delay: 4,
  },
])
</script>
<template>
        <PagesContainer class="py-6">
            <h1 class="text-2xl font-bold">Hello, World!</h1>
            <NuxtImg src="/images/bruno-oliveira-7SFNYdcHI-s-unsplash.jpg" alt="Preview" />
        </PagesContainer>
</template>
