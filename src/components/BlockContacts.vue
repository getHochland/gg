<template>
  <section id="contacts" class="contacts">
    <div class="container">
      <div class="contacts-content">
        <div class="block-logo">
          <img src="images/logo.svg" alt="logo">
          <p>Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
          <span>CoffeeStyle Inc. © 1996</span>
        </div>
        <div class="block-menu">
          <h1>Menu</h1>
          <span>Home</span>
          <span>Our Products</span>
          <span>About</span>
          <span>Contact</span>
          <span>Styleguide</span>
        </div>
        <div class="block-follow">
          <h1>Follow Us</h1>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Pinterest</span>
          <span>Twitter</span>
        </div>
        <div class="block-contact">
          <h1>Contact Us</h1>
          <span>We’re Always Happy to Help</span>
          <a href="">us@coffeestyle.io</a>
          <span>Powered by Webflow</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockContacts"
}
</script>

<style lang="scss" scoped>
.contacts{
  margin-top: 150px;
}
.contacts-content{
  display: flex;
  div{
    width: 25%;
    display: flex;
    flex-direction: column;
    img{
      width: 30%;
      padding-bottom: 25px;
    }
  }
  span{
    font-size: 16px;
    line-height: 25px;
    padding-bottom: 10px;
    color: #1D1F2EB2;
  }
  h1{
    color: #1D1F2E;
    font-size: 16px;
    text-transform: uppercase;
    padding-bottom: 25px;
  }
  p{
    font-size: 16px;
    line-height: 25px;
    padding-bottom: 10px;
    color: #1D1F2EB2;
  }
  .block-logo{
    span{
      color: #1D1F2E4D;
      padding-top: 100px;
    }
  }
  .block-contact{
    span:last-child{
      color: #1D1F2E4D;
      padding-top: 95px;
    }
  }
  a{
    color: #1D1F2E;
    font-size: 30px;
  }
}
</style>