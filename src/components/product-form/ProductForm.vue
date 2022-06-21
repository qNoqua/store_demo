<template>
  <div class="add-form__container">
    <div class="form-title">Добавление товара</div>
    <div class="form-container">
      <div class="input-container">
        <label for="name" class="name" required>Наименование товара</label>
        <input
          class="input input_name"
          type="text"
          placeholder="Введите наименование товара"
          id="name"
        />
        <span></span>
        <span class="span-err">Поле является обязательным</span>
      </div>
      <div class="input-container">
        <label for="description" class="description">Описание товара</label>
        <textarea
          class="input input-description"
          type="text"
          placeholder="Введите описание товара"
          id="description"
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
        />
        <span></span>
        <span class="span-err">Поле является обязательным</span>
      </div>
      <div class="input-container">
        <label for="price" class="price-label" required>Цена товара</label>
        <input
          class="input input-price"
          type="text"
          placeholder="Введите цену"
          id="price"
        />
        <span></span>
        <span class="span-err">Поле является обязательным</span>
      </div>
      <button class="btn">Добавить товар</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.add-form__container {
  display: grid;
  grid-gap: 20px;
  .form-title {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
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
    grid-gap: 3px;

    & > label {
      position: relative;
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
      &:focus {
        outline: 1px solid #3f3f3f;
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
