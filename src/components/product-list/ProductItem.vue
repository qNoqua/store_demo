<template>
  <div class="product-container" v-on:mouseover="isVisibilityButton = true"
  v-on:mouseleave="isVisibilityButton = false">
    <div class="img-container">
      <img v-bind:src="stats.imgLink" />
    </div>
    <div class="stats-container">
      <div class="title-container">{{ stats.name }}</div>
      <div class="description-container">{{ stats.description }}</div>
      <div class="price-container">{{ stats.price }} руб.</div>
    </div>
    <button class="btn" v-on:click.prevent="removeProduct" v-if="isVisibilityButton">
      <img src="../../assets/icons/delete.svg"/>
    </button>
  </div>
</template>

<script>
export default {
data () {
return {
   isVisibilityButton: false,
}
},
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeProduct() {
      console.log(this.stats)
      this.$store.commit('removeProduct', this.stats)
    }
  }
};
</script>

<style lang="scss" scoped>
.product-container {
  display: grid;
  position: relative;
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  transition: box-shadow 150ms ease;
  color: #3f3f3f;
  font-family: "Source Sans Pro";
  cursor: pointer;
  &:hover {
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.15),
      0px 6px 10px rgba(0, 0, 0, 0.1);
  }
  .img-container {
    width: 100%;
    height: 200px;
    & > img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .stats-container {
    display: grid;
    grid-template-rows: 60px 82px 90px;
    .title-container {
      display: flex;
      padding: 0 15px;
      align-items: center;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
    .description-container {
      display: flex;
      padding: 0 15px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    .price-container {
      display: flex;
      padding: 0 15px;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
  .btn {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    background: #ff8484;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    top: -8px;
    left: 308px;
    width: 32px;
    height: 32px;
    border: none;
    transition: 150ms;
    cursor: pointer;
    & > img {
      background: none;
    }
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
      background: #da6a6a;
    }
    &:active {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.6);
      background: #ff8484;
    }
  }
}
</style>
