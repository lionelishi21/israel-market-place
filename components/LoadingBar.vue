<template>
    <div v-if="loading"  class="loading-overlay">
        <div class="bounce-loader">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
    loading: false
    }),
    methods: {
    start() {
        this.loading = true
    },
    finish() {
        this.loading = false
    }
    }
}
</script>
  