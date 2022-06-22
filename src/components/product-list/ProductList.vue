<template>
  <div class="right-container">
    <div class="btn-container">
      <drop-down/>
    </div>
    <div class="list-container">
      <product-item
        v-bind:stats="product"
        v-for="product of products"
        v-bind:key="product.id"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from "@/components/product-list/ProductItem.vue";
import DropDown from "@/components/UI/DropDown.vue";
export default {
  components: {
    ProductItem,
    DropDown
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style lang="scss" scoped>
.right-container {
  display: grid;
}
.list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 332px);
  grid-auto-rows: 432px;
  grid-gap: 15px;
  justify-items: center;
  align-items: center;
}
.btn-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 332px);
  grid-auto-rows: minmax(50px, min-content);
  grid-gap: 15px;
  justify-items: end;
  align-items: center;
}
.btn {
  grid-column-end: -1;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  padding: 10px 15px;
  transition: 150ms;
  cursor: pointer;
  & > img {
    padding: 0 2px;
    background: none;
  }
  &:hover {
    background: #e5e5e5;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
  &:active {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  }
}
</style>
