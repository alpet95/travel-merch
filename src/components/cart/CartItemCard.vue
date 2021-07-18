<template>
  <div class="cart-item">
    <div class="cart-item-wrapper">
      <img class="cart-item-image" :src="product.image">
      <h4>{{ product.name }}</h4>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: ${{ productCost.toFixed(2) }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    productCost() {
      return this.product.price * this.product.quantity;
    }
  }
}
</script>

<style lang="scss">
.cart-item {
  max-width: 900px;
  margin: 15px auto;
  padding: 10px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 5px #ddd;
  background-color: #fff;

  &-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
  }

  &-image {
    width: 85px;
    height: 65px;
    object-fit: fill;
  }
}

// ====================== RESPONSIVE DESIGN ======================

@media (max-width: 600px) {
  .cart-item-wrapper {
    flex-direction: column;
  }

  .cart-item-image {
    margin-bottom: 10px;
  }
}
</style>