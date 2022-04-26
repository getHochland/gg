<template>
  <main-page v-if="$route.name === 'main'"></main-page>
  <cart-page v-if="$route.name === 'cart'"
             @click="swapPage()"
  ></cart-page>
</template>

<script>

import CartPage from "./components/CartPage.vue";
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: { MainPage, CartPage},
  created() {
    this.$store.commit('CREATE_CART')
    this.$store.commit('RENDER_CART')
  },
  methods:{
    swapPage(){
      if (this.$store.state.cartItems.length === 0){
        this.$route.path = '/'
      }
    }
  }
}
</script>

<style scoped>

</style>