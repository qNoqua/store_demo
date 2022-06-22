export const mutations = {
    addProductToList(state, product) {
        state.products[product.id] = product
        state.productsIds.push(product.id)
        updateLocalsorage(state.products, state.productsIds)
    }
}
const updateLocalsorage = (products, productsIds) => {
    localStorage.setItem('localProduct', JSON.stringify(products))
    localStorage.setItem('localproductsIds', JSON.stringify(productsIds))
}