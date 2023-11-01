<script setup>
import { defineAsyncComponent } from 'vue';

const BaseButton = defineAsyncComponent(() => import('./ui/BaseButton.vue'));
const year = new Date().getFullYear();
</script>

<template>
    <footer class="bg-primary p-8 md:p-20 relative overflow-hidden">
        <img
            src="./../assets/light-accent-5.svg"
            alt=""
            class="absolute top-0 left-0"
        />
        <img
            src="./../assets/light-accent-6.svg"
            alt=""
            class="absolute bottom-0 right-0"
        />
        <div class="flex flex-col items-center p-[5rem] gap-3 relative z-10">
            <h1
                class="text-6xl font-bold text-center leading-[65px] text-white"
            >
                Not just e-commerce.
                <span class="text-custom-yellow"> All commerce. </span>
            </h1>
            <span class="text-lg text-white"
                >Bring in-store and online sales together with the Mzoori POS
                system.</span
            >
            <div class="flex items-center gap-6">
                <BaseButton variant="inverted">Sign up</BaseButton>
                <BaseButton variant="outline" class="text-white"
                    >Learn more</BaseButton
                >
            </div>
            <div class="text-xs text-white">
                Already have a Mzoori POS?
                <a href="#" class="underline hover:cursor-pointer"
                    >Log in to set up Mzoori POS</a
                >
            </div>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xs text-white"
                >&copy; {{ year }}@mzoori. All Rights Reserved</span
            >
            <div class="flex gap-3 items-center">
                <a href="#">
                    <img src="./../assets/twitter.svg" alt="Twitter" />
                </a>
                <a href="#">
                    <img src="./../assets/mail.svg" alt="Email" />
                </a>
                <a href="#">
                    <img src="./../assets/facebook.svg" alt="Facebook" />
                </a>
                <a href="#">
                    <img src="./../assets/instagram.svg" alt="Instagram" />
                </a>
                <a href="#">
                    <img src="./../assets/linkedin.svg" alt="Linked In" />
                </a>
            </div>
        </div>
    </footer>
</template>
