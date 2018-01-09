<template>
  <div class="overview--container">
    <div class="overview--slide">
      <CoinOverViewList/>
      <CoinOverViewList/>
    </div>
  </div>
</template>

<script>
import CoinOverViewList from '@/components/CoinOverViewList'
export default {
  name: 'CryptoOverview',
  components: {
    CoinOverViewList
  }
}
</script>

<style scoped>
@keyframes moveSlideshow {
  100% { 
    transform: translateX(-50%);  
  }
}
.overview--container {
  transform: translate3d(0, 0, 0); /* Hey browser, use your GPU */
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
  margin-bottom: 20px;
  position: relative;
  padding: 10px;
  overflow: hidden;
}
.overview--slide {
  transform: translate3d(0, 0, 0); /* Hey browser, use your GPU */
  height: 50px;
  width: 200%;
  position: absolute;
  top: 10px;
  left: 0;
  animation: moveSlideshow 12s linear infinite !important;
}
</style>

