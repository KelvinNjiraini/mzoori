<script setup>
const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
    },
});

const { variant } = props;
</script>
<template>
    <button
        class="py-[0.4rem] px-5 md:px-8 rounded-full border border-white"
        :class="{
            'bg-primary hover:bg-white text-white hover:text-primary':
                variant === 'primary',
            'bg-white hover:bg-transparent text-primary hover:text-white':
                variant === 'inverted',
            'border-none bg-transparent text-primary': variant === 'outline',
        }"
    >
        <slot />
    </button>
</template>
