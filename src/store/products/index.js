import { getters } from './getters'
import { mutations } from './mutations'
import { actions } from './actions'

export const productsModule = {
    state: {
        products: {},
        productIds: []
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
}