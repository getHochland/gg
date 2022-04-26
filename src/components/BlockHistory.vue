<template>
  <section id="history" class="history">
    <div class="container">
      <div class="history-title title">
        <span>
          Behind the mugs, lifestyle stories
        </span>
      </div>
      <div class="history-content">
        <div class="history-block">
          <div class="history-block-image">
            <img src="../../public/images/history1.png" alt="history1">
          </div>
          <div class="history-block-text">
            <h1>Health Check: why do I get a headache when I haven’t had my coffee?</h1>
            <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <span>October 9, 2018</span>
          </div>
        </div>
        <div class="history-block">
          <div class="history-block-image">
            <img src="../../public/images/history2.png">
          </div>
          <div class="history-block-text">
            <h1>How long does a cup of coffee keep you awake?</h1>
            <p>It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</p>
            <span>October 9, 2018</span>
          </div>
        </div>
        <div class="history-block">
          <div class="history-block-image">
            <img src="../../public/images/history3.png">
          </div>
          <div class="history-block-text">
            <h1>Recent research suggests that heavy coffee drinkers may reap health benefits.</h1>
            <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <span>October 9, 2018</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlockHistory"
}
</script>

<style lang="scss" scoped>
.history{
  margin-bottom: 150px;
  .history-content{
    display: flex;
    justify-content: space-between;
    .history-block{
      width: 25%;
      .history-block-image{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .history-block-text{
        h1{
          font-size: 25px;
          line-height: 35px;
          font-weight: normal;
          padding-top: 10px;
          color: #1D1F2E;
        }
        p{
          font-size: 20px;
          line-height: 30px;
          padding: 10px 0;
          color: #1D1F2EB2;
        }
        span{
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>