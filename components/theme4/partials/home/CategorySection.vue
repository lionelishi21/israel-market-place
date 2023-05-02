<template>
<div>
    <!-- <pre>{{ props.cats }}</pre> -->
    <h2 class="section-title categories-section-title heading-border border-0 ls-0" data-animation-delay="100" data-animation-name="fadeInUpShorter">
        Browse Our Categories
    </h2>

    <div class="categories-slider owl-theme show-nav-hover nav-outer">
        <div class="row">
            <div class="col-md-3" v-for="cat in props.cats" :key="cat.id">

                <div class="product-category" data-animation-name="fadeInUpShorter" v-if="cat.parents_and_self.length == 1">
                    <a href="" @click="selectCategory(cat)">
                        <figure>
                            <img :src="'data:image/png;base64,'+cat.image_512" alt="category" width="280" height="240" />
                        </figure>
                        <div class="category-content">
                            <h3>{{cat.name}}</h3>
                            <span><mark class="count">{{ cat.product_tmpl_ids.length }}</mark> products</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
const router = useRouter();

const props = defineProps ({
    cats: {
        type: Array
    }
})

const selectCategory = async (params: any) => {
   
   // router.push({ path: `/shop?category=${params.name}-${params.id}`})
   // let query = {  category_id: params.id }
   // await product.filterProducts(query)
   await router.push({ path: '/shop', query: { category: `${params.name}-${params.id}` },})
   window.location.reload(true)
}

</script>