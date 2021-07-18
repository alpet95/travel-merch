<template>
  <!-- ====================== CART ====================== -->
  <section class="cart">
    <h2 class="cart_heading">YOUR CART</h2>
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <CartSummaryPaymentCard
    />
  </section>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'

export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard
  },
  computed: {
    products() {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style lang="scss">
.cart {
  background: #f5f6fa;

  &_heading {
    margin: 15px 0 10px;
    font-weight: bold;
  }
}
</style>