<template>
  <div class="left-container">
    <div class="form-title">Добавление товара</div>
    <div class="form-container">
      <div class="input-container">
        <label for="name" class="name" required>Наименование товара</label>
        <input
          class="input input_name"
          type="text"
          placeholder="Введите наименование товара"
          id="name"
          v-model="nameOfProduct.value"
          v-on:input="nameValidator"
          v-bind:class="nameOfProduct.status"
        />
        <span v-if="nameOfProduct.status === 'invalid'" class="span-err"
          >Поле является обязательным</span
        >
        <span v-else></span>
      </div>
      <div class="input-container">
        <label for="description" class="description">Описание товара</label>
        <textarea
          class="input input-description"
          type="text"
          placeholder="Введите описание товара"
          id="description"
          v-model="descriptionOfProduct.value"
        />
        <span></span>
      </div>
      <div class="input-container">
        <label for="img-link" class="img-link-label" required
          >Ссылка на изображение товара</label
        >
        <input
          class="input input-img-link"
          type="text"
          placeholder="Введите ссылку"
          id="img-link"
          v-model="imgLinkOfProduct.value"
          v-on:input="imgLinkValidator"
          v-bind:class="imgLinkOfProduct.status"
        />
        <span v-if="imgLinkOfProduct.status === 'invalid'" class="span-err"
          >Поле является обязательным</span
        >
        <span v-else></span>
      </div>
      <div class="input-container">
        <label for="price" class="price-label" required>Цена товара</label>
        <input
          class="input input-price"
          v-model="modelNumber"
          v-on:focus="clearPriceInput"
          v-on:keyup="priceValidator"
          type="text"
          placeholder="Введите цену"
          id="price"
          v-bind:class="priceOfProduct.status"
        />
        <span v-if="priceOfProduct.status === 'invalid'" class="span-err"
          >Поле является обязательным</span
        >
        <span v-else></span>
      </div>
      <button
        v-bind:disabled="isButtonDisabled"
        v-on:click.prevent="pushProductToStore"
        class="btn"
      >
        Добавить товар
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameOfProduct: {
        value: null,
        isValid: false,
        status: "clear",
      },
      descriptionOfProduct: {
        value: null,
      },
      imgLinkOfProduct: {
        value: null,
        isValid: false,
        status: "clear",
      },
      priceOfProduct: {
        displayedValue: "",
        value: "",
        isValid: false,
        status: "clear",
      },
    };
  },
  methods: {
    nameValidator() {
      if (this.nameOfProduct.value.length > 0) {
        this.nameOfProduct.isValid = true;
        this.nameOfProduct.status = "isValid";
      } else {
        this.nameOfProduct.isValid = false;
        this.nameOfProduct.status = "invalid";
      }
    },
    imgLinkValidator() {
      const reg =
        /(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim;
      if (reg.test(this.imgLinkOfProduct.value) === true) {
        this.imgLinkOfProduct.status = "isValid";
        this.imgLinkOfProduct.isValid = true;
      }
      if (this.imgLinkOfProduct.value === "") {
        this.imgLinkOfProduct.status = "invalid";
        this.imgLinkOfProduct.isValid = false;
      }
    },
    priceValidator(event) {
      const reg = /(\d)/;
      if (
        reg.test(event.key) === false ||
        this.priceOfProduct.displayedValue[0] === "0"
      ) {
        event.preventDefault();
        this.priceOfProduct.status = "invalid";
        this.priceOfProduct.isValid = false;
        this.priceOfProduct.value = "";
      } else {
        this.priceOfProduct.status = "isValid";
        this.priceOfProduct.isValid = true;
      }
    },
    pushProductToStore() {
      const product = {
        id: Date.now(),
        name: this.nameOfProduct.value,
        description: this.descriptionOfProduct.value,
        imgLink: this.imgLinkOfProduct.value,
        price: this.priceOfProduct.value,
      };
      console.log(product);
      this.$store.commit("addProductToList", product);
    },
  },
  computed: {
    modelNumber: {
      get() {
        const parts = this.priceOfProduct.value.toLocaleString();
        return parts;
      },
      set(newPrice) {
        this.priceOfProduct.displayedValue = newPrice;
        if (Number.isNaN(newPrice.replace(/\s/g, "")) === false) {
          this.priceOfProduct.value = +newPrice.replace(/\s/g, "");
        }
      },
    },
    isButtonDisabled() {
      if (
        this.nameOfProduct.isValid === true &&
        this.imgLinkOfProduct.isValid === true &&
        this.priceOfProduct.isValid === true
      )
        return false;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.left-container {
  display: grid;
  grid-gap: 20px;
  align-items: flex-start;
  .form-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    height: 50px;
    line-height: 35px;
    color: #3f3f3f;
  }
  .form-container {
    display: grid;
    min-width: 322px;
    min-height: 440px;
    padding: 27px;
    background: #fffefb;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
  }
  .input-container {
    display: grid;
    & > label {
      position: relative;
      margin-bottom: 3px;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;
      letter-spacing: -0.02em;
      color: #49485e;
      &[required] {
        &::after {
          content: ".";
          position: absolute;
          color: #ff8484;
          font-size: 28px;
          top: -12px;
          right: auto;
        }
      }
    }
    .input {
      background: #fffefb;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      border: none;
      width: auto;
      height: 36px;
      padding: 18px 15px;
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      color: #3f3f3f;
      resize: none;
      transition: 200ms;
      &:hover {
        background: #e5e5e5;
      }
      &:focus {
        outline: 1px solid #fffefb;
      }
      &::placeholder {
        font-family: "Source Sans Pro";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #b4b4b4;
        padding: 0;
      }
    }
    .invalid {
      outline: 1px solid #ff8484;
    }
    & > .input-description {
      height: 108px;
      padding-top: 12px;
    }
    & > span {
      height: 10px;
    }
    .span-err {
      font-family: "Source Sans Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      letter-spacing: -0.02em;
      color: #ff8484;
    }
  }
  .btn {
    background: #7bae73;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    height: 36px;
    margin-top: 21px;
    cursor: pointer;
    transition: 150ms;
    &:hover {
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }
    &:active {
      background: #689a60;
    }
    &:disabled {
      background: #eeeeee;
      color: #b4b4b4;
      box-shadow: none;
    }
  }
}
</style>
