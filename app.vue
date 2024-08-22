<template>
  <NuxtLoadingIndicator color="red" :throttle="0" />
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
