<script setup>
import { defineAsyncComponent } from 'vue';

const HeroSection = defineAsyncComponent(() =>
    import('./components/HeroSection.vue')
);
const FeaturesSection = defineAsyncComponent(() =>
    import('./components/FeaturesSection.vue')
);

const PowerYourRetail = defineAsyncComponent(() =>
    import('./components/PowerYourRetail.vue')
);

const BringThemBack = defineAsyncComponent(() =>
    import('./components/BringThemBack.vue')
);

const ResourcesForBusiness = defineAsyncComponent(() =>
    import('./components/ResourcesForBusiness.vue')
);

const CustomerReview = defineAsyncComponent(() =>
    import('./components/CustomerReview.vue')
);

const FrequentlyAskedQuestions = defineAsyncComponent(() =>
    import('./components/Faqs.vue')
);

const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
</script>

<template>
    <!-- Landing page -->
    <HeroSection />
    <FeaturesSection />
    <PowerYourRetail />
    <BringThemBack />
    <ResourcesForBusiness />
    <CustomerReview />
    <FrequentlyAskedQuestions />
    <Footer />
</template>

<style scoped>
/*  */
</style>
