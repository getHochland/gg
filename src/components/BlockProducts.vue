<template>
  <section id="products" class="products">
    <div class="container">
      <div class="products-title title"><span>Products</span></div>
      <div class="products-block">
        <template v-for="product in allProducts"
                  :key="product.id">
          <products-item
              :img="product.img"
              :new-price="product.newPrice"
              :price="product.price"
              :qty="product.qty"
              :title="product.title"
          >
            <button class="buy-btn"
                    @click="addToCart(product)"
            >
              <img src="../../public/images/Cart.svg" alt="cart">
              <span>in cart</span>
            </button>
          </products-item>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
import ProductsItem from "./ProductsItem.vue";
import {mapGetters} from 'vuex'
export default {
  name: "productsBlock",
  components: { ProductsItem},
  computed: mapGetters(['allProducts', 'cartItems']),
  methods:{
    addToCart(product){
      if (this.checkDouble(product)){
        this.$store.commit('CHANGE_DATA_CART_ADD', product)
        this.$store.commit('RENDER_CART')
      }
      else {
        this.$store.commit('ADD_TO_CART', product)
        this.$store.commit('RENDER_CART')
      }
    },
    checkDouble(product){
      let checkId = false
      this.cartItems.forEach(function (item){
        if (product.id === item.id){
          checkId = true
        }
      })
      return checkId
    },
  },
}
</script>

<style lang="scss">
.products-block{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
}
</style>