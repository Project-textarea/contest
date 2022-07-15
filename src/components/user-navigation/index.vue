<template>
  <!-- user-section-->
  <section class="user-section">
    <div class="user-wallet">
      <a class="connect-wallet" @click="getUserInfo()" v-if="user==null">Connect Wallet</a>
      <div v-else class="flex flex-zBetween flex-ac">
        <div class="address">
          {{ hideAddress(user) }}
        </div>
        <a class="logout" @click="disconnect">log out</a>
      </div>
    </div>
    <div class="user-nav-list">
      <a :class="[$route.path==item.router?'active':'']" v-for="(item,index) in navList" :key="index" @click="linkTo(item)">{{
          item.name
        }}</a>
    </div>
  </section>
</template>

<script>
import $store from '@/store/index.js'
import {hideAddressEvent} from '@/assets/js/filters.js'

export default {
  props:{
    user: {
      type: String,
      request: false,
      default: null,
    },
    // text2:{
    //   type:String,
    //   request:false,
    //   default:'',
    // }
  },
  name: "user-navigation",
  data() {
    return {
      navIndex: 0, //navbar index
      navList: [
        {
          name: 'Ongoing contest',
          id: 0,
          router:'/home',
        },
        {
          name: 'Ended contest',
          id: 1,
          router:'/ended',
        },
        {
          name: 'Create a contest',
          id: 3,
          router:'/create1',
        },
        {
          name: 'Profile',
          id: 4,
          router:'/',
        },
        {
          name: 'Make a sentence',
          id: 5,
          router:'https://test.textarea.xyz/sentence',
        },
      ], //navbar List
    }
  },
  mounted() {
    // this.$h.get(`api/queryUserStake?address=0x7dc4ad856df25658522e6a167160026eeef3d5d8`).then(res => {
    //   console.log(res)
    // })


  },
  computed:{
  },
  methods:{
    linkTo(item){
      if(item.id==5){
        window.open(item.router)
      }else{
        this.$router.push(item.router)
      }
    },
    /**
     * @desc: Call metamask through store internal method
     * */
    async  getUserInfo()  {
      await $store.dispatch('getUserInfo');
      // this.user=$store.state.user;
      this.$emit('getAccounts',$store.state.user);
    },
    /**
     * @desc: Call metamask through store internal method
     * */
    async  disconnect()  {
      await $store.dispatch('disconnect');
      // this.user=$store.state.user;
      this.$emit('getAccounts',$store.state.user);
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
