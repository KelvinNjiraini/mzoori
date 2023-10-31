<script setup>
import { defineAsyncComponent } from 'vue';
const features = [
    {
        title: 'Buy online, pick up in store',
        description: 'Bring online customers in store and upsell at pickup.',
    },
    {
        title: 'Browse in store, buy online',
        description:
            'Email customers their in-store favorites, right from the POS system.',
    },
    {
        title: 'Buy in store, ship to customer',
        description:
            'Never lose a sale even when in-store inventory is limited.',
    },
    {
        title: 'Buy anywhere, return anywhere',
        description:
            'Accept in-store returns and exchanges of items bought online or at other locations.',
    },
];

const BaseButton = defineAsyncComponent(() => import('./ui/BaseButton.vue'));
</script>
<template>
    <section class="ml-10 md:ml-24 mb-10">
        <div
            class="relative bg-blue-100/20 shadow-sm rounded-xl overflow-hidden"
        >
            <img
                src="./../assets/gradient-one.svg"
                alt=""
                class="absolute top-0 left-0 -z-20"
            />
            <div class="p-8 md:p-20">
                <div class="flex">
                    <h1 class="text-4xl font-bold max-w-xs">
                        Power your retail business
                    </h1>
                    <p class="max-w-sm text-lg text-start ml-auto">
                        Get the tools you need to run your retail store.
                        Mzoori’s all-in-one POS system comes with inventory
                        tracking, staff management, and more.
                    </p>
                </div>
                <div class="flex gap-6 items-center mt-16">
                    <!-- card -->
                    <div
                        class="p-8 bg-primary/20 flex flex-col gap-6 max-w-xs rounded-lg"
                    >
                        <div>
                            <img
                                src="./../assets/shield-icon.svg"
                                alt="shield icon"
                                class="h-12"
                            />
                        </div>
                        <h4 class="text-xl font-bold">
                            Advanced inventory management
                        </h4>
                        <p class="text-sm text-slate-500">
                            Generate purchase orders and transfer stock based on
                            inventory forecasts and performance.
                        </p>
                        <div
                            class="flex justify-between items-center cursor-pointer"
                        >
                            <span class="text-sm">
                                View all Mzoori POS features
                            </span>
                            <img
                                src="./../assets/chevron-right.svg"
                                alt="chevron right"
                                class="h-5"
                            />
                        </div>
                    </div>
                    <!-- card -->
                    <div
                        class="p-8 bg-primary/20 flex flex-col gap-6 max-w-xs rounded-lg"
                    >
                        <div>
                            <img
                                src="./../assets/shield-icon.svg"
                                alt="shield icon"
                                class="h-12"
                            />
                        </div>
                        <h4 class="text-xl font-bold">
                            Advanced inventory management
                        </h4>
                        <p class="text-sm text-slate-500">
                            Generate purchase orders and transfer stock based on
                            inventory forecasts and performance.
                        </p>
                        <div
                            class="flex justify-between items-center cursor-pointer"
                        >
                            <span class="text-sm">
                                View all Mzoori POS features
                            </span>
                            <img
                                src="./../assets/chevron-right.svg"
                                alt="chevron right"
                                class="h-5"
                            />
                        </div>
                    </div>
                    <!-- card -->
                    <div
                        class="p-8 bg-primary/20 flex flex-col gap-6 max-w-xs rounded-lg"
                    >
                        <div>
                            <img
                                src="./../assets/shield-icon.svg"
                                alt="shield icon"
                                class="h-12"
                            />
                        </div>
                        <h4 class="text-xl font-bold">
                            Advanced inventory management
                        </h4>
                        <p class="text-sm text-slate-500">
                            Generate purchase orders and transfer stock based on
                            inventory forecasts and performance.
                        </p>
                        <div
                            class="flex justify-between items-center cursor-pointer"
                        >
                            <span class="text-sm">
                                View all Mzoori POS features
                            </span>
                            <img
                                src="./../assets/chevron-right.svg"
                                alt="chevron right"
                                class="h-5"
                            />
                        </div>
                    </div>
                </div>
                <!-- Power your business section -->
                <div class="my-8">
                    <div
                        class="grid grid-cols-2 justify-center items-center w-full"
                    >
                        <div class="mt-20 flex flex-col space-y-6">
                            <h1 class="text-3xl font-semibold max-w-xs">
                                Power your retail businessSeize more sales
                            </h1>
                            <p class="text-lg max-w-xs">
                                Offer frictionless shopping experiences with a
                                modern POS system that lets customers shop their
                                way, from online to checkout line.
                            </p>
                            <div class="flex gap-2">
                                <BaseButton class="border-primary"
                                    >Sign up</BaseButton
                                >
                                <BaseButton variant="outline"
                                    >Learn more</BaseButton
                                >
                            </div>
                        </div>
                        <img
                            src="./../assets/desktop-computer-2.svg"
                            alt="desktop computer"
                            class=""
                        />
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div
                        class="flex gap-3"
                        v-for="feat in features"
                        :key="feat.title"
                    >
                        <div>
                            <div
                                class="h-16 w-16 bg-slate-300 rounded-full"
                            ></div>
                        </div>
                        <div class="flex flex-col gap-3 max-w-xs">
                            <h4 class="text-xl font-bold">{{ feat.title }}</h4>
                            <p class="text-sm text-slate-400">
                                {{ feat.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
/*  */
</style>
