<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
<!--  <notifications  position="center center" class="notifications" width="500" />-->
  <router-view keep-alive />
</template>

<style  lang="less">
@import "styles/common.less";

</style>
<style>
.notification-content{
  font-size: 20px;
}
.vue-notification-group{
  top: 5vh;
}
</style>
