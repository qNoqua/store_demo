<template>
  <div class="product-page-container">
    <product-form />
    <product-list />
  </div>
</template>

<script>
import ProductForm from "@/components/product-form/ProductForm.vue";
import ProductList from "@/components/product-list/ProductList.vue";

export default {
  components: {
    ProductForm,
    ProductList,
  },
};
</script>

<style lang="scss" scoped>
.product-page-container {
  display: grid;
  grid-template-columns: 332px 3fr;
  grid-gap: 10px;
  align-items: flex-start;
  padding: 30px;
}
@media screen and (max-width: 768px) {
  .product-page-container {
    grid-template-columns: 1fr;
  }
}
</style>
