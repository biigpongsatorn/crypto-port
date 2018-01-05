<template>
  <div class="user--container">
    <img class="user--img" src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/25442821_10210297563811359_6790272225355486403_n.jpg?oh=2875ac9b740043a045fc5d04976130b1&oe=5AEBDA03">
  </div>
</template>

<script>
export default {
  name: 'User'
}
</script>

<style scoped>
.user--container {
  float: right;
  height: 60px;
  padding: 12px 20px;
}
.user--img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.user--container:hover {
  cursor: pointer;
  background-color: #151524;
}
</style>

