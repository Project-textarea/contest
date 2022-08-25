<template>
  <div>
    <loading-bar :show="loading"></loading-bar>
    <div class="container flex flex-center">
      <!-- user-section-->
      <user-navigation class="user-section pc-media" @getAccounts='getAccounts' :user="address"></user-navigation>
      <section class="user-section nft-search-section">
        <div class="section-title">Word in contest</div>
        <div class="form-container wrapper-flex-row" :class="focus?'focus':''" @click="$refs.search.focus()">
          <a href="#" class="iphone-media">
            <span class="iconfont no-selection">&#xe8d6;</span>
          </a>
          <a href="#" class="pc-media">
            <span class="iconfont no-selection">&#xe86e;</span>
          </a>
          <input type="text" class="text" v-model="search" ref="search" @focus="focus=true" @blur="focus=false"/>
        </div>
        <ul class="list">
          <li :class="index==0?'active':''" v-for="(item,index) in wordList" :key="index">
            <text>{{ item.text }}</text>
            <div class="share" v-if="index==0">
              <a class="twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.baidu.com"
                 target="_blank">
                <span class="iconfont">&#xe63d;</span>
              </a>
              <a href="https://www.reddit.com/submit?url=https%3A%2F%2Fwww.baidu.com" target="_blank">
                <span class="iconfont">&#xe601;</span>
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.baidu.com" target="_blank">
                <span class="iconfont">&#xecb1;</span>
              </a>
            </div>
          </li>
        </ul>
      </section>
      <section class="user-section sentence-container">
        <div class="section-title">Sentences for competition</div>
        <div class="list ">
          <ul class="wrapper-flex-wrap list-container">
            <li class="no-first">
              <div class="desc">
                <div class="info" style="word-break: break-all; ">
                  12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                </div>
                <div class="reward wrapper-flex-row">
<!--                  <i class="icon">-->
<!--                    <img src="@/assets/images/icon-1.png" width="100%"/>-->
<!--                  </i>-->

                  <i class="iconfont-nav icon">
                    &#xe605;
                  </i>
                  <div class="name">1st: <a href="#" target="_blank">0x466C...13Ac</a><br/>
                    2st: <a href="#" target="_blank">0x466C...13Ac</a><br/>
                    3st: <a href="#" target="_blank">0x466C...13Ac</a>
                  </div>
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe665;
                  </i>
                  <div class="name">End time: 2022/07/29 18:00</div>
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe74e;
                  </i>
                  <div class="name"><a href="#" target="_blank">TEXT</a>; <a href="#" target="_blank">BAYC</a></div>
                </div>
              </div>
            </li>
            <li v-for="(item,index) in sentenceList" :key="index">
              <div class="content">
                <div class="info">{{ item.text }}
                </div>
                <div class="doing wrapper-flex-row">
<!--                  <div class="share">-->
<!--                    <a href="#" target="_blank">-->
<!--                      <span class="iconfont">&#xf24d;</span>-->
<!--                    </a>-->
<!--                    <a href="#" target="_blank">-->
<!--                      <span class="iconfont">&#xe7d7;</span>-->
<!--                    </a>-->
<!--                    <a href="#" target="_blank">-->
<!--                      <span class="iconfont">&#xe606;</span>-->
<!--                    </a>-->
<!--                  </div>-->
<!--                  <div class="vote">-->
<!--                    <span class="iconfont">&#xe602;</span>-->
<!--                    Vote-->
<!--                  </div>-->
                </div>
              </div>
            </li>
          </ul>
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
    $('.sentence-container .list li').css('min-height', $('.sentence-container .list').width() / 3);
    $(window).resize(function () {
      $('.sentence-container .list li').css('min-height', $('.sentence-container .list').width() / 3);
    })
  },
  methods: {
    getAccounts(accounts) {
      this.address=accounts;
      // console.log(this.address)
    }
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
