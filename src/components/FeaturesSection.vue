<script setup>
import { defineAsyncComponent } from 'vue';
const BaseButton = defineAsyncComponent(() => import('./ui/BaseButton.vue'));
</script>

<template>
    <section class="bg-white">
        <!-- card here -->
        <div
            class="p-8 pl-16 rounded-lg bg-gradient-to-br from-white/70 to-transparent backdrop-blur-3xl shadow-md max-w-[80%] lg:max-w-[68%] mx-auto -mt-28"
        >
            <div class="flex items-center justify-between">
                <div class="flex flex-col space-y-6 -mt-5">
                    <h1 class="text-4xl font-bold max-w-xs">
                        Modern POS software built for your business.
                    </h1>
                    <span class="text-sm max-w-xs">
                        Introducing a powerful solution that will change how you
                        sell and manage a retail outlet at all levels, from
                        small shops to supermarkets
                    </span>
                    <div class="flex gap-2 items-center">
                        <BaseButton class="border-primary">Sign up</BaseButton>
                        <BaseButton variant="outline">Learn more</BaseButton>
                    </div>
                </div>
                <img
                    src="./../assets/pos-desktop-1.svg"
                    alt="POS desktop"
                    class="w-2/3 -mr-8 -mt-[4.25rem]"
                />
            </div>
        </div>
        <!-- other features -->
        <div
            class="flex flex-col items-center justify-center pb-20 mt-3 w-[80%] mx-auto"
        >
            <div class="grid grid-cols-2 gap-20 w-full ml-28">
                <!-- <div class=""> -->
                <img
                    src="./../assets/desktop-computer.svg"
                    alt="desktop computer"
                    class=""
                />
                <!-- </div> -->
                <div class="justify-center mt-20 flex flex-col space-y-6">
                    <h1 class="text-3xl font-semibold max-w-xs">
                        Fully integrated hardware
                    </h1>
                    <p class="text-slate-500 max-w-[18rem] text-lg text-start">
                        Get the perfect POS setup, whether you’re a pop up shop
                        or a retail store. Mzoori POS connects seamlessly with
                        all card readers and compatible hardware accessories.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-2 items-center w-full -ml-28">
                <div
                    class="justify-center items-end mt-20 flex flex-col space-y-6"
                >
                    <h1 class="text-3xl font-semibold max-w-xs">
                        Customizable POS terminal
                    </h1>
                    <p class="text-slate-500 text-lg max-w-xs">
                        Personalize your POS system to your business. Keep your
                        most-used apps, discounts, and products at your
                        fingertips so you can fly through checkout.
                    </p>
                </div>
                <img
                    src="./../assets/desktop-computer.svg"
                    alt="desktop computer"
                    class=""
                />
            </div>
            <div class="grid grid-cols-2 gap-20 w-full ml-28">
                <!-- <div class=""> -->
                <img
                    src="./../assets/desktop-computer.svg"
                    alt="desktop computer"
                    class=""
                />
                <!-- </div> -->
                <div class="justify-center mt-20 flex flex-col space-y-6">
                    <h1 class="text-3xl font-semibold max-w-xs">
                        Powerful POS software
                    </h1>
                    <p class="text-slate-500 max-w-[18rem] text-lg text-start">
                        Turn any mobile device into a powerful point of sale.
                        You can download the Mzoori POS app on to any Android or
                        iOS smartphone or tablet.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
