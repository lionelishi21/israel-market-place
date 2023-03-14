<template>
<main class="main">
    <!-- Intro Component Slider  -->
    <intro-section></intro-section>

    <service-section></service-section>

    <FeatureSection :featureProducts="featuredProducts"/>

    <button class="btn btn-primary" @click="btnClick()">Hit Me</button>
</main>
</template>
<script setup lang="ts">
import IntroSection   from '~/components/theme4/partials/home/IntroSection.vue';
import ServiceSection from '~/components/theme4/partials/home/ServiceSection.vue';
import FeatureSection from '~/components/theme4/partials/home/FeatureSection.vue';

const router = useRouter();

onMounted( () => {
     console.log('mounted')
})

const { data: featuredProducts } = await useFetch('/api/products');
const btnClick = () => {}

</script>

  