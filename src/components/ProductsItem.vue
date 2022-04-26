<template>
  <div class="product-item">
    <div class="item-image">
      <img :src="img">
    </div>
    <div class="item-title">
      <span>{{title}}</span>
    </div>
    <div class="item-all-price">
      <template v-if="newPrice > 0">
        <span class="new-price">$ {{newPrice}} USD</span>
        <span class="old-price">$ {{price}} USD</span>
      </template>
      <template v-else>
        <span class="price">$ {{price}} USD</span>
      </template>
    </div>
    <div class="item-buy">
        <slot></slot>
      <div class="buy-qty">
        <span>{{qty}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsItem",
  props:['img', 'title', 'newPrice', 'price', 'qty'],

}
</script>

<style lang="scss">
.product-item{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 28%;
  margin: 0 2% 35px 2%;
  color: #1D1F2E;
  .item-image{
    width: 100%;
    height: 55vh;
    margin-bottom: 35px;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .item-title{
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 30px;
  }
  .item-all-price{
    text-align: center;
    margin-bottom: 20px;
    font-size: 18px;
    .new-price{
      color: #A25F4B;
      padding-right: 10px;
    }
    .price{
      color: #1D1F2EB2;
    }
    .old-price{
      color: #1D1F2EB2;
      text-decoration-line: line-through;
    }
  }
  .item-buy{
    text-align: center;
    border-bottom: 2px solid #A25F4B4D;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    .buy-btn{
      background: none;
      border: none;
      text-transform: uppercase;
      padding: 2px 0;
      span{
        padding: 0 10px;
        font-size: 16px;
      }
    }
    .buy-qty{
      background: #1D1F2E;
      border-radius: 50%;
      height: 16px;
      width: 16px;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        line-height: 10px;
        text-align: center;
        font-size: 15px;
      }
    }
  }
}
</style>