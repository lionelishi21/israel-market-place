<template>
    <!-- Home Slider -->
  <div class="home-slider slide-animate owl-theme show-nav-hover nav-big mb-2 text-uppercase">
      <div class="home-slide home-slide1 banner">
          <img class="slide-bg" src="images/demoes/demo4/slider/slide-1.jpg" width="1903" height="499" alt="slider image">
          <div class="container d-flex align-items-center">
              <div class="banner-layer " data-animation-name="fadeInUpShorter">
                  <h4 class="text-transform-none m-b-3">Find the Boundaries. Push Through!</h4>
                  <h2 class="text-transform-none mb-0">Summer Sale</h2>
                  <h3 class="m-b-3">70% Off</h3>
                  <h5 class="d-inline-block mb-0">
                      <span>Starting At</span>
                      <b class="coupon-sale-text text-white bg-secondary align-middle"><sup>$</sup>
                          <em class="align-text-top">199</em><sup>99</sup>
                      </b>
                  </h5>
                  <a href="#" class="btn btn-dark btn-lg">Shop Now!</a>
              </div>
              <!-- End .banner-layer -->
          </div>
      </div>
      <!-- End .home-slide -->
  </div>
  <!-- End .home-slider -->
  </template>
  <script setup>
  const slides = defineProps( {
      sliderData: Array
  })
  </script>
  