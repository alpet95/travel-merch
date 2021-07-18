<template>
  <!-- ====================== HEADER ====================== -->
  <header class="app-header">
    <div class="app-header_logo">
      <img :src="appLogo" alt="logo">
      <span>Travel Merch</span>
    </div>

    <nav class="app-header_navbar">
      <router-link :class="{active: $route.name === 'Home'}" to="/"><img :src="home" class="home-icon">Home</router-link>
      <router-link :class="{active: $route.name === 'Cart'}" to="/cart"><img :src="cart" class="cart-icon">Cart</router-link>
    </nav>

  </header>
  <!-- ====================== MAIN ====================== -->
  <router-view />
  <!-- ====================== FOOTER ====================== -->
  <footer class="app-footer">
      <span class="app-footer_copyright">Copyright &copy; 2021 Alpet95</span>
  </footer>
</template>

<script>
import appLogo from './assets/app-logo.png'
import home from './assets/home.svg'
import cart from './assets/cart.svg'

export default {
  name: 'App',
  data() {
    return {
      appLogo,
      home,
      cart
    }
  },
  mounted() {
    this.$store.commit('updateCartFromStorage');
  }
}
</script>

<style lang="scss">
// ====================== FONTS ======================
@import url('https://fonts.googleapis.com/css2?family=Bitter&display=swap');

// ====================== CORE STYLES ======================
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-decoration: none;
  color: #000;
}

html {
  overflow-x: hidden;
}

body {
  background-color: #fff;
}

section {
  padding: 0.5rem 7% 1rem;
  min-height: 100vh;
}

.cart-icon {
  width: 20px;
  height: auto;
}

.home-icon {
  width: 20px;
  height: auto;
}

#app {
  font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

// ====================== HEADER ======================

.app-header {
  width: 100%;
  padding: 1.5rem 7%;
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px rgba(#000, 0.25);

  &_logo {
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      width: 40px;
      height: 40px;
    }

    & span {
      font-weight: 600;
      margin-left: 8px;
    }
  }

// ====================== NAVBAR ======================

  &_navbar {
    display: flex;
    justify-content: center;
    align-items: center;

    & a {
      display: inline-block;
      width: 50px;
      line-height: 1.2;
      margin: 0 3px;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;

      &.active {
        color: #4fa0bb;
      }
    }
  }
}

// ====================== FOOTER ======================

.app-footer {
  width: 100%;
  height: 75px;
  box-shadow: 0 0 5px rgba(#000, 0.25);

  &_copyright {
    text-align: center;
    font-size: 14px;
    line-height: 75px;
    vertical-align: middle;
    font-weight: bold;
    background-color: #fff;
    color: #000;
  }
}
</style>
