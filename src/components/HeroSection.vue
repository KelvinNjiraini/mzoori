<script setup>
import { defineAsyncComponent } from 'vue';
const BaseButton = defineAsyncComponent(() => import('./ui/BaseButton.vue'));
</script>

<template>
    <main class="bg-primary w-full relative">
        <div
            class="flex flex-col items-center justify-center min-h-screen p-8 md:p-20 md:pb-[12rem] space-y-4"
        >
            <div class="flex items-center gap-2 mb-5">
                <div
                    class="text-primary text-3xl font-semibold bg-white px-6 py-2 rounded-r-full rounded-tl-full"
                >
                    mzoori
                </div>
                <span class="text-white font-thin">by RetailPay</span>
            </div>
            <div
                class="flex flex-col justify-center items-center text-white max-w-[37rem] mb-5"
            >
                <h1
                    class="text-4xl md:text-6xl font-bold text-center leading-[65px]"
                >
                    <span class="text-custom-yellow"
                        >Unlock your businesses</span
                    >
                    potential with a full PoS solution.
                </h1>
                <div class="my-6 bg-white/60 h-[1px] w-28"></div>
                <span class="text-lg text-center">
                    The POS system with everything you need to sell in person,
                    backed by everything you need to sell online.
                </span>
            </div>
            <div class="flex items-center gap-6 relative z-10">
                <BaseButton>Sign in</BaseButton>
                <BaseButton variant="inverted">Sign up</BaseButton>
            </div>
        </div>
        <img
            src="./../assets/light-accent-top-left.svg"
            alt=""
            class="absolute w-[33.5rem] top-0 left-0"
        />
        <img
            src="./../assets/light-accent-bottom-right.svg"
            alt=""
            class="absolute w-[33.5rem] bottom-0 right-0"
        />
    </main>
</template>
