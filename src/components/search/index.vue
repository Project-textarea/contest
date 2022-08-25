<template>
  <section class="search-container">
    <div class="search-wrapper">
      <div class="input-container flex flex-zBetween">
        <div class="input-text flex flex-zBetween">
          <div class="iconfont">&#xe86e;</div>
          <input type="text" placeholder="" class="input">
        </div>
        <a class="cancel" @click="childMethod">
          cancel
        </a>
      </div>
      <!--History search-->
      <div class="history-search">
        <div class="title flex flex-zBetween flex-ac"><span>History search</span><a class="iconfont">&#xe602;</a></div>
        <div class="content">
          <a>hot</a>
          <a>fuck</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "search-bar",
  data() {
    return {}
  },
  props: {},
  methods: {
    childMethod() {
      this.$parent.changeSearch();
    }
  }
}
</script>

<style lang="less" scoped>
.search-container {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #031213;
  z-index: 9;
  //display: none;
  .search-wrapper {
    width: 90%;
    margin: 5vh auto;

    .input-text {
      width: calc(100% - 60px);
      line-height: 40px;
      border: 0;
      background:#041c1d;
      border-radius: 30px;
      box-sizing: border-box;
      color: #ffffff;
    }

    .iconfont {
      width: 20px;
      line-height: 40px;
      color: #666666;
      padding-left: 5%;
    }

    .input {
      width: calc(100% - 20px);
      background:#041c1d;
      border-radius: 30px;
      line-height: 40px;
      border: 0;
      color: #ffffff;
      box-sizing: border-box;
      padding: 0 5%;
      font-size: 18px;
    }

    .cancel {
      font-size: 15px;
      color: #666666;
      text-align: right;
      line-height: 40px;
    }
  }
  .history-search{
    .title{
      color: #d4d7de;
      font-size: 17px;
      padding: 25px 0 5px;
    }
    .content{
      //padding: 10px 0;
      a{
        margin-top: 8px;
        padding: 5px 10px;
        border-radius: 30px;
        background:#041c1d;
        color: #999999;
        margin-right: 10px;
        font-size: 14px;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  .search-container{
    display: block;
  }
}

</style>