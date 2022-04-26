<template>
  <div id="header" class="header">
    <div class="container">
      <div class="header-content">
        <a class="logo-link" href="/#">
          <div class="logo">
            <img src="images/logo.svg" alt="logo">
          </div>
        </a>
        <nav class="header-content-navigation">
          <ul>
            <li v-scroll-to="'#header'"><a href="#">Home</a></li>
            <li v-scroll-to="'#products'"><a href="#">Our Products</a></li>
            <li v-scroll-to="'#text'"><a href="#">Blog</a></li>
            <li v-scroll-to="'#coffee-magazine'"><a href="#">Magazine</a></li>
            <li v-scroll-to="'#contacts'"><a href="#">Contact</a></li>
            <li v-scroll-to="'#history'"><a href="#">Styleguide</a></li>
          </ul>
        </nav>
        <a v-if="this.$store.state.cartItems.length > 0 " class="cart-btn-link" href="#/cart">
          <cart-btn/>
        </a>
          <div class="cart-btn-link"
               v-else
               @click="showMessageAnime"
          >
            <cart-btn/>
            <div>
              <span class="cart-btn-message" :class="hideMessage" v-show="showMessage">cart is empty</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartBtn from "./CartBtn.vue";
export default {
  name: "BlockHeader",
  components: {CartBtn},
  data(){
    return{
      hideMessage: '',
      showMessage: false,
    }
  },
  methods:{
    showMessageAnime(){
      this.showMessage = true
      setTimeout(() =>{
        this.hideMessage = 'hide'
      }, 1000)
      this.hideMessage = ''

    }
  }

}
</script>

<style lang="scss" scoped>
.cart-btn-message{
  display: flex;
  justify-content: center;
  color: red;
  text-transform: uppercase;
  opacity: 1;
  transition: 0.5s;
  &.hide{
    opacity: 0;
  }
}
</style>