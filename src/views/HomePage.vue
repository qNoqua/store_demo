<template>
    <div class="product-page--container">
        <product-form/>
        <product-list/>
    </div>
</template>

<script>
import ProductForm from '@/components/product-form/ProductForm.vue'
import ProductList from '@/components/product-list/ProductList.vue'

export default {
    components: {
        ProductForm,
        ProductList
    }
}
</script>

<style lang="scss" scoped>
.product-page--container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    padding: 36px;
}
</style>