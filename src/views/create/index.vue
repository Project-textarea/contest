<template>
  <div>
    <loading-bar :show="loading"></loading-bar>
    <div class="container flex flex-center">
      <!-- user-section-->
      <user-navigation class="user-section pc-media" @getAccounts='getAccounts' :user="address"></user-navigation>
      <!-- user-section-->
      <section class="user-section nft-search-section other-search-section">
        <div class="section-title"><i class="iconfont" style="font-size:1.5rem;margin-right: 0.8rem;vertical-align: top;margin-top: 0.3rem;display: inline-block;color: #669ea0">&#xe64a;</i>Word in contest</div>
        <ul class="list" v-if="address!=null">
          <li :class="index==0?'active':''" v-for="(item,index) in wordList" :key="index">
            <text>{{ item.text }}</text>
            <div class="share" v-if="index==0">
              <a class="twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.baidu.com"
                 target="_blank">
                <span class="iconfont">&#xe611;</span>
              </a>
              <a href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.baidu.com" target="_blank">
                <span class="iconfont">&#xe74e;</span>
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.baidu.com" target="_blank">
                <span class="iconfont">&#xe620;</span>
              </a>
            </div>
          </li>
        </ul>
        <div v-else class="no-wallet">
          <div class="no-wallet-icon">
            <svg t="1657620801914" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="4155" width="100" height="100">
              <path
                  d="M939.1976300088891 879.6488692622222c0 12.945382968888888-2.5890770488888886 25.890765937777775-7.767230008888888 36.247071857777776-5.17815296 10.35630592-10.35630592 20.71261184-18.123535928888888 31.068917759999998-7.767230008888888 7.767230008888888-18.123535928888888 15.534458879999999-28.47984184888889 20.712612977777777-10.35630592 5.17815296-23.301688888888886 7.767230008888888-36.247071857777776 7.7672288711111115H172.83097258666663c-12.945382968888888 0-25.890765937777775-2.5890770488888886-36.247071857777776-7.7672288711111115-12.945382968888888-5.17815296-23.301688888888886-10.35630592-31.068917759999998-20.712612977777777-7.767230008888888-7.767230008888888-15.534458879999999-18.123535928888888-20.712612977777777-31.068917759999998-5.17815296-10.35630592-7.767230008888888-23.301688888888886-7.7672288711111115-36.247071857777776V364.4226366577778c0-25.890765937777775 10.35630592-49.19245482666667 28.47984184888889-67.31598961777779 18.123535928888888-18.123535928888888 41.42522481777778-28.47984184888889 67.31598961777779-28.47984184888889h678.3380548266667c25.890765937777775 0 49.19245482666667 10.35630592 67.31598961777779 28.47984184888889 18.123535928888888 18.123535928888888 28.47984184888889 41.42522481777778 28.47984184888889 67.31598961777779v139.81013333333334H706.18074112c-25.890765937777775 0-49.19245482666667 7.767230008888888-67.31599075555556 25.890765937777775-18.123535928888888 18.123535928888888-28.47984184888889 38.836147768888885-28.47984184888889 67.31598961777779 0 18.123535928888888 5.17815296 33.657994808888894 10.35630592 46.60337777777777s15.534458879999999 23.301688888888886 28.47984184888889 31.068918897777777c12.945382968888888 10.35630592 31.068918897777777 15.534458879999999 54.37060778666666 15.534458879999999H939.1976300088891v189.00258816z m-139.81013333333334-657.6254418488888H330.7646418488889c36.247071857777776-18.123535928888888 72.49414371555555-38.836147768888885 106.15213852444442-56.95968369777778l85.43952554666666-46.60337777777777c28.47984184888889-15.534458879999999 49.19245482666667-25.890765937777775 67.31599075555556-36.247071857777776 23.301688888888886-12.945382968888888 46.60337777777777-18.123535928888888 64.72691370666666-18.123535928888888s36.247071857777776 5.17815296 49.19245368888889 10.35630592c15.534458879999999 7.767230008888888 28.47984184888889 18.123535928888888 38.836147768888885 31.068918897777777l56.95968483555556 116.50844444444445z m-139.81013333333334 375.4160981333333c0-12.945382968888888 5.17815296-23.301688888888886 12.945381831111112-33.657994808888894 7.767230008888888-7.767230008888888 20.71261184-12.945382968888888 33.65799594666667-12.945382968888888s23.301688888888886 5.17815296 33.657994808888894 12.945382968888888c7.767230008888888 7.767230008888888 12.945382968888888 20.71261184 12.945382968888888 33.657994808888894s-5.17815296 23.301688888888886-12.945382968888888 33.65799594666667-20.71261184 12.945382968888888-33.657994808888894 12.945381831111112-23.301688888888886-5.17815296-33.65799594666667-12.945381831111112c-7.767230008888888-7.767230008888888-12.945382968888888-18.123535928888888-12.945381831111112-33.65799594666667z m0 0"
                  fill="#044243" p-id="4156"></path>
            </svg>
          </div>
          <div class="no-wallet-text">Please connect wallet</div>
        </div>
      </section>
      <!--sentence-container-->
      <section class="user-section sentence-container">
        <div class="section-title">Sentences for competition</div>
        <div class="list ">
          <div class="no-wallet" v-if="address==null">
            <div class="no-wallet-icon">
              <svg t="1657620801914" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="4155" width="200" height="200">
                <path
                    d="M939.1976300088891 879.6488692622222c0 12.945382968888888-2.5890770488888886 25.890765937777775-7.767230008888888 36.247071857777776-5.17815296 10.35630592-10.35630592 20.71261184-18.123535928888888 31.068917759999998-7.767230008888888 7.767230008888888-18.123535928888888 15.534458879999999-28.47984184888889 20.712612977777777-10.35630592 5.17815296-23.301688888888886 7.767230008888888-36.247071857777776 7.7672288711111115H172.83097258666663c-12.945382968888888 0-25.890765937777775-2.5890770488888886-36.247071857777776-7.7672288711111115-12.945382968888888-5.17815296-23.301688888888886-10.35630592-31.068917759999998-20.712612977777777-7.767230008888888-7.767230008888888-15.534458879999999-18.123535928888888-20.712612977777777-31.068917759999998-5.17815296-10.35630592-7.767230008888888-23.301688888888886-7.7672288711111115-36.247071857777776V364.4226366577778c0-25.890765937777775 10.35630592-49.19245482666667 28.47984184888889-67.31598961777779 18.123535928888888-18.123535928888888 41.42522481777778-28.47984184888889 67.31598961777779-28.47984184888889h678.3380548266667c25.890765937777775 0 49.19245482666667 10.35630592 67.31598961777779 28.47984184888889 18.123535928888888 18.123535928888888 28.47984184888889 41.42522481777778 28.47984184888889 67.31598961777779v139.81013333333334H706.18074112c-25.890765937777775 0-49.19245482666667 7.767230008888888-67.31599075555556 25.890765937777775-18.123535928888888 18.123535928888888-28.47984184888889 38.836147768888885-28.47984184888889 67.31598961777779 0 18.123535928888888 5.17815296 33.657994808888894 10.35630592 46.60337777777777s15.534458879999999 23.301688888888886 28.47984184888889 31.068918897777777c12.945382968888888 10.35630592 31.068918897777777 15.534458879999999 54.37060778666666 15.534458879999999H939.1976300088891v189.00258816z m-139.81013333333334-657.6254418488888H330.7646418488889c36.247071857777776-18.123535928888888 72.49414371555555-38.836147768888885 106.15213852444442-56.95968369777778l85.43952554666666-46.60337777777777c28.47984184888889-15.534458879999999 49.19245482666667-25.890765937777775 67.31599075555556-36.247071857777776 23.301688888888886-12.945382968888888 46.60337777777777-18.123535928888888 64.72691370666666-18.123535928888888s36.247071857777776 5.17815296 49.19245368888889 10.35630592c15.534458879999999 7.767230008888888 28.47984184888889 18.123535928888888 38.836147768888885 31.068918897777777l56.95968483555556 116.50844444444445z m-139.81013333333334 375.4160981333333c0-12.945382968888888 5.17815296-23.301688888888886 12.945381831111112-33.657994808888894 7.767230008888888-7.767230008888888 20.71261184-12.945382968888888 33.65799594666667-12.945382968888888s23.301688888888886 5.17815296 33.657994808888894 12.945382968888888c7.767230008888888 7.767230008888888 12.945382968888888 20.71261184 12.945382968888888 33.657994808888894s-5.17815296 23.301688888888886-12.945382968888888 33.65799594666667-20.71261184 12.945382968888888-33.657994808888894 12.945381831111112-23.301688888888886-5.17815296-33.65799594666667-12.945381831111112c-7.767230008888888-7.767230008888888-12.945382968888888-18.123535928888888-12.945381831111112-33.65799594666667z m0 0"
                    fill="#044243" p-id="4156"></path>
              </svg>
            </div>
            <div class="no-wallet-text">Please connect wallet</div>
          </div>
          <!--S create-container-->
          <div v-else class="create-container">
            <div class="wrapper">
              <div class="title">Add a prize</div>
              <dl class="create-item">
                <dd>
                  <div class="desc wrapper-flex-row">
                    <h2>1ST</h2>
                    <a class="add">
                      <span class="line line1"></span>
                      <span class="line line2"></span>
                    </a>
                  </div>
                  <div class="input-container wrapper-flex-row" :class="focus?'active':''">
                    <input type="text" v-model="input" class="text" placeholder="Add NFT gift contract address" @blur="this.input==''?this.focus=false:this.focus=true" @focus="this.focus=true">
                    <a class="confirm" :class="input!==''?'disNone':''">confirm</a>
                  </div>
                  <div class="input-container wrapper-flex-row">
                    <div class="text text1"><span>Already added</span>0x7Dc4Ad856dF25658522E6a167160026EeeF3D5D8</div>
                    <a class="confirm disNone" >cancel</a>
                  </div>
                </dd>
                <dd>
                  <div class="desc">
                    <h2>Deadline for competition: 12/07/2022</h2>
                  </div>
                </dd>
                <dd>
                  <div class="desc wrapper-flex-row">
                    <h2>What to use to vote: #TEXT<i>√</i></h2>
                    <a class="add">
                      <span class="line line1"></span>
                      <span class="line line2"></span>
                    </a>
                  </div>
                  <div class="input-container wrapper-flex-row" :class="focus?'active':''">
                    <input type="text" v-model="input" class="text" placeholder="Add NFT gift contract address" @blur="this.input==''?this.focus=false:this.focus=true" @focus="this.focus=true">
                    <a class="confirm" :class="input!==''?'disNone':''">confirm</a>
                  </div>
