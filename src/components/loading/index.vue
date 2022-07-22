<template>
  <div class="loading-module flex flex-ac flex-center" v-if="loadingShow">
    <div class="bg"></div>
    <div class="content">
      <i class="iconfont-nav">&#xe891;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props:{
    loadingShow:{
      required:false,
      type: Boolean,
      default:false,
    }
  },
}
</script>

<style scoped lang="less">

@keyframes rotate{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
.loading-module{
  .bg{
    background: #000000;
    opacity: .5;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
  }
  .content{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    animation:rotate 3s linear infinite;
    z-index: 10;
    i{
      color: #ffffff;
      font-size: 40px;
    }
  }
}

</style>