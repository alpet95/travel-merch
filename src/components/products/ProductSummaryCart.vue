<template>
  <div class="card">
    <img class="card_image" :src="product.image">
    <h3 class="card_title">{{ product.name }}</h3>
    <h5 class="card_price">Price: ${{ product.price.toFixed(2) }}</h5>
    <button class="card_button" @click="$emit('view-product', product)">Pick It</button>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style lang="scss">
// ====================== CART ======================
.card {
  width: 70%;
  height: 350px;
  margin: 10%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 3px #444;
  background-color: #fff;
  transition: scale 0.3s linear;

  &:hover {
    transform: scale(1.02);
  }

  &_image {
    width: 200px;
    height: 170px;
    object-fit: fill;
  }

  &_title {
    margin-top: 10px;
  }

  &_price {
    margin-top: 5px;
    color: #444;
  }

  &_button {
    margin-top: 15px;
    padding: 10px;
    font-size: 15px;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    background-color: rgb(79, 160, 187);
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s linear;

    &:hover {
      background-color: rgba(79, 160, 187, 0.75);
    }
  }
}

// ====================== RESPONSIVE DESIGN ======================

@media (min-width: 500px) {
  .card {
    width: 350px;
    margin: 10px;
  }
}
</style>

