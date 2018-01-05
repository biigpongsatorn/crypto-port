<template>
  <div class="stretch" id="app">
    <div class="stretch app--header-container">
      <div class="app--header-nav-logo" @click="$router.push({ name: 'Dashboard' })">
        CryptoPher
      </div>
      <div class="app--header-nav-bar">
        <User/>
      </div>
    </div>
    <div class="stretch">
      <div class="app--side-menu-container">
        <SideMenu/>
      </div>
      <div class="app--router-view-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import User from '@/components/User'
export default {
  name: 'app',
  components: {
    SideMenu,
    User
  }
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
  cursor: pointer;
}
.app--header-nav-bar {
  float: left;
  width: calc(100% - 200px);
  background-color: #242536;
  height: 60px;
}
.app--side-menu-container {
  float: left;
  width: 200px;
  background-color: #242536;
}
.app--router-view-container {
  float: left;
  width: calc(100% - 200px);
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: #f4f4f4;
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
