import { createStore } from 'vuex';

// ======================= LOCAL STORAGE =======================
function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export default createStore({
  // ======================= STATE =======================
  state: {
    cart: []
  },
  // ======================= GETTERS =======================
  getters: {
    productQuantity: state => product => {
      const item = state.cart.find(i => i.id === product.id)

      if(item) return item.quantity
      else return null 
    },
    cartItems: state => {
      return state.cart
    },
    totalPrice: state => {
      return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
    }
  },
  // ======================= MUTATIONS =======================
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if(item) {
        item.quantity++
      } else {
        state.cart.push({...product, quantity: 1})
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart(state, product) {
      let item = state.cart.find(i => i.id === product.id)
      if(item) {
        if(item.quantity > 1) {
          item.quantity--
        } else {
          state.cart = state.cart.filter(i => i.id !== product.id)
        }
      }
      updateLocalStorage(state.cart)
    },
    updateCartFromStorage(state) {
      const cart = localStorage.getItem('cart')
      if(cart) {
        state.cart = JSON.parse(cart)
      }
    }
  }
})
