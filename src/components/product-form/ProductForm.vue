<template>
  <div class="left-container">
    <div class="form-title">
      <span>Добавление товара</span>
      <button
        class="show-btn"
        v-bind:class="{
          'btn-hidden': buttonHidden,
          'btn-rotate': buttonRotate,
        }"
        v-on:click="buttonToggle"
      >
        <img src="../../assets/icons/rectangle.svg" />
      </button>
    </div>
    <div class="form-wrapper" v-bind:class="{ opened: isOpen }">
      <div class="done-message" v-if="doneMessage">
        <span>✓</span>
      </div>
      <div class="form-container" v-else>
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
          v-on:click.prevent="addProduct"
          class="btn"
        >
          Добавить товар
        </button>
      </div>
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
      isOpen: window.innerWidth > 768,
      buttonHidden: window.innerWidth > 768,
      buttonRotate: false,
      doneMessage: false,
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
    addProduct() {
      const product = {
        id: Date.now(),
        name: this.nameOfProduct.value,
        description: this.descriptionOfProduct.value,
        imgLink: this.imgLinkOfProduct.value,
        price: this.priceOfProduct.value,
      };
      console.log(product);
      this.$store.commit("addProductToList", product);
      this.nameOfProduct.value = "";
      this.descriptionOfProduct.value = "";
      this.imgLinkOfProduct.value = "";
      this.priceOfProduct.value = "";
      this.toggelDoneMessage();
    },
    toggelDoneMessage() {
      this.doneMessage = true;
      setTimeout(() => {
        this.doneMessage = false;
      }, 2000);
    },
    buttonToggle() {
      this.buttonRotate = !this.buttonRotate;
      this.isOpen = !this.isOpen;
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
@media screen and (max-width: 768px) {
}
.left-container {
  display: grid;
  grid-gap: 20px;
  align-items: flex-start;
  .form-title {
    display: flex;
    justify-content: space-between;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    height: 50px;
    line-height: 35px;
    color: #3f3f3f;
    & > .show-btn {
      position: relative;
      background: #fffefb;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      border: none;
      border-radius: 10px;
      color: #ffffff;
      height: 36px;
      width: 36px;
      cursor: pointer;
      transition: 150ms ease;
      & > img {
        position: absolute;
        width: 16px;
        height: 16px;
        background: none;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &:hover {
        background: #e5e5e5;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      }
      &:active {
        background: #fffefb;
      }
      &.btn-hidden {
        visibility: hidden;
      }
      &.btn-rotate {
        transform: rotate(180deg);
        box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
        &:hover {
          background: #e5e5e5;
          box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.5);
        }
        &:active {
          background: #fffefb;
        }
      }
    }
  }
  .form-wrapper {
    overflow: hidden;
    min-width: 322px;
    max-height: 0;
    transition: max-height 300ms ease;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
      0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    &.opened {
      max-height: 440px;
    }
  }
  .done-message {
    display: grid;
    align-content: center;
    justify-content: center;
    min-width: 322px;
    min-height: 440px;
    padding: 27px;
    background: #fffefb;
    &>span{
    display: flex;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border: 8px solid #7bae73;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    font-style: normal;
    font-weight: 400;
    font-size: 80px;
    color: #7bae73;
    justify-content: center;
    align-items: center;
    }
  }
  .form-container {
    display: grid;
    min-width: 322px;
    min-height: 440px;
    padding: 27px;
    background: #fffefb;
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
