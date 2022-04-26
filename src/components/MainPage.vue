<template>
  <block-header/>
  <div id="main" class="main">
      <block-banner/>
      <block-text/>
      <block-products/>
      <block-coffee-magazine/>
      <block-image/>
      <block-history/>
    <div id="footer" class="footer">
      <block-subscribe/>
      <block-contacts/>
    </div>
  </div>
</template>

<script>
import BlockProducts from "./BlockProducts.vue";
import BlockHeader from "./BlockHeader.vue";
import BlockBanner from "./BlockBanner.vue";
import BlockText from "./BlockText.vue";
import BlockCoffeeMagazine from "./BlockCoffeeMagazine.vue";
import BlockImage from "./BlockImage.vue";
import BlockHistory from "./BlockHistory.vue";
import BlockSubscribe from "./BlockSubscribe.vue";
import BlockContacts from "./BlockContacts.vue";
export default {
  name: "MainPage",
  components: {BlockContacts, BlockSubscribe, BlockHistory, BlockImage, BlockCoffeeMagazine, BlockText, BlockBanner, BlockHeader, BlockProducts},
  data(){
    return{
    }
  },
}
</script>

<style scoped>

</style>