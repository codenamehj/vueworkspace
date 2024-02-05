// store.js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate"

export default createStore({
  state() {
    return {
      cart: [
        {
          product_id: 1,
          product_name: '아이폰 거치대',
          category: 'A'
        }
      ],
      count: 0
    }
  },
  getters: {
    cartCount: (state) => {
      return state.cart.length;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    addProduct(state, info) {
      state.cart.push(info);
    }
  },
  actions: {
    addProduct(context, info) {
      context.commit('addProduct', info);
      setTimeout(() => {
        context.commit('increment');
      }, 1000);
    }
  },
  plugins: [
    createPersistedState()
  ]
})