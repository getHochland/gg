<template>
  <block-header/>
  <div id="main" class="main">
    <products-cart-block/>
  </div>
  <div id="footer" class="footer">
    <block-subscribe/>
    <block-contacts/>
  </div>
</template>

<script>
import BlockHeader from "./BlockHeader.vue";
import ProductsCartBlock from "./CartBlockProducts.vue";
import BlockSubscribe from "./BlockSubscribe.vue";
import BlockContacts from "./BlockContacts.vue";
export default {
  name: "CartPage",
  components: {ProductsCartBlock, BlockHeader, BlockSubscribe, BlockContacts}
}
</script>

<style scoped>

</style>