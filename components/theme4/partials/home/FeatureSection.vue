<template>
    <section class="featured-products-section">
        <div class="container">
            <h2 class="section-title heading-border ls-20 border-0">Featured Products</h2>
            <div class=" row product-slider custom-products nav-outer show-nav-hover nav-image-center" >
                <div v-for="product in featureProducts" class="col-md-3" :key="product.id">
                    
                    <div class="product-default ">
                       
                       <figure >
                           <NuxtLink href="#" class="product-image" :to="product.website_url">
                               <img class="product-image" :src="'data:image/png;base64,'+product.image_512" width="280" height="280" alt="product">
                           </NuxtLink>
                           
                           <div class="label-group" v-if="product.website_ribbon_id">
                               <div class="product-label label-hot">HOT</div>
                               <div class="product-label label-sale">-{{product.website_ribbon_id[1]}}</div>
                           </div>
                       </figure>

                       <div class="product-details">
                          
                           <div class="category-list" v-if="product.categ_id">
                               <a href="category.html" class="product-category">{{product.categ_id[1]}}</a>
                           </div>

                           <h3 class="product-title">
                               <a href="#" @click.prevent="productDetails(product.website_url)">{{product.name}}</a>
                           </h3>

                           <div class="ratings-container">
                               <div class="product-ratings">
                                   <span class="ratings" :style="'width:'+ratings(product.rating_avg)"></span>
                                   <span class="tooltiptext tooltip-top">
                                       {{ product.rating_count }} {{ product.rating_count > 1  ? 'reviews' : 'review' }}
                                   </span>
                               </div>
                           </div>

                           <!-- End .product-container -->
                           <div class="price-box">
                               <del class="old-price" v-if="product.oldprice">${{product.oldprice}}</del>
                               <span class="product-price">${{product.list_price}}</span>
                           </div>
                           <!-- End .price-box -->

                           <div class="product-action">
                               <a href="#" class="btn-icon-wish" title="wishlist"><i
                                       class="icon-heart"></i></a>
                              
                               <button @click="updateVal()" class="btn-icon btn-add-cart"><i
                                       class="fa fa-arrow-right"></i><span>SELECT
                                       OPTIONS</span>
                               </button>

                               <a href="#" class="btn-quickview" title="Quick View">\
                                   <i class="fas fa-external-link-alt"></i>
                               </a>
                                
                           </div>
                       </div>
                       <!-- End .product-details -->
                   </div>
                </div>
            </div>
        </div>
    </section>
 </template>
 <script lang="ts" setup>
 const router = useRouter();

 const products = defineProps({
     featureProducts: Array
 })
 
 const ratings = (rating: number) => {
     return ((rating * 100) / 5 )+'%'
 }
 
 const productDetails = async (productId: any) => {
   await router.push({ path: productId })
 }
 </script>
 <style>
 .product-image {
     width:  280px!important;
     height: 280px  !important;
 }
 </style>