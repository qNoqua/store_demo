<template>
  <div
    class="select"
    v-on:mouseover="isVisible = true"
    v-on:mouseleave="isVisible = false"
    v-on:click="isVisible = false"
  >
    <span class="title">Сортировка</span>
    <img src="../../assets/icons/rectangle.svg" />
    <div class="options" v-if="isVisible">
      <div
        class="option"
        v-for="option of options"
        v-bind:key="option.value"
        v-on:click="selectedSort(option)"
      >
        {{ option.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { name: "наименованию", value: "name" },
        { name: "возрастанию цены", value: "increase" },
        { name: "убыванию цены", value: "decrease" },
      ],
      isVisible: false,
      sortDirection: null,
    };
  },
  methods: {
    selectedSort(option) {
      this.$store.commit("selectedSort", option);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
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
  position: relative;
  & > .title {
    background: transparent;
  }
  &:hover {
    background: #e5e5e5;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  }
  & > img {
    padding: 0 5px;
    background: none;
  }
  & > .options {
    width: 140px;
    position: absolute;
    right: 0;
    top: 100%;
    border-radius: 4px;
    z-index: 10;
    & > .option {
      height: 36px;
      padding: 10px;
      &:hover {
        background: #e5e5e5;
      }
      &:active {
        background: #fffefb;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
