<template>
  <!-- // Maximun coin : 7 -->
  <div class="coin-overview--container">
    
    <div class="coin-overview--li-box" v-for="i in 5" :key="i">
      <img class="coin-overview--coin-img" src="https://s2.coinmarketcap.com/static/img/coins/32x32/1.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          Bitcoin (BTC)
        </div>
        <div class="coin-overview--coin-detail">
          $16,815.10 
          <span class="has-text-success">(11.68%)</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CoinOverViewList'
}
</script>

<style scoped>
.coin-overview--container {
  float: left;
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.coin-overview--li-box {
  float: left;
  padding: 0 20px;
}
.coin-overview--coin-img {
  float: left;
  margin-top: 5px;
  width: 32px;
  height: 32px;
}
.coin-overview--coin-box {
  float: left;
  padding-left: 10px;
}
.coin-overview--coin-name {
  font-weight: bold;
}
.coin-overview--coin-detail {
  font-size: 11px;
}
</style>
