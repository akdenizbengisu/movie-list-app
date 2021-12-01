import { createStore } from 'vuex';
import favorites from './modules/favorites.js'

const store = createStore({
  modules: {
    favorites,
  },
});

export default store;