<template>
  <div class="drawer-bg" :class="{show: active}" @click="$emit('close-drawer')"></div>
  <!-- ====================== DRAWER ====================== -->
  <div class="drawer" :class="{show: active}">
    <div class="drawer-close" @click="$emit('close-drawer')">X</div>

    <div class="drawer-product" v-if="product">
      <img class="drawer-product_image" :src="product.image">
      <h3 class="drawer-product_title">{{ product.name }}</h3>
      <p class="drawer-product_category">{{ product.category }}</p>
      <p class="drawer-product_description">{{ product.description }}</p>
      <h3 class="drawer-product_price">${{ product.price.toFixed(2) }}</h3>

      <div class="cart-total" v-if="product_total">
        <h3>In Cart</h3>
        <h4>{{ product_total }}</h4>
      </div>

      <div class="drawer-buttons">
        <button class="drawer-buttons_add" @click="addToCart()">Add</button>
        <button class="drawer-buttons_remove" @click="removeFromCart()">Remove</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['product', 'active'],
  methods: {
    addToCart() {
      this.$store.commit('addToCart', this.product)
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.product)
    }
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    }
  }
}
</script>

<style lang="scss">
// =================== drawer styles =======================
.drawer-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: none;
  background-color: rgba(0, 0, 0, 0.75);
  transition: display 0.5s;
  z-index: 100;

  &.show {
    display: block;
  }
}

// ====================== DRAWER ======================

.drawer {
  top: 0;
  left: -105vw;
  width: 95vw;
  height: 100vh;
  padding: 15px;
  position: fixed;
  background-color: #fff;
  overflow-y: scroll;
  transition: left .5s;
  z-index: 101;
  
  &.show {
    left: 0;
  }

  &-close {
    right: 10px;
    padding: 10px 15px;
    float: right;
    font-size: 18px;
    border-radius: 50%;
    color: #333;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  }

// ====================== PRODUCT ======================
  &-product {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    &_image {
      width: 320px;
      height: 300px;
    }

    &_title {
      margin: 15px 0 5px;
      text-align: center;
      font-size: 24px;
    }

    &_category {
      color: #333;
    }

    &_description {
      padding: 20px;
      line-height: 1.5rem;
    }

    &_price {
      margin-bottom: 10px;
    }
  }

  &-buttons {
    margin: 15px 0;
    
    button {
      width: 150px;
      margin: 0 5px 50px 5px;
      padding: 10px;
      font-size: 14px;
      font-weight: 700;
      border: none;
      border-radius: 5px;
      color: #fff;
      cursor: pointer;
    }

    &_add {
      background-color: #27ae60;
    }

    &_remove {
      background-color: #e74c3c;
    }
  }
}

// ====================== RESPONSIVE DESIGN ======================

@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>