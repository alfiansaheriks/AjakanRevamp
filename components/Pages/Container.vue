<template>
    <div class="container mx-auto px-4 w-full">
        <slot />
    </div>
</template>

<style scoped>
.container {
    /* Ensure the container doesn't impose a background color */
    background-color: transparent;
}
</style>