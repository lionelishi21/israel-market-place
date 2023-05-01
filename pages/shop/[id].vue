<template>
<main class="main">
   <div class="loading-overlay" v-if="loading">
        <div class="bounce-loader">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>

    <ProductDetails v-if="details"  :product="details" />       
</main>
</template>
<script lang="ts" setup>
import ProductDetails from '~/components/theme4/partials/product/detail/PvDetailFour';
import { useProductStore} from '~/stores/productStore';


const productStore = useProductStore();
const route = useRoute();
const loading = ref(false);

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

async function retrieveProducts() {
  const myArray = route.params.id.split("-");
  const id = myArray[myArray.length -1]

  loading.value = true;
  await productStore.fetchProductDetails( id ).then(res => {
     loading.value = false
  })

}
retrieveProducts()
const details = computed(() => productStore.listProductDetails)
</script>


const productsStore = useProductsStore()

async function retrieveProducts() {
  await productsStore.retrieveProducts()
}

await retrieveProducts()