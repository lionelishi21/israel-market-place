<template>
<main class="main">
    
    <div class="loading-overlay" v-if="loading">
        <div class="bounce-loader">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>

    <!-- Intro Component Slider  -->
    <intro-section></intro-section>
    
    <service-section></service-section>
   
    <FeatureSection :featureProducts="featuredProducts"/>
   
    <section class="new-products-section">
        <div class="container">
            <NewArrivalSection />
            <CategorySection  :cats="categories" />
        </div>
    </section>

    <FeatureBoxSectionVue />

    <PromotionSectionVue />

</main>
</template>
<script setup lang="ts">

import IntroSection         from '~/components/theme4/partials/home/IntroSection.vue';
import ServiceSection       from '~/components/theme4/partials/home/ServiceSection.vue';
import FeatureSection       from '~/components/theme4/partials/home/FeatureSection.vue';
import NewArrivalSection    from '~/components/theme4/partials/home/NewArrivalSection.vue';
import CategorySection      from '~~/components/theme4/partials/home/CategorySection.vue';
import FeatureBoxSectionVue from '~~/components/theme4/partials/home/FeatureBoxSection.vue';

import PromotionSectionVue  from '~/components/theme4/partials/home/PromotionSection.vue';

import { useProductCategoryStore } from '~~/stores/productCategory';
const productCategory = useProductCategoryStore();

const loading = ref(false)

// TODO: Remove this section and add request from pinia store
const { data: featuredProducts } = await useFetch('/api/products');

const fetchCategories = async () => {
    loading.value = true
    await productCategory.fetchProductCategories()
    .then( res => {
        loading.value = false
    })
}

fetchCategories();

const categories = computed(() => productCategory.listProductCategories)
</script>

<style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding-top: 200px;
    font-size: 30px;
    font-family: sans-serif;
  }
</style>

  