<template>
 <div class="page-wrapper">
     <TheHeader />
     <NuxtPage />
</div>
</template>
<script setup lang="ts">
import TheHeader from "~~/components/theme4/common/TheHeader.vue";

 useHead({
      titleTemplate: 'Israel Market Place',
 })

 onMounted(() => {
    document.querySelector( 'body' ).classList.add( 'loaded' );
 })
</script>
<style lang="postcss">
@import '~/assets/css/bootstrap.min.css';
@import '~/assets/css/demo/demo4/demo4.css';
</style>