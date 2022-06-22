import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const productsModule = {
    state: {
        product: JSON.parse(localStorage.getItem('localProduct')) || {},
        productsIds: JSON.parse(localStorage.getItem('localproductsIds')) || []
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
}