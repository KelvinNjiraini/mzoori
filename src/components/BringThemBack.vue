<script setup>
const features = [
    {
        title: 'Fully synced customer profiles',
        description:
            'Offer personalized experiences with quick access to order history, lifetime spend, and more in the POS system.',
    },
    {
        title: 'Effective marketing',
        description:
            'Collect contact details and tailor marketing campaigns to share exclusive discounts and sneak previews.',
    },
    {
        title: 'Integrated loyalty programs',
        description:
            'Add loyalty apps to your POS system to reward customers for shopping with you, both in store and online.',
    },
];
</script>

<template>
    <section class="p-8 md:p-20">
        <div class="flex flex-col items-center">
            <h1 class="text-3xl font-semibold text-center text-primary">
                Bring them back
            </h1>
            <div class="my-6 bg-primary h-[1px] w-28"></div>
            <p class="text-lg max-w-2xl text-center">
                Turn one-time customers into lifetime fans with a point of sale
                system that supports your staff in creating meaningful customer
                relationships.
            </p>
        </div>
        <div class="flex gap-6 items-center justify-center mt-16">
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
                <div class="flex justify-between items-center cursor-pointer">
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
        <!--  -->
        <div class="my-8 w-full md:w-[80%] mx-auto">
            <div class="grid grid-cols-2 justify-center items-center">
                <img
                    src="./../assets/desktop-computer-2.svg"
                    alt="desktop computer"
                    class=""
                />
                <div class="mt-20 flex flex-col space-y-6">
                    <h1 class="text-3xl font-semibold max-w-sm text-primary">
                        Powerful POS hardware you can count on
                    </h1>
                    <p class="text-lg max-w-[21rem]">
                        Mzoori’s sleek POS hardware comes with built-in payment
                        processing and competitive credit card rates. You’ll be
                        able to accept all the major payment methods and look
                        good doing it too.
                    </p>
                    <div
                        class="flex justify-between items-center cursor-pointer"
                    >
                        <span class="text-sm text-primary/75">
                            Learn more about POS hardware
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
    </section>
</template>
