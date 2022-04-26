<template>
  <template v-for="(product, index) in cartProducts" :key="index">
    <div class="cart-block-item">
      <div class="item-image"><img :src="product.img"></div>
      <div class="item-title"><span>{{ product.title }}</span></div>
      <div class="item-price">
        <span v-if="product.newPrice > 0">
          $ {{ product.newPrice }} USD
        </span>
        <span v-else>
          $ {{ product.price }} USD
        </span>
      </div>
      <div class="item-qty">
        <button class="minus-qty"
                @click="minusItemQty(product)"
        >
          <span>-</span>
        </button>
        <span>
          {{ product.qty }}
        </span>
        <button class="plus-qty"
                @click="plusItemQty(product)"
        >
          <span>+</span>
        </button>
      </div>
      <div class="item-total-price">
        <span>$ {{product.totalPrice}} USD</span>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "cartBlockItem",
  props:['cartProducts'],
  methods:{
    minusItemQty(product){
      this.$store.commit('CHANGE_DATA_CART_REMOVE', product)
      if (product.qty < 1){
        this.$store.commit('DELETE_ITEM_IN_CART', product)
      }
      console.log(this.cartProducts)
      this.$store.commit('RENDER_CART')
    },
    plusItemQty(product){
      this.$store.commit('CHANGE_DATA_CART_ADD', product)
      this.$store.commit('RENDER_CART')
    }
  }
}
</script>

<style lang="scss">
.cart-block-item{
  display: flex;
  padding: 20px 0;
  .item-image{
    height: 100%;
    width: 10%;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .item-title{
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  .item-price{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
  .item-qty{
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    > span{
      width: 30px;
      height: 30px;
      background: #1D1F2E;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin: 0 20px;
    }
    button{
      border-radius: 0;
      background-color: #1D1F2E;
      color: white;
      border: none;
      width: 30px;
      height: 30px;
      font-size: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      position: relative;
    }
    button:hover{
      box-shadow: 0 0 5px black;
    }
    .minus-qty{
      span{
        height: 50%;
        width: 50%;
        position: absolute;
        top: 0;
      }
    }
    .plus-qty{
      span{
        height: 50%;
        width: 50%;
        position: absolute;
        top: -4%;
      }
    }
  }
  .item-total-price{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 25px;
  }
}
</style>