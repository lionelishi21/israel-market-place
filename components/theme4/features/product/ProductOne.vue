<template>
 <div class="product-default">

    <figure>
        <NuxtLink href="#" class="product-image" :to="product.website_url">
                <img :src="'data:image/png;base64,'+product.image_512" class="product-image" width="280" height="280" alt="product" />
        </NuxtLink>
        <div class="label-group">
            <div class="product-label label-hot">HOT</div>
            <div class="product-label label-sale">-20%</div>
        </div>
    </figure>

    <div class="product-details">
        
        <div class="category-wrap">
            <div class="category-list">
                <div class="category-list" v-if="product.categ_id">
                    <a href="category.html" class="product-category">{{product.categ_id[1]}}</a>
                </div>
            </div>
        </div>

        <h3 class="product-title"> <a href="product.html">{{ product.name }}</a> </h3>

        <div class="ratings-container">
            <div class="product-ratings">
                <span class="ratings" style="width:100%"></span>
                <!-- End .ratings -->
                <span class="tooltiptext tooltip-top"></span>
            </div>
            <!-- End .product-ratings -->
        </div>
        <!-- End .product-container -->

        <div class="price-box">
            <!-- <span class="old-price">$90.00</span> -->
            <span class="product-price">${{product.list_price}}</span>
        </div>
        <!-- End .price-box -->

        <div class="product-action">
            <a href="wishlist.html" class="btn-icon-wish" title="wishlist"><i
                    class="icon-heart"></i></a>
            <a href="product.html" class="btn-icon btn-add-cart"><i
                    class="fa fa-arrow-right"></i><span>SELECT
                    OPTIONS</span></a>
            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View"><i class="fas fa-external-link-alt"></i></a>
        </div>
    </div>
    <!-- End .product-details -->
</div>
</template>
<script setup>
const props = defineProps({
    product: Array
})
</script>