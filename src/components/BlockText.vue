<template>
  <section id="text" class="text">
    <div class="container">
      <div class="text-content">
        <div class="text-title">
          <h1>Even the all-powerful Pointing has no control about the blind texts.</h1>
        </div>
        <div :class="{active:isActive}" class="main-text">
          <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        </div>
        <div class="text-btn">
          <button @click="isActive=!isActive">Read the Story</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockText",
  data(){
    return{
      isActive: false,
    }
  },
}
</script>

<style scoped>

</style>