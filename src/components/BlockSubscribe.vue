<template>
  <section id="subscribe" class="subscribe">
    <div class="container">
      <div class="subscribe-title title">
        <span>Sign up and get free coffee bags</span>
      </div>
      <div class="subscribe-text">
        <span>Coffee Updates</span>
      </div>
      <a class="subscribe-link" href="https://coffe.io/">
        <div class="subscribe-btn">
          <button>subscribe</button>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockSubscribe"
}
</script>

<style lang="scss" scoped>
.subscribe{
  padding: 100px 0;
  .subscribe-title{
    margin: 0;
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  color: white;
  span:before, :after{
    background: #D2D2D51A;
  }
  background: #1D1F2E;
  .subscribe-text{
    font-size: 45px;
    line-height: 50px;
    margin: 30px 0;
  }
  .subscribe-link{
    width: 10%;
    .subscribe-btn{
      width: 100%;
      button{
        height: 60px;
        width: 100%;
        border: none;
        background: white;
        font-size: 16px;
        line-height: 20px;
        text-transform: uppercase;
      }
      button:hover{
        box-shadow: 0 0 5px black;
      }
    }
  }

}
</style>