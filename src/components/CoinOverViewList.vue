<template>
  <!-- // Maximun coin : 7 -->
  <div class="coin-overview--container">
    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/bitcoin.png">
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

    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/ripple.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          Ripple (XRP)
        </div>
        <div class="coin-overview--coin-detail">
          $2.91
          <span class="has-text-danger">(-19.18%)</span>
        </div>
      </div>
    </div>

    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/ethereum.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          Ethereum (ETH)
        </div>
        <div class="coin-overview--coin-detail">
          $1000.83
          <span class="has-text-success">(19.18%)</span>
        </div>
      </div>
    </div>

    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/stellar.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          Stellar (XLM)
        </div>
        <div class="coin-overview--coin-detail">
          $0.77509
          <span class="has-text-success">(12.98%)</span>
        </div>
      </div>
    </div>

    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/kyber-network.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          Kyber Network (KNC)
        </div>
        <div class="coin-overview--coin-detail">
          $3.07
          <span class="has-text-danger">(-11.93%)</span>
        </div>
      </div>
    </div>

    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/etherparty.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          Etherparty (FUEL)
        </div>
        <div class="coin-overview--coin-detail">
          $0.321365
          <span class="has-text-danger">(-19.79%)</span>
        </div>
      </div>
    </div>

    <div class="coin-overview--li-box">
      <img class="coin-overview--coin-img" src="https://files.coinmarketcap.com/static/img/coins/32x32/blockmason.png">
      <div class="coin-overview--coin-box">
        <div class="coin-overview--coin-name">
          BlockMason Credit Protocol (BCPT)
        </div>
        <div class="coin-overview--coin-detail">
          $1.15
          <span class="has-text-success">(66.50%)</span>
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
