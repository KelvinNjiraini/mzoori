<script setup>
import { defineAsyncComponent } from 'vue';
const BaseButton = defineAsyncComponent(() => import('./ui/BaseButton.vue'));
</script>

<template>
    <section class="bg-white p-8 lg:p-[10.5rem]">
        <!-- card here -->
        <div
            class="p-8 lg:p-16 rounded-lg bg-gradient-to-br from-white/70 to-transparent backdrop-blur-3xl shadow-md -mt-[18%] lg:-mt-[16rem]"
        >
            <div class="flex flex-col lg:flex-row items-center justify-between">
                <div class="flex flex-col space-y-6 -mt-5">
                    <h1 class="text-2xl lg:text-4xl font-bold lg:max-w-xs">
                        Modern POS software built for your business.
                    </h1>
                    <span class="text-sm lg:max-w-xs">
                        Introducing a powerful solution that will change how you
                        sell and manage a retail outlet at all levels, from
                        small shops to supermarkets
                    </span>
                    <div class="flex gap-2 items-center md:items-start">
                        <BaseButton class="border-primary">Sign up</BaseButton>
                        <BaseButton variant="outline">Learn more</BaseButton>
                    </div>
                </div>
                <div class="max-w-[64%] lg:-mt-[16%] lg:-mr-[10%]">
                    <img
                        src="./../assets/pos-desktop-1.svg"
                        alt="POS desktop"
                        class="w-full hidden lg:inline-block"
                    />
                </div>
            </div>
        </div>
        <!-- other features -->
        <div class="flex flex-col items-center justify-center mt-3">
            <!-- <div class="grid grid-cols-2 w-full ml-28 gap-20"> -->
            <div
                class="grid grid-cols-1 justify-center md:grid-cols-2 w-full md:gap-20"
            >
                <!-- <div class=""> -->
                <div class="w-full">
                    <img
                        src="./../assets/desktop-computer.svg"
                        alt="desktop computer"
                        class=""
                    />
                </div>
                <!-- </div> -->
                <div
                    class="justify-center md:mt-20 flex flex-col space-y-6 text-center md:text-start"
                >
                    <h1 class="text-xl md:text-3xl font-semibold md:max-w-xs">
                        Fully integrated hardware
                    </h1>
                    <p
                        class="text-slate-500 md:max-w-[18rem] md:text-lg md:text-start"
                    >
                        Get the perfect POS setup, whether you’re a pop up shop
                        or a retail store. Mzoori POS connects seamlessly with
                        all card readers and compatible hardware accessories.
                    </p>
                </div>
            </div>
            <div class="flex flex-col-reverse md:flex-row md:-space-x-10">
                <div
                    class="justify-center md:mt-20 flex flex-col space-y-6 md:text-start w-full text-center"
                >
                    <h1 class="text-xl md:text-3xl font-semibold md:max-w-xs">
                        Customizable POS terminal
                    </h1>
                    <p class="text-slate-500 md:text-lg md:max-w-xs">
                        Personalize your POS system to your business. Keep your
                        most-used apps, discounts, and products at your
                        fingertips so you can fly through checkout.
                    </p>
                </div>
                <div class="w-full">
                    <img
                        src="./../assets/desktop-computer.svg"
                        alt="desktop computer"
                        class=""
                    />
                </div>
            </div>
            <div
                class="grid grid-cols-1 justify-center md:grid-cols-2 w-full md:gap-20"
            >
                <!-- <div class=""> -->
                <div class="w-full">
                    <img
                        src="./../assets/desktop-computer.svg"
                        alt="desktop computer"
                        class=""
                    />
                </div>
                <!-- </div> -->
                <div
                    class="justify-center md:mt-20 flex flex-col space-y-6 text-center md:text-start"
                >
                    <h1 class="text-xl md:text-3xl font-semibold md:max-w-xs">
                        Powerful POS software
                    </h1>
                    <p
                        class="text-slate-500 md:max-w-[18rem] md:text-lg md:text-start"
                    >
                        Turn any mobile device into a powerful point of sale.
                        You can download the Mzoori POS app on to any Android or
                        iOS smartphone or tablet.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
