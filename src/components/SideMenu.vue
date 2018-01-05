<template>
  <div class="stretch side-menu--container">
    <div class="side-menu--li" 
    :class="{'side-menu--li-active': currentRoute === 'Dashboard'}"
    @click="changeTab('Dashboard')">
      <span class="icon">
        <i class="fa fa-area-chart"></i>
      </span>
      Dashboard
    </div>

    <div class="side-menu--li"
    :class="{'side-menu--li-active': currentRoute === 'Balance'}"
    @click="changeTab('Balance')">
      <span class="icon">
        <i class="fa fa-usd"></i>
      </span>
      Balance
    </div>

    <div class="side-menu--li"
    :class="{'side-menu--li-active': currentRoute === 'Portfolio'}"
    @click="changeTab('Portfolio')">
      <span class="icon">
        <i class="fa fa-line-chart"></i>
      </span>
      Portfolio
    </div>

    <div class="side-menu--li"
    :class="{'side-menu--li-active': currentRoute === 'SupportUs'}"
    @click="changeTab('SupportUs')">
      <span class="icon has-text-danger">
        <i class="fa fa-heart"></i>
      </span>
      Support Us
    </div>

    <div class="side-menu--li"
    :class="{'side-menu--li-active': currentRoute === 'Settings'}"
    @click="changeTab('Settings')">
      <span class="icon">
        <i class="fa fa-cogs"></i>
      </span>
      Settings
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideMenu',
  computed: {
    currentRoute () {
      return this.$route.name
    }
  },
  methods: {
    changeTab (name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style scoped>
.icon {
  margin-right: 13px;
}
.side-menu--container {
  padding-top: 1px;
  height: calc(100vh - 60px);
}
.side-menu--li {
  color: #fff;
  height: 50px;
  padding: 16px;
}
.side-menu--li:hover {
  cursor: pointer;
  background-color: #151524;
}
.side-menu--li-active {
  background-color: #151524;
  border-left: 5px solid #ffb946;
}
</style>

