<template>
  <div class="stretch overview--container">

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          Bitcoin (BTC)
        </div>
        <div class="overview--coin-detail">
          $16,815.10 
          <span class="has-text-success">(11.68%)</span>
        </div>
      </div>
    </div>

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/ripple.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          Ripple (XRP)
        </div>
        <div class="overview--coin-detail">
          $2.91
          <span class="has-text-danger">(-19.18%)</span>
        </div>
      </div>
    </div>

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/ethereum.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          Ethereum (ETH)
        </div>
        <div class="overview--coin-detail">
          $1000.83
          <span class="has-text-success">(19.18%)</span>
        </div>
      </div>
    </div>

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/stellar.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          Stellar (XLM)
        </div>
        <div class="overview--coin-detail">
          $0.77509
          <span class="has-text-success">(12.98%)</span>
        </div>
      </div>
    </div>

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/kyber-network.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          Kyber Network (KNC)
        </div>
        <div class="overview--coin-detail">
          $3.07
          <span class="has-text-danger">(-11.93%)</span>
        </div>
      </div>
    </div>

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/etherparty.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          Etherparty (FUEL)
        </div>
        <div class="overview--coin-detail">
          $0.321365
          <span class="has-text-danger">(-19.79%)</span>
        </div>
      </div>
    </div>

    <div class="overview--li-box">
      <img class="overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/blockmason.png">
      <div class="overview--coin-box">
        <div class="overview--coin-name">
          BlockMason Credit Protocol (BCPT)
        </div>
        <div class="overview--coin-detail">
          $1.15
          <span class="has-text-success">(66.50%)</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CryptoOverview'
}
</script>

<style scoped>
.overview--container {
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.overview--li-box {
  float: left;
  padding: 0 20px;
}
.overview--coin-img {
  float: left;
  margin-top: 5px;
  width: 32px;
  height: 32px;
}
.overview--coin-box {
  float: left;
  padding-left: 10px;
}
.overview--coin-name {
  font-weight: bold;
}
.overview--coin-detail {
  font-size: 11px;
}
</style>

