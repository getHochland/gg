<template>
  <div class="cart-btn-block">
    <button class="cart-btn">
      <img src="../../public/images/Cart.svg">
      <span class="cart-text">cart</span>
      <div class="cart-quantity">
        <span>{{QtyInCart}}</span>
      </div>
    </button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Cart-btn",
  computed: {
    ...mapGetters(['cartItems']),
    QtyInCart(){
      let qty = 0;
      this.cartItems.forEach(function (item){
        qty = qty + item.qty
      })
      return qty
    }
  },
}
</script>

<style lang="scss">

  .cart-btn{
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 40%;
    border: none;
    background: none;
    border-bottom: 2px solid #A25F4B4D;
    height: 100%;
    padding-bottom: 5px;
    span{
      padding: 0 10px;
      font-size: 16px;
      text-transform: uppercase;
    }
    .cart-quantity{
      border-radius: 50%;
      background: #1D1F2E;
      height: 18px;
      width: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      span{
        font-size: 15px;
      }
    }
  }
</style>