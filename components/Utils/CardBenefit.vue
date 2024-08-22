<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    iconName: string;
    iconColor: string;
    iconSize: string;
    cardIconStyle: string;
    titleStyle: string;
    pStyle: string;
    cardStyle: string;
    subtitleStyle: string;
    title: string;
    subtitle: string;
    description: string;
}>();
</script>

<template>
    <div :class="cardStyle">
        <div class="flex flex-col items-start text-left relative md:z-10">
            <div :class="cardIconStyle">
                <Icon :name="iconName" :size="iconSize" :class="iconColor"/>
            </div>
            <div class="flex flex-col items-start">
                <h1 :class="titleStyle">{{ title }}</h1>
                <p :class="pStyle">
                    <span :class="subtitleStyle">{{ subtitle }}</span> {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>