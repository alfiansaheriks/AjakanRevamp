<template>
  <NuxtLoadingIndicator color="red" :throttle="0" />
  <div class="overflow-hidden">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
