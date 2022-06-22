export const mutations = {
    addProductToList(state, product) {
        state[product.id] = product
        state.productsIds.push(product.id)
        updateLocalsorage(state.product, state.productsIds)
    }
}
const updateLocalsorage = (product, productsIds) => {
    localStorage.setItem('localProduct', JSON.stringify(product))
    localStorage.setItem('localproductsIds', JSON.stringify(productsIds))
}