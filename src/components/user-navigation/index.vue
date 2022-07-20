<template>
  <!-- user-section-->
  <section class="user-section">
    <div :class="['user-wallet',user==null?'':'fixed']">
      <a class="connect-wallet" @click="getUserInfo()" v-if="user==null">
<!--      <span>-->
<!--        <div class="icon">-->
<!--          <svg t="1658223861901" class="icon" viewBox="0 0 1028 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"-->
<!--               p-id="2397" width="23" height="23"><path-->
<!--              d="M906.649269 135.236054l-785.89916 0c-66.581418 0-120.750131 54.168714-120.750131 120.750131l0 511.653099c0 66.581418 54.168714 120.750131 120.750131 120.750131l785.89916 0c66.581418 0 120.750131-54.168714 120.750131-120.750131l0-511.653099C1027.3994 189.404768 973.230686 135.236054 906.649269 135.236054zM906.649269 851.550393l-785.89916 0c-46.26879 0-83.911108-37.642319-83.911108-83.911108l0-511.653099c0-46.26879 37.642319-83.911108 83.911108-83.911108l785.89916 0c46.26879 0 83.911108 37.642319 83.911108 83.911108l0 132.502803-375.97293 0c-66.581418 0-120.750131 54.168714-120.750131 120.750131l0 25.060769c0 66.581418 54.168714 120.750131 120.750131 120.750131l375.97293 0 0 112.589264C990.560377 813.908074 952.918058 851.550393 906.649269 851.550393zM990.188917 425.328012l0 192.882985L614.587446 618.210997c-46.26879 0-83.911108-37.642319-83.911108-83.911108l0-25.060769c0-46.26879 37.642319-83.911108 83.911108-83.911108L990.188917 425.328012zM848.830422 576.899102c30.093389 0 54.489008-24.394596 54.489008-54.487985 0-30.093389-24.39562-54.489008-54.489008-54.489008-30.092365 0-54.487985 24.39562-54.487985 54.489008C794.342437 552.503483 835.110956 576.899102 848.830422 576.899102z"-->
<!--              p-id="2398" fill="#031213"></path></svg>-->
<!--        </div>-->
        Connect Wallet
<!--      </span>-->
      </a>
      <div v-else class="flex flex-zBetween flex-ac">
        <a class="logout" @click="disconnect">Log out</a>
        <div class="address">
          {{ hideAddress(user) }}
        </div>
      </div>
    </div>
    <div class="user-wallet1 logo-sum">
      <img src="@/assets/images/logo.png"/>
      <img src="@/assets/images/logo2.png" class="logo2"/>
      <img src="@/assets/images/logo1.png" class="logo1"/>
    </div>
    <div class="user-nav-list">
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
