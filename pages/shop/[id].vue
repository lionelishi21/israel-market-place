<template>
<main class="main">
    <ProductDetails />           
</main>
</template>
<script lang="ts" setup>
import ProductDetails from '~/components/theme4/partials/product/detail/PvDetailFour';


useHead({
      titleTemplate: 'Israel Market Place',
      link: [
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'css/bootstrap.min.css' 
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'css/theme4/style.min.css' 
      },
    ]
 })

 onMounted(() => {
    document.querySelector( 'body' ).classList.add( 'loaded' );
 })
</script>