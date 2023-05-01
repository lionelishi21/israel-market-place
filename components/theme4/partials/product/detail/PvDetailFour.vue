<template>
	<div class="container">
		<!-- Breadcrumb -->
		<nav aria-label="breadcrumb" class="breadcrumb-nav">
			<ol class="breadcrumb">
				
				<li class="breadcrumb-item">
					<NuxtLink to="/">
						<i class="icon-home"></i>
					</NuxtLink>
				</li>
				
				<li class="breadcrumb-item">
					<NuxtLink to="/shop">
						Shop
					</NuxtLink>
				</li>

				<li class="breadcrumb-item" v-if="props.product">
					{{props.product.name}}
				</li>
			</ol>
		</nav>
		<!-- End Breadcrumb -->
		<div class="product-single-container product-single-default">
			
			<div class="cart-message d-none" v-if="props.product">
				<strong class="single-cart-notice">{{props.product.name}}</strong>
				<span>has been added to your cart.</span>
			</div>

			<div class="row">
				
				<div class="col-lg-5 col-md-6 product-single-gallery">
					<div class="product-slider-container">
						
						<!-- Main Image Component -->
						<div class="product-single-carousel owl-theme show-nav-hover" v-if="props.product">
							<div class="product-item">
								<img class="product-single-image"
								     :src="'data:image/png;base64,'+product.image_512"
									 width="468"
									 height="468" alt="product" />
							</div>
						</div>
						<!-- Main Image Component -->

						<!-- End .product-single-carousel -->
						<span class="prod-full-screen">
							<i class="icon-plus"></i>
						</span>

					</div>

					<div class="prod-thumbnail owl-dots">
						<!-- <div class="owl-dot">
							<img src="~/assets/images/products/zoom/product-1.jpg" width="110" height="110"
								alt="product-thumbnail" />
						</div> -->
					</div>

				</div><!-- End .product-single-gallery -->

				<div class="col-lg-7 col-md-6 product-single-details">
					<h1 class="product-title">{{props.product.name}}</h1>

					<div class="ratings-container">
					
						<div class="product-ratings">
							<span class="ratings" style="width:60%"></span><!-- End .ratings -->
							<span class="tooltiptext tooltip-top"></span>
						</div><!-- End .product-ratings -->

						<a href="#" class="rating-link">( 6 Reviews )</a>
					</div><!-- End .ratings-container -->

					<hr class="short-divider">

					<div class="price-box" v-if="props.product">
						<!-- <span class="old-price">$1,999.00</span> -->
						<span class="new-price"> ${{ props.product.list_price }}</span>
					</div><!-- End .price-box -->

					<div class="product-desc"  v-if="props.product">
						<p>
							{{props.product.description_sale}}
						</p>
					</div><!-- End .product-desc -->

					<ul class="single-info-list">

						<!-- <li>
							SKU: <strong>654613612</strong>
						</li> -->

						<li v-if="props.product.categ_id">
							CATEGORY: <strong><a href="#" class="product-category">{{props.product.categ_id[1]}}</a></strong>
						</li>

						<!-- <li>
							TAGs: <strong><a href="#" class="product-category">CLOTHES</a></strong>,
							<strong><a href="#" class="product-category">SWEATER</a></strong>
						</li> -->
					</ul>

					<div class="product-action">
						<div class="">
							<input class="form-control" v-model="qty" type="number">
						</div><!-- End .product-single-qty -->

						<button class="btn btn-dark add-cart mr-2" @click="addToShopingCare()" title="Add to Cart">Add to Cart</button>
						<a href="#" class="btn btn-gray view-cart d-none">View cart</a>
					</div><!-- End .product-action -->


					<hr class="divider mb-0 mt-0">

					<div class="product-single-share mb-3">
						<label class="sr-only">Share:</label>

						<div class="social-icons mr-2">
							<a href="#" class="social-icon social-facebook icon-facebook" target="_blank"
								title="Facebook"></a>
							<a href="#" class="social-icon social-twitter icon-twitter" target="_blank"
								title="Twitter"></a>
							<a href="#" class="social-icon social-mail icon-mail-alt" target="_blank"
								title="Mail"></a>
						</div><!-- End .social-icons -->

						<a href="wishlist.html" class="btn-icon-wish add-wishlist" title="Add to Wishlist"><i
								class="icon-wishlist-2"></i><span>Add to
								Wishlist</span></a>
					</div><!-- End .product single-share -->
				</div><!-- End .product-single-details -->
			</div><!-- End .row -->
		
		</div><!-- End .product-single-container -->


	</div><!-- End .container -->
</template>
<script lang="ts" setup>
import { useProductStore } from '~/stores/productStore';
import { useLoading } from 'vue-loading-overlay';

const productStore = useProductStore();
const $loading = useLoading();

const props = defineProps({
	product: {
		type: Array
	}
})

const qty = ref(1);

interface IProductformation {
	qty?: Number,
	productId?: Number,
	variant?: Number
}

const addToShopingCare = async () => {

	alert('working')
	//TODO: Add Pre Loader went adding product to shopping cart
	// // let loader = $loading.show({});

	// productStore.addToShoppingCart(productInformation)
	// .then( res => {
	// 	console.log( res ) 
	// 	setTimeout(() => {
	// 		// loader.hide();
	// 	}, 1000)
	// })
	// .catch(err => {
	// 	console.log(err)
	// })
}

</script>