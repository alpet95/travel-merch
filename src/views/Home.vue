<template>
  <!-- ====================== PRODUCTS ====================== -->
  <section class="products">
    <ProductDescriptionDrawer
      :product="product"
      :active="active.product_drawer"
      v-on:close-drawer="closeDrawer()"
    />
    <h2 class="products_heading">BACKPACKING READY</h2>
    <p class="products_subheading">For multi destination backpacking trips, you’ll want to pack light but with everything you need to stay healthy and be comfortable. We’ve pulled together the ultimate kit list for backpackers, let us help you get properly packed.</p>
    <!-- ====================== CARDS ====================== -->
    <div class="cards">
      <ProductSummaryCart
        v-for="product in items"
        :key="product.id"
        :product="product"
        v-on:view-product="vueProduct($event)"
      />
    </div>
  </section>
</template>

<script>
import items from '../data/items.js';
import ProductSummaryCart from '../components/products/ProductSummaryCart';
import ProductDescriptionDrawer from '../components/products/ProductDescriptionDrawer';

export default {
  name: 'Home',
  components: {
      ProductSummaryCart,
      ProductDescriptionDrawer
  },
  data() {
    return {
      items,
      product: null,
      active: {
        product_drawer: false
      }
    }
  },
  methods: {
    vueProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
    },
    closeDrawer() {
      this.active.product_drawer = false;
    }
  }
}
</script>

<style lang="scss">
.products {
  background: #f5f6fa;

  &_heading {
    margin: 15px 0 10px;
    font-weight: bold;
  }

  &_subheading {
    max-width: 900px;
    margin: 0 auto;
    font-size: 15px;
    color: #444;
  }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
</style>
