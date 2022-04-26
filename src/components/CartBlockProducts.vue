<template >
  <div class="cart-block">
    <div class="container">
      <div v-if="cartItems.length > 0" class="cart-block-content">
        <div class="cart-block-items">
          <cart-block-item
              :cart-products="cartItems"
          />
        </div>
        <div class="cart-block-footer"
             v-if="cartItems.length > 0"
        >
          <div class="totalPrice">
            <span>total: $ {{this.$store.state.fullPrice}} USD</span>
          </div>
          <div class="cart-block-clear">
            <button
                @click="clearCart"
            >
              CLEAR A CART
            </button>
          </div>
        </div>
      </div>
      <div v-else class="cart-block-content-warn">
        <h1>Cart is empty</h1>
        <a href="/#">
          <div>
            <button><span>Back to main page</span></button>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import CartBlockItem from "./CartBlockItem.vue";
import {mapGetters} from "vuex";

export default {
  name: "productCartBlock",
  components: {CartBlockItem},
  computed: mapGetters(['cartItems']),
  methods:{
    clearCart(){
      this.$store.commit('CLEAR_CART')
      this.$store.commit('RENDER_CART')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-block{
  .cart-block-content-warn{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    h1{
      font-size: 35px;
      color: #1D1F2E;
    }
    a{
      width: 30%;
      height: 40px;
      margin-top: 50px;
      div{
        width: 100%;
        height: 100%;
        button{
          width: 100%;
          height: 100%;
          border: none;
          background: #1D1F2E;
          color: white;
          font-size: 20px;
          text-transform: uppercase;
        }
        button:hover{
          box-shadow: 0 0 5px black;
        }
      }
    }
  }
  width: 100%;
  background-color: #A25F4B;
  min-height: 40vh;
  .cart-block-items{
    display: flex;
    flex-direction: column;
  }
  .cart-block-clear{
    display: flex;
    align-items: center;
    justify-content: end;
    width: 30%;
    button{
      border: none;
      border-radius: 0;
      background-color: #1D1F2E;
      color: white;
      height: 40px;
      font-size: 24px;
      font-weight: normal;
      font-style: normal;
    }
    button:hover{
      box-shadow: 0 0 5px black;
    }
  }
  .cart-block-footer{
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 10vh;
    padding-bottom: 50px;
  }
  .totalPrice{
    font-size: 25px;
    text-transform: uppercase;
    width: 30%;
    text-decoration: underline;
  }
}
</style>