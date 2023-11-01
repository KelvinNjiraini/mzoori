<script setup>
import { defineAsyncComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const modules = [Autoplay];

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

const items = [
    {
        title: 'Advanced inventory management',
        description:
            'Generate purchase orders and transfer stock based on inventory forecasts and performance.',
    },
    {
        title: 'Custom staff permissions',
        description:
            'Set permissions to control staff access in the POS system so you can delegate with peace of mind.',
    },
    {
        title: 'Unified reporting',
        description:
            'Adapt to growing trends in your business with unified analytics that blend in-store and online sales.',
    },
    {
        title: 'Advanced inventory management',
        description:
            'Generate purchase orders and transfer stock based on inventory forecasts and performance.',
    },
    {
        title: 'Custom staff permissions',
        description:
            'Set permissions to control staff access in the POS system so you can delegate with peace of mind.',
    },
    {
        title: 'Send cart to buy online',
        description:
            'Send customers an email with items they were interested in but didn’t purchase in store.',
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
                <div
                    class="flex flex-col gap-5 lg:gap-0 md:flex-row items-center"
                >
                    <h1 class="text-2xl lg:text-4xl font-bold md:max-w-xs">
                        Power your retail business
                    </h1>
                    <p class="md:max-w-sm lg:text-lg text-start ml-auto">
                        Get the tools you need to run your retail store.
                        Mzoori’s all-in-one POS system comes with inventory
                        tracking, staff management, and more.
                    </p>
                </div>
                <!-- <div class=""> -->
                <!-- card -->
                <Swiper
                    :slidesPerView="3"
                    :spaceBetween="30"
                    :pagination="{
                        clickable: true,
                    }"
                    :loop="true"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :modules="modules"
                    :breakpoints="{
                        320: {
                            slidesPerView: 1,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }"
                >
                    <SwiperSlide v-for="item in items" :key="item.title">
                        <div
                            class="p-8 bg-primary/20 flex flex-col gap-6 max-w-xs rounded-lg slider-card"
                        >
                            <div>
                                <img
                                    src="./../assets/shield-icon.svg"
                                    alt="shield icon"
                                    class="h-12"
                                />
                            </div>
                            <h4 class="text-xl font-bold min-h-[4rem]">
                                {{ item.title }}
                            </h4>
                            <p class="text-sm text-slate-500">
                                {{ item.description }}
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
                    </SwiperSlide>
                </Swiper>
                <!-- </div> -->
                <!-- Power your business section -->
                <div class="my-8">
                    <div
                        class="grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full"
                    >
                        <div
                            class="md:mt-20 flex flex-col space-y-6 text-center md:text-start"
                        >
                            <h1
                                class="text-xl md:text-3xl font-semibold md:max-w-xs"
                            >
                                Power your retail businessSeize more sales
                            </h1>
                            <p class="md:text-lg md:max-w-xs">
                                Offer frictionless shopping experiences with a
                                modern POS system that lets customers shop their
                                way, from online to checkout line.
                            </p>
                            <div class="flex gap-2 self-center md:self-start">
                                <BaseButton class="border-primary"
                                    >Sign up</BaseButton
                                >
                                <BaseButton variant="outline"
                                    >Learn more</BaseButton
                                >
                            </div>
                        </div>
                        <div class="w-full">
                            <img
                                src="./../assets/desktop-computer-2.svg"
                                alt="desktop computer"
                                class="w-full"
                            />
                        </div>
                    </div>
                </div>
                <div
                    class="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-8 my-8 items-center"
                >
                    <div
                        class="flex gap-3 w-full"
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

<style scoped>
.swiper {
    height: 27rem;
    overflow: visible;
    padding: 3rem 0;
}

.swiper div.swiper-wrapper {
    display: flex !important;
}

.swiper-slide .slider-card {
    width: 100%;
    height: 100%;
}
</style>
