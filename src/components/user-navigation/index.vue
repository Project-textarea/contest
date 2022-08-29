<template>
  <div>
    <!-- user-section-->
    <section class="header-pc" style="width: 100%">
      <div :class="['user-wallet',user==null?'':'fixed']">
        <a class="connect-wallet  no-selection" @click="getUserInfo()" v-if="user==null">
          Connect Wallet
        </a>
        <div v-else class="flex flex-zBetween flex-ac">
          <a class="logout  no-selection" @click="disconnect" >Log out</a>
          <div class="address">
            {{ hideAddress(user) }}
          </div>
        </div>
      </div>
      <div class="user-wallet1 logo-sum no-selection">
        <img src="@/assets/images/logo.png"/>
        <img src="@/assets/images/logo2.png" class="logo2"/>
        <img src="@/assets/images/logo1.png" class="logo1"/>
      </div>
      <div class="user-nav-list no-selection">
        <a :class="[$route.path==item.router?'active':'']" v-for="(item,index) in navList" :key="index"
           @click="linkTo(item)">
          <span class="iconfont-nav" v-show="index==3">&#xe60b;</span>
          <span class="iconfont-nav" v-show="index==2">&#xe693;</span>
          <span class="iconfont-nav" v-show="index==1"
                style="margin-top: 2px;display: inline-block;vertical-align: top;margin-right: -1px;font-size: 25px;">&#xe652;</span>
          <span class="iconfont-nav"
                style="font-size: 30px;margin-right: -4px;display: inline-block;margin-top: -1px;vertical-align: top;"
                v-show="index==4">&#xe61f;</span>
          <span class="iconfont-nav" style="font-size: 22px" v-show="index==0">&#xe603;</span>
          {{ item.name }}
        </a>

      </div>
    </section>
    <div class="header-iphone">
      <div class="user-nav-list no-selection flex flex-ac">
        <a :class="[$route.path==item.router?'active':'']" v-for="(item,index) in navList" :key="index"
           @click="linkTo(item)">
          <span class="iconfont-nav" style="font-size: 23px" v-show="index==3">&#xe60b;</span>
          <span class="iconfont-nav" v-show="index==2">&#xe693;</span>
          <span class="iconfont-nav" v-show="index==1">&#xe652;</span>
          <span class="iconfont-nav" style="font-size: 30px" v-show="index==4">&#xe61f;</span>
          <span class="iconfont-nav" style="font-size: 22px"  v-show="index==0">&#xe603;</span>
        </a>

      </div>
      <a class="icon-select" v-if="$route.path=='/home'||$route.path=='/'">
        <span class="iconfont">&#xe604;</span>
      </a>
    </div>
  </div>
</template>

<script>
import $store from '@/store/index.js'
import {hideAddressEvent} from '@/assets/js/filters.js'

export default {
  props: {
    user: {
      type: String,
      request: false,
      default: null,
    },
  },
  name: "user-navigation",
  data() {
    return {
      navIndex: 0, //navbar index
      navList: [
        {
          icon: 'icon-Profile',
          name: 'Ongoing contest',
          id: 0,
          router: '/home',
        },
        {
          icon: 'icon-Profile',
          name: 'Ended contest',
          id: 1,
          router: '/ended',
        },
        {
          icon: 'icon-Profile',
          name: 'Create a contest',
          id: 3,
          router: '/create1',
        },
        {
          icon: 'icon-Profile',
          name: 'Profile',
          id: 4,
          router: '/profile',
        },
        {
          icon: 'icon-Profile',
          name: 'Make a sentence',
          id: 5,
          router: 'https://test.textarea.xyz/sentence',
        },
      ], //navbar List
    }
  },
  mounted() {
  },
  watch:{
  },
  computed: {},
  methods: {
    linkTo(item) {
      if (item.id == 5) {
        window.open(item.router)
      } else {
        this.$router.push(item.router)
      }
    },
    /**
     * @desc: Call metamask through store internal method
     * */
    async getUserInfo() {
      await $store.dispatch('getUserInfo');
      // this.user=$store.state.user;
      this.$emit('getAccounts', $store.state.user);
      if (!window.ethereum) {
        return;
      }
      ethereum.on("accountsChanged", function (accounts) {
        if (accounts.length == 0) {
          $store.dispatch('getUserInfo');
        }
      });
    },
    /**
     * @desc: Call metamask through store internal method
     * */
    async disconnect() {
      await $store.dispatch('disconnect');
      // this.user=$store.state.user;
      this.$emit('getAccounts', $store.state.user);
    }
  },
  setup() {
    /**
     * @desc: Intercept a string and return a new string
     * @param accounts {string}
     * @return newString {string}
     * */
    const hideAddress = (accounts) => {
      return hideAddressEvent(accounts)
    }
    return {
      hideAddress
    };
  },
}
</script>
<style lang="less" scoped>
.header-iphone{
  display: none;
  .user-nav-list {
    span{
      font-size: 25px;
      padding:16px 2rem;
      line-height: 1;
      box-sizing: border-box;
      width: 100%;
      text-align: center;
      display: block;
    }
    a {
      width: 25%;
      font-size: 24px!important;
      color: #999999;
      line-height: 1;
      background: transparent;
      text-align: center;
      //&:nth-child(1){
      //  //width: 18.5%;
      //  span{
      //    text-align: left;
      //  }
      //}
      &:nth-child(5){
        //margin-left: -0.5%;
        //padding-left: 0;
        //width: 16%;
        span{
          text-align: left;
        }
      }
      &:hover {
        color: #ffffff;
      }

      &.active {
        color: #ffffff;
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .header-pc {
    display: none;
  }
  .header-iphone{
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #0a3031;
    z-index:7;
    border-top:0.5px solid #2b4b4f;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .user-nav-list {
      a{
        padding: 0;
      }
      span{
        display: block;
      padding:16px 2rem!important;
      }
    }

  }
  .header-iphone .icon-select{
    position: fixed;
    font-size: 3rem;
    width:5.5rem;
    height:5.5rem;
    background: #222222;
    //background: linear-gradient(to top,#2d8081,#0a5354);
    padding:0 8px;
    box-sizing: border-box;
    border-radius: 50%;
    //border: 0.5px solid #ffffff;
    bottom:90px;
    right: 3rem;
    z-index: 100;
    text-align: center;
    //line-height:34px;
    line-height:5.5rem;
    //width:6rem;
    //background: #000000;
    span{
      //margin-left: -1rem;
      display:block;
      //margin-bottom: -8px;
      //color: #8ecedb;
      text-align: center;
      //font-size: 40px!important;
      font-size: 2rem;
      color: #ffffff;
    }
  }
}
</style>
