export const getters = {
    products (state) {
        const items = state.productsIds.map(id => state.products[id])
        if (state.sortDirection === '') {
            return items
        }
        if (state.sortDirection === 'default') {
            return items.reverse()
        }
        return items.sort((a, b) => {
            if (state.sortDirection === 'increase') {
                return a.price < b.price ? -1 : 1
            }
            return b.price < a.price ? -1 : 1
        })
        
    }
}