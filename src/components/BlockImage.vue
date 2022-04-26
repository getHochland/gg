<template>
  <section id="block-image" class="block-image">
    <div class="image">
      <img src="images/image.png">
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockImage"
}
</script>

<style lang="scss" scoped>
  .block-image{
    margin: 150px 0;
    .image{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
</style>