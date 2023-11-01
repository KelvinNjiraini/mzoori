<script setup>
import { ref } from 'vue';

const answerIsShown = ref(false);
</script>
<template>
    <section class="bg-white p-8 md:p-[10.5rem]">
        <h1 class="text-2xl md:text-4xl font-bold mb-6">
            Frequently asked questions
        </h1>
        <div class="flex flex-col gap-5">
            <!-- card -->
            <div class="rounded-lg shadow-lg p-4 md:p-9 flex gap-3">
                <div>
                    <span
                        class="text-3xl md:text-6xl md:leading-3 cursor-pointer"
                        :class="
                            answerIsShown
                                ? 'text-custom-yellow'
                                : 'text-primary'
                        "
                        @click="answerIsShown = !answerIsShown"
                    >
                        {{ answerIsShown ? '&minus;' : '&plus;' }}
                    </span>
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="text-sm md:text-md font-semibold">
                        What is a POS (point of sale)?
                    </h3>
                    <p
                        class="text-slate-500 text-sm md:text-base"
                        :class="
                            answerIsShown
                                ? 'h-full opacity-100 duration-200  transition-all'
                                : 'h-0 opacity-0 duration-200  transition-all'
                        "
                    >
                        A point of sale, or POS, is a system for making sales in
                        person. It’s the device and/or software that you use to
                        process transactions and accept payments, likely from
                        your retail store. With Mzoori POS, retail businesses
                        get all the tools they need to manage daily operations,
                        accept payments anywhere, and build relationships with
                        their customers. But the benefits of Mzoori go beyond
                        your retail store. With a powerful ecommerce solution
                        also included, Mzoori unifies in-store and online sales
                        to bridge the gaps between your website, social media,
                        and POS. This allows you to sync inventory everywhere
                        you sell and offer seamless shopping options for
                        customers like local pickup, local delivery,
                        ship-to-home, and email carts
                    </p>
                </div>
            </div>
            <div class="rounded-lg shadow-lg p-9 flex items-start gap-3">
                <div>
                    <span class="text-primary text-3xl md:text-6xl md:leading-3"
                        >&plus;</span
                    >
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="text-sm md:text-md font-semibold">
                        What is a POS example?
                    </h3>
                </div>
            </div>
            <div class="rounded-lg shadow-lg p-9 flex items-start gap-3">
                <div>
                    <span class="text-primary text-3xl md:text-6xl md:leading-3"
                        >&plus;</span
                    >
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="text-sm md:text-md font-semibold">
                        What is a POS example?
                    </h3>
                </div>
            </div>
            <div class="rounded-lg shadow-lg p-9 flex items-start gap-3">
                <div>
                    <span class="text-primary text-3xl md:text-6xl md:leading-3"
                        >&plus;</span
                    >
                </div>
                <div class="flex flex-col gap-3">
                    <h3 class="text-sm md:text-md font-semibold">
                        What is a POS example?
                    </h3>
                </div>
            </div>
        </div>
    </section>
</template>