<!--                  <div class="input-container wrapper-flex-row">-->
<!--                    <div class="text text1"><span>Already added</span>0x7Dc4Ad856dF25658522E6a167160026EeeF3D5D8</div>-->
<!--                    <a class="confirm disNone" >cancel</a>-->
<!--                  </div>-->
                </dd>
              </dl>
            </div>
          </div>
          <!--E create-container-->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import userNavigation from '@/components/user-navigation/index'
import $store from '@/store/index.js'
import {hideAddressEvent} from '@/assets/js/filters.js'
import {computed} from 'vue';
import $ from 'jquery'

export default ({
  components: {
    userNavigation
  },
  data() {
    return {
      loading:false,//loading Module
      input:'',
      search: '',
      focus: false,
      navIndex: 0,
      navList: [
        {
          name: 'Ongoing contest',
          id: 0,
        },
        {
          name: 'Ended contest',
          id: 1,
        },
        {
          name: 'Create a contest',
          id: 3,
        },
        {
          name: 'Profile',
          id: 4,
        },
        {
          name: 'Make a sentence',
          id: 5,
        },
      ],
      wordList: [
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
      ],
      sentenceList: [
        {
          text: 'Textarea is a text derivative of NFT, which provides NFT with more value.',
        },
        {
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          text: 'wecmpl; ewmc, 1; ew, mcl;e, wsl;c,slc;ndc jkdsnjkcn jkdsncjkdsncjkdsncjksdnjcknsdc jkdnsck jdnckdnsc jkdnjcnd jkscnjdkscn jkdsnc jdksnc jkdsnc jkdcnsk jcndnsc jkd nsck jdncksnc jdksnc jkdscn jkdsncjkdscnd jkbc dhhuewi jdiweojdioewjiod jewiojdiofhreiughtuivnjdnc jdknc jdkchfruifhruiefhreofhrioefhrioefhrheofhrifoheriofrheofhroiehfurehfurhoferhifo',
        },
        {
          text: 'Consists of consecutive letters and numbers.',
        },
        {
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          text: 'The minimum number of words that make up a sentence is one, and the maximum cannot exceed the fixed pixel area (11 lines).',
        },
        {
          text: 'Sentences can be changed in color using a six-digit color number. Sentences with different colors but the same content cannot be created repeatedly.',
        },
        {
          text: 'No space can be added at the end of the sentence.',
        },
        {
          text: 'Punctuation; space; enter; will be considered as the basis for judging sentence difference.',
        },
        {
          text: 'Textarea is a text derivative of NFT, which provides NFT with more value.',
        },
        {
          text: 'Consists of consecutive letters and numbers.',
        },
        {
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'fuck',
        },
        {
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          text: 'The minimum number of words that make up a sentence is one, and the maximum cannot exceed the fixed pixel area (11 lines).',
        },
        {
          text: 'Sentences can be changed in color using a six-digit color number. Sentences with different colors but the same content cannot be created repeatedly.',
        },
        {
          text: 'No space can be added at the end of the sentence.',
        },
        {
          text: 'Punctuation; space; enter; will be considered as the basis for judging sentence difference.',
        },
      ],
      count: 0,
      address: null || sessionStorage.getItem('address'),
    }
  },
  mounted() {
  },
  methods: {
    getAccounts(accout) {
      console.log(accout)
      this.address = accout;
    },
  },
  setup() {
    // let count = computed(()=>{
    //   return $store.state.count
    // })
    // const addCount = ()=>{
    //   $store.commit('increment',2)
    // }
  },
})
</script>
