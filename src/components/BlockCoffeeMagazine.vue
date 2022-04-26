<template>
  <section id="coffee-magazine" class="coffee-magazine">
    <div class="container">
      <div class="coffee-magazine-title title">
        <span>Buy 2 mugs and get a coffee magazine free</span>
      </div>
      <div class="coffee-magazine-content">
        <div class="coffee-magazine-content-images">
          <div class="coffee-magazine-content-images-left">
            <img src="../../public/images/Coffee-mag-pict1.png"/>
          </div>
          <div class="coffee-magazine-content-images-right">
            <img src="../../public/images/Coffee-mag-pict2.png"/>
            <img src="../../public/images/Coffee-mag-pict3.png"/>
          </div>
        </div>
        <div class="coffee-magazine-content-text">
          <h2>Premium Offer</h2>
          <h1>Get our Coffee Magazine</h1>
          <p>The most versatile furniture system ever created. Designed to fit your life.</p>
          <button><span>Start Shopping</span></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockCoffeeMagazine"
}
</script>

<style lang="scss" scoped>
.coffee-magazine-content{
  display: flex;
  max-height: 300px;
  margin: 0 150px;
  .coffee-magazine-content-images{
    display: flex;
    width: 50%;
    .coffee-magazine-content-images-left{
       width: 65%;

      img{
        width: 90%;
        height: 100%;
        object-fit: cover;
      }
    }
    .coffee-magazine-content-images-right{
      display: flex;
      flex-direction: column;
      width: 35%;
      img:first-child{
        padding-bottom: 30px;
      }
      img{
        width: 70%;
        height: 50%;
        object-fit: cover;
      }
    }
  }
  .coffee-magazine-content-text{
    color: #1D1F2E;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    margin-left: 50px;
    h2{
      font-size: 16px;
      font-weight: normal;
      text-transform: uppercase;
    }
    h1{
      font-size: 40px;
      font-weight: normal;
      line-height: 50px;
      width: 50%;
    }
    p{
      font-size: 20px;
      width: 60%;
      color: #1D1F2EB2;
    }
    button{
      height: 40px;
      width: 30%;
      border: none;
      background: #1D1F2E;
      color: white;
      font-size: 16px;
      text-transform: uppercase;
    }
    button:hover{
        box-shadow: 0 0 5px black;
    }
  }
}
</style>