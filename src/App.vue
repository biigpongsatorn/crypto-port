<template>
  <div class="stretch" id="app">
    <!-- <router-view/> -->
    <div class="stretch app--header-container">
      <div class="app--header-nav-logo">
        CryptoPher
      </div>
      <div class="app--header-nav-bar">
        <!-- component user nav bar -->
      </div>
    </div>
    <div class="stretch">
      <div class="app--side-menu-container">

      </div>
      <div class="app--router-view-container">
        <!--  router-view -->
        <div class="app--top-bar-container">
          Hello
        </div>
        <div class="stretch">
          <div style="height: 1000px;background-color: red;">
            World
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.app--header-container {
  color: #fff;
  height: 60px;
	background-color: #242536;
}
.app--header-nav-logo {
  color: #fff;
  text-align: center;
  float: left;
  width: 200px;
  background-color: #151524;
  height: 60px;
  font-size: 21px;
  font-weight: bold;
  padding: 14px;
}
.app--header-nav-bar {
  float: right;
  width: calc(100% - 200px);
  background-color: #242536;
}
.app--side-menu-container {
  float: left;
  width: 200px;
  height: calc(100vh - 60px);
  background-color: #242536;
}
.app--router-view-container {
  float: left;
  width: calc(100% - 200px);
  height: calc(100vh - 60px);
  overflow: auto;
}
.app--top-bar-container {
  float: left;
  width: 100%;
  height: 60px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06);
}
</style>
