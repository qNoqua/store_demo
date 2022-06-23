import { createStore } from 'vuex';
import { productsModule } from '@/store/products'

const store = createStore({
  modules: {
    productsModule,
  },
});

export default store
