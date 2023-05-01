<template>
 <div class="page-wrapper">
     <TheHeader />
     <NuxtLoadingIndicator />
        <NuxtPage />
     <TheFooter />
</div>

</template>
<script setup lang="ts">
import TheHeader from "~~/components/theme4/common/TheHeader.vue";
import TheFooter from "~~/components/theme4/common/TheFooter.vue";

 useHead({
      titleTemplate: 'Israel Market Place',
 })


</script>
<style lang="scss">
$primary-color: #5a228b;

@import '~/assets/css/bootstrap.min.css';
@import '~/assets/sass/style.scss';


</style>