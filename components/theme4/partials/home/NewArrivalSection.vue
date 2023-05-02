<template>
<div>
    <h2 class="section-title heading-border ls-20 border-0">New Arrivals</h2>

    <div class="products-slider custom-products owl-theme nav-outer show-nav-hover nav-image-center mb-2">
        <div class="row">
            <div class="col-md-3">
                <div class="product-default" data-animation-name="fadeInRightShorter">
                    <figure>
                        <a href="product.html">
                            <img src="~/assets/images/products/product-6.jpg" width="220" height="220" alt="product">
                            <img src="~/assets/images/products/product-6-2.jpg" width="220" height="220" alt="product">
                        </a>
                        <div class="label-group">
                            <div class="product-label label-hot">HOT</div>
                        </div>
                    </figure>

                    <div class="product-details">
                        <div class="category-list">
                            <a href="category.html" class="product-category">Category</a>
                        </div>
                        <h3 class="product-title">
                            <a href="product.html">Men Black Gentle Belt</a>
                        </h3>
                        <div class="ratings-container">
                            <div class="product-ratings">
                                <span class="ratings" style="width:80%"></span>
                                <!-- End .ratings -->
                                <span class="tooltiptext tooltip-top"></span>
                            </div>
                            <!-- End .product-ratings -->
                        </div>
                        <!-- End .product-container -->
                        <div class="price-box">
                            <del class="old-price">$59.00</del>
                            <span class="product-price">$49.00</span>
                        </div>
                        <!-- End .price-box -->
                        <div class="product-action">
                            <a href="wishlist.html" class="btn-icon-wish" title="wishlist"><i
                                    class="icon-heart"></i></a>
                            <a href="#" class="btn-icon btn-add-cart product-type-simple"><i
                                    class="icon-shopping-cart"></i><span>ADD TO CART</span></a>
                            <a href="ajax/product-quick-view.html" class="btn-quickview" title="Quick View"><i
                                    class="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
        <!-- End .product-details -->
                    </div>
            </div>
        </div>
    </div>
    <!-- End .featured-proucts -->

    <div class="banner banner-big-sale" data-animation-delay="200" data-animation-name="fadeInUpShorter" style="background: #2A95CB center/cover url('~/assets/images/demoes/demo4/banners/banner-4.jpg');">
        <div class="banner-content row align-items-center mx-0">
            <div class="col-md-9 col-sm-8">
                <h2 class="text-white text-uppercase text-center text-sm-left ls-n-20 mb-md-0 px-4">
                    <b class="d-inline-block mr-3 mb-1 mb-md-0">Big Sale</b> All new fashion brands items up to 70% off
                    <small class="text-transform-none align-middle">Online Purchases Only</small>
                </h2>
            </div>
            <div class="col-md-3 col-sm-4 text-center text-sm-right">
                <a class="btn btn-light btn-white btn-lg" href="category.html">View Sale</a>
            </div>
        </div>
    </div>

</div>
</template>
<script setup lang="ts">
const props = defineProps ({
    product: {
        type: Array
    }
})


</script>