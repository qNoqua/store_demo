export const mutations = {
  addProductToList(state, product) {
    state.products[product.id] = product;
    state.productsIds.push(product.id);
    updateLocalsorage(state.products, state.productsIds);
  },
  selectedSort(state, option) {
    state.sortDirection = option.value;
  },
  removeProduct(state, payload) {
    state.productsIds = state.productsIds.filter(
      (id) => Number(payload.id) !== id
    );
    const keys = Object.keys(state.products);
    const newProducts = {};
    keys.forEach((key) => {
      if (state.productsIds.includes(Number(key)))
        newProducts[key] = state.products[key];
    });
    state.products = newProducts;
    updateLocalsorage(state.products, state.productsIds);
  },
};
const updateLocalsorage = (products, productsIds) => {
  localStorage.setItem("localProduct", JSON.stringify(products));
  localStorage.setItem("localproductsIds", JSON.stringify(productsIds));
};
