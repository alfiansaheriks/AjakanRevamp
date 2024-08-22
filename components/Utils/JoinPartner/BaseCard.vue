<script lang="ts" setup>
import { defineProps, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
    iconName: string;
    iconColor: string;
    bgIconStyle: string;
    titleStyle: string;
    pStyle: string;
    cardStyle: string;
    subtitleStyle: string;
    title: string;
    subtitle: string;
    description: string;
}>();

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
    <div class="scrollable-container">
        <div :class="cardStyle">
            <div class="flex flex-col items-start text-left relative z-10">
                <div :class="bgIconStyle">
                    <Icon :name="iconName" size="2rem" :class="iconColor"/>
                </div>
                <div class="flex flex-col items-start">
                    <p :class="pStyle">
                        <span :class="subtitleStyle">{{ subtitle }}</span> {{ description }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.scrollable-container {
    display: grid;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
}

.scrollable-container > div {
    scroll-snap-align: start;
}
</style>