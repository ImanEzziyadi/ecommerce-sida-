import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { id: '1', name: 'Product 1', price: 200, description: 'smal size'},
      { id: '2', name: 'Product 2', price: 299, description: 'big size' },
      { id: '3', name: 'Product 3', price: 500, description: 'XL size' },
      { id: '4', name: 'Product 4', price: 100, description: 'big size'},
      { id: '5', name: 'Product 5', price: 234, description: 'smal size'},
      { id: '6', name: 'Product 6', price: 999, description: 'smal size' },
      { id: '7', name: 'Product 7', price: 222, description: 'big size' },
      { id: '8', name: 'Product 8', price: 200, description: 'smal size' },
      { id: '9', name: 'Product 9', price: 300, description: 'XL size' },
      { id: '10', name: 'Product 10', price: 400, description: 'smal size' },
      { id: '11', name: 'Product 11', price: 500 , description: 'big size'},
      { id: '12', name: 'Product 12', price: 600, description: 'smal size' },
      { id: '13', name: 'Product 13', price: 700 , description: 'XL size'},
      { id: '14', name: 'Product 14', price: 800, description: 'smal size' },
      { id: '15', name: 'Product 15', price: 900 , description: 'big size'}
    ],
    product: null,
    comp: 'List',
    searchVal: ''
   },
   
  getters: {
    counteLink : state => {
      return state.link.lenght
    },

    taxedProducts: state => {
      let taxedProducts = state.products.map(product => {
        return {
          ...product,
          name: product.name + ' + tax',
          price: Math.round(product.price + product.price * 0.2)
        }
      })

      return taxedProducts
    },
    comp: state => state.comp,
    product: state => state.product,
    filteredProducts: (state, getters) => {
      // return state.products.filter(product => product.name.match(state.searchVal))
      return getters.taxedProducts.filter(product => product.name.toLowerCase().match(state.searchVal.toLowerCase()))
    }
  },
  mutations: {
   
    ADD: (state, amount) => {
      state.products.forEach(product => {
        product.price += amount
      })
    },
    SUB: (state, amount) => {
      state.products.forEach(product => {
        product.price -= amount
      })
    },
    CHANGE_COMP: (state, payload) => {
      state.comp = payload
    },
    SET_PRODUCT: (state, id) => {
      let prod = state.products.filter(p => p.id === id)[0]
      state.product = {
        ...prod,
        taxPrice: Math.round(prod.price + prod.price * 0.2)
      }
    },
    SEARCH: (state, val) => {
      state.searchVal = val
    }

  },
  actions: {
    subAsync: ({ commit }, amount) => {
      setTimeout(() => {
        commit('SUB', amount)
      }, 3000)
    },
    addToPrice: ({commit}, amount) => {
      commit('ADD', amount)
    },
    changeComp: ({commit}, component) => {
      commit('CHANGE_COMP', component)
    },
    getProduct: ({commit}, id) => {
      commit('SET_PRODUCT', id)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
    }
  }
})
