<script setup lang="ts">
// 1. Definisikan Props dengan Type
interface BaseCardProps {
    title: string;
    // Prop untuk mengatur style card (misalnya: 'default', 'highlight', 'danger')
    variant?: 'default' | 'highlight' | 'danger';
    // Prop untuk mengatur padding
    padding?: string;
}

const props = withDefaults(defineProps<BaseCardProps>(), {
    variant: 'default',
    padding: 'p-6', // Default padding
});

// 2. Tentukan Class CSS berdasarkan variant
const cardClasses = computed(() => {
    let base = `rounded-xl shadow-lg transition-all duration-300 ${props.padding}`;

    if (props.variant === 'highlight') {
        // Card untuk highlight (misalnya: data penting)
        return `${base} bg-indigo-600 text-white`;
    } else if (props.variant === 'danger') {
        // Card untuk warning/bahaya
        return `${base} bg-red-100 border-l-4 border-red-500 text-red-800`;
    }
    // Default card
    return `${base} bg-white border border-gray-200 hover:shadow-xl`;
});

import { computed } from 'vue';
</script>

<template>
    <div :class="cardClasses">
        <div class="mb-4" :class="{'border-b pb-2 border-gray-300': props.variant === 'default'}">
            <h3 class="text-xl font-semibold">{{ props.title }}</h3>
        </div>

        <slot />

        <slot name="footer" />
    </div>
</template>
