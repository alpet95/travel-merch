<template>
  <div class="total-price">
    <h3>Cart Total: ${{ totalPrice.toFixed(2) }}</h3>
    <button class="cart-item-button">Pay By Credit Card</button>
  </div>
</template>

<script>
export default {
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    }
  }
}
</script>

<style>
.cart-item-button {
  width: 150px;
  margin: 10px 0;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  background-color: #27ae60;
  color: #fff;
  cursor: pointer;
}
</style>