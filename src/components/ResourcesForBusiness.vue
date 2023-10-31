<script setup>
const features = [
    {
        title: 'SeaVees',
        description:
            'SeaVees employs POS Go for a more flexible and untethered checkout experience',
    },
    {
        title: 'Lively',
        description:
            'Lively’s omnichannel approach increased average order value by 80%',
    },
    {
        title: 'Nalata Nalata',
        description:
            'Nalata Nalata used their retail location to drive ~50% of sales across every channel',
    },
];
</script>
<template>
    <section class="mr-10 md:mr-24 -mb-[9rem]">
        <div
            class="relative bg-gradient-to-bl from-white/70 to-transparent backdrop-blur-3xl shadow-md rounded-xl z-10"
        >
            <img
                src="./../assets/gradient-two.svg"
                alt=""
                class="absolute top-0 right-0 -z-20"
            />
            <div class="p-8 md:p-24 md:pl-[10.5rem]">
                <div class="flex">
                    <h1 class="text-4xl font-bold max-w-xs">
                        Resources for your business
                    </h1>
                    <p class="max-w-sm text-lg text-start ml-auto">
                        Discover up-and-coming trends, access free guides, and
                        learn how business owners like you use Mzoori’s POS
                        system to level up.
                    </p>
                </div>
                <div
                    class="flex gap-6 items-center pt-20 -mb-36 relative z-20 bg-transparent"
                >
                    <div
                        class="p-8 bg-white flex flex-col gap-6 max-w-xs rounded-lg shadow-lg"
                        v-for="feat in features"
                        :key="feat.title"
                    >
                        <div>
                            <img
                                src="./../assets/shield-2.svg"
                                alt="shield icon"
                                class="h-12"
                            />
                        </div>
                        <h4 class="text-xl font-bold">
                            {{ feat.title }}
                        </h4>
                        <p class="text-sm text-slate-500">
                            {{ feat.description }}
                        </p>
                        <div
                            class="flex justify-between items-center cursor-pointer"
                        >
                            <span class="text-sm text-primary/75">
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
            </div>
        </div>
    </section>
</template>
