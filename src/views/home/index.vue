<template>
  <div>
    <loading-bar :loadingShow="loadingShow"></loading-bar>
    <search-bar v-if="searchShow"></search-bar>
    <div class="container flex flex-center">
      <!-- user-section-->
      <user-navigation class="user-section pc-media" @getAccounts='getAccounts' :user="address"></user-navigation>
      <!-- user-section-->
      <section class="user-section nft-search-section">
        <div class="section-title">Word in contest</div>
        <div class="form-container wrapper-flex-row" @click="showFocus=true;$refs.search1.focus();$refs.search.focus()" :class="focus?'focus':''">
          <a  class="iphone-media" style="margin-right: 0;width: 100%;">
            <span class="iconfont no-selection" v-if="!showFocus" style="width: 100%;display:block;line-height: 20px;">&#xe8d6;</span>
            <textarea placeholder="" @blur="showFocus=false" ref="search1" v-model="search"  style="background: transparent;border:0;padding:0;color:#ffffff;display:block;width:100%;line-height: 20px;height:20px;resize:none;box-sizing: border-box;font-size: 18px;" :style="[search.length>=7?'height:40px;':'',search.length>=13?'height:60px;':'',search.length>=19?'height:80px;':'',showFocus?'opacity: 1;position: static;':'opacity: 0;position: absolute;']"></textarea>
          </a>
          <a href="#" class="pc-media">
            <span class="iconfont no-selection">&#xe86e;</span>
          </a>
          <input type="text" class="text" v-model="search" ref="search" @focus="focus=true" @blur="focus=false"/>
        </div>
        <ul class="list">
          <li :class="[index==0?'active':'',item.text.length>=15?'small':'']" v-for="(item,index) in wordResultList" :key="index">
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
          <div class="section-title">Competition information</div>
        <div class="list ">
          <ul class="wrapper-flex-wrap list-container">
            <li>
              <div class="desc pc-media">
                <div class="info" style="word-break: break-all; ">
                  abcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwerty
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe6b6;
                  </i>

                  <div class="name">
                    1st: <a href="#" target="_blank">Opensea</a>;
                    <a href="#"  target="_blank">Etherscan</a><br/>
                    2st: <a href="#" target="_blank">Opensea</a>;
                    <a href="#" target="_blank">Etherscan</a><br/>
                    3st: <a href="#" target="_blank">Opensea</a>;
                    <a href="#" target="_blank">Etherscan</a>
                  </div>
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe665;
                  </i>
                  <div class="name"><countdown :endTime="time" endText="End time: 2022/07/29 18:00" /></div>
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe74e;
                  </i>
                  <div class="name"><a href="#" target="_blank">TEXT</a>; <a href="#" target="_blank">BAYC</a></div>
                </div>
                <router-link to="/select" class="button">
                  Join
                </router-link>
              </div>
              <div class="desc iphone-media">
                <div class="info" style="word-break: break-all; ">
                  abcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwertyabcdsqwerty
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe8fa;
                  </i>

                  <div class="name">1st: <a href="#" target="_blank">Opensea</a>; <a href="#"
                                                                                     target="_blank">Etherscan</a><br/>
                    2st: <a href="#" target="_blank">Opensea</a>; <a href="#"
                                                                     target="_blank">Etherscan</a><br/>
                    3st: <a href="#" target="_blank">Opensea</a>; <a href="#"
                                                                     target="_blank">Etherscan</a>
                  </div>
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe64d;
                  </i>
                  <div class="name"><countdown :endTime="time" endText="End time: 2022/07/29 18:00" /></div>
                </div>
                <div class="reward wrapper-flex-row">
                  <i class="icon iconfont">
                    &#xe6bf;
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
                  <div class="left flex  pc-media">
                    <div class="vote share-wrapper" >
                     <span class="vote share share-show" >
                        <a class="iconfont">&#xe611;</a>
                        <a class="iconfont">&#xe620;</a>
                        <a class="iconfont" >&#xe8f8;</a>
                      </span>
                    </div>
                  </div>
                  <div class="vote" style="font-size: 1.6rem;margin-top: 0;line-height: 20px;">
                    <span class="iconfont" style="font-size: 1.6rem;margin-top: 0;line-height: 20px;">&#xe6bf;</span>34
                  </div>
                  <div class="vote share-wrapper iphone-media" style="display: inline-block">
                    <span class="iconfont" style="font-size: 1.6rem;"  @click="winShow=true">&#xe60f;</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <section class="win-open" v-if="winShow">
      <div class="bg" @click="winShow=false"></div>
      <div class="content">
        <div class="list">
          <a><span class="iconfont">&#xe611;</span>twiiter</a>
          <a><span class="iconfont">&#xe620;</span>reddit</a>
          <a><span class="iconfont" style="font-size: 26px;margin-right: 18px;margin-left: -3px">&#xe8f8;</span>facebook</a>
        </div>
        <a class="cancel" @click="winShow=false">cancel</a>
      </div>
    </section>
  </div>
</template>

<script>
import 'element-plus/es/components/message/style/css'
import { ElMessage } from 'element-plus'
import countdown from  '@/components/count-down/index'
import userNavigation from '@/components/user-navigation/index'
import searchBar from '@/components/search/index'
import $store from '@/store/index.js'
import {hideAddressEvent} from '@/assets/js/filters.js'
import {computed} from 'vue';
import $ from 'jquery'


export default ({
  components: {
    searchBar,
    countdown,
    userNavigation
  },
  data() {
    return {
      input22:'',
      showFocus:false,
      searchShow:false,
      winShow:false,
      time:1659087210000,
      loadingShow: false,//loading Module
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
          text: 'abc',
        },
        {
          text: 'fuckfuckfuckfuckfu',
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
      wordResultList: [],
      sentenceList: [
        {
          share:false,
          text: 'Textarea is a text derivative of NFT, which provides NFT with more value.',
        },
        {
          share:false,
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          share:false,
          text: 'wecmpl; ewmc, 1; ew, mcl;e, wsl;c,slc;ndc jkdsnjkcn jkdsncjkdsncjkdsncjksdnjcknsdc jkdnsck jdnckdnsc jkdnjcnd jkscnjdkscn jkdsnc jdksnc jkdsnc jkdcnsk jcndnsc jkd nsck jdncksnc jdksnc jkdscn jkdsncjkdscnd jkbc dhhuewi jdiweojdioewjiod jewiojdiofhreiughtuivnjdnc jdknc jdkchfruifhruiefhreofhrioefhrioefhrheofhrifoheriofrheofhroiehfurehfurhoferhifo',
        },
        {
          share:false,
          text: 'Consists of consecutive letters and numbers.',
        },
        {
          share:false,
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          share:false,
          text: 'The minimum number of words that make up a sentence is one, and the maximum cannot exceed the fixed pixel area (11 lines).',
        },
        {
          share:false,
          text: 'Sentences can be changed in color using a six-digit color number. Sentences with different colors but the same content cannot be created repeatedly.',
        },
        {
          share:false,
          text: 'No space can be added at the end of the sentence.',
        },
        {
          share:false,
          text: 'Punctuation; space; enter; will be considered as the basis for judging sentence difference.',
        },
        {
          share:false,
          text: 'Textarea is a text derivative of NFT, which provides NFT with more value.',
        },
        {
          share:false,
          text: 'Consists of consecutive letters and numbers.',
        },
        {
          share:false,
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          share:false,
          text: 'fuck',
        },
        {
          share:false,
          text: 'fuck',
        },
        {
          share:false,
          text: 'fuck',
        },
        {
          share:false,
          text: 'fuck',
        },
        {
          share:false,
          text: 'I; You; He; She; It; Am; Are; Were; Is; Was; Be; Do; Does; Did; Have; Has; Shall; Should; Will; Would; Can; Could; May; Might.',
        },
        {
          share:false,
          text: 'The minimum number of words that make up a sentence is one, and the maximum cannot exceed the fixed pixel area (11 lines).',
        },
        {
          share:false,
          text: 'Sentences can be changed in color using a six-digit color number. Sentences with different colors but the same content cannot be created repeatedly.',
        },
        {
          share:false,
          text: 'No space can be added at the end of the sentence.',
        },
        {
          share:false,
          text: 'Punctuation; space; enter; will be considered as the basis for judging sentence difference.',
        },
      ],
      count: 0,
      address: null || sessionStorage.getItem('address'),
    }
  },
  watch: {
    search(n, o) {
      var that = this;
      if (that.search.length > 18) {
        that.search = that.search.slice(0, 18)
      }
      that.search = that.search.replace(/[^0-9A-Za-z]/g, '');
      if (n == '') {
        that.wordResultList = that.wordList;
      } else {
        let result = that.wordList.filter(function (item) {
          return item.text.includes(n)
        })
        that.$nextTick(() => {
          that.wordResultList = result;
          console.log(that.wordResultList)
        })
      }

    }
  },
  mounted() {
    $('.sentence-container .list li').css('min-height', $('.sentence-container .list').width() / 3);
    $(window).resize(function () {
      $('.sentence-container .list li').css('min-height', $('.sentence-container .list').width() / 3);
    })
    this.wordResultList = this.wordList;
  },
  methods: {
    changeSearch(){
      console.log('changeSearch---------->')
      this.searchShow=false
    },
    getAccounts(accout) {
      console.log(accout)
      this.address = accout;
    },
    linkTo() {
      this.$nextTick(()=>{
        this.loadingShow = true;
        // console.log('this.loadingShow',this.loadingShow);
      })
      setTimeout(()=>{
        // this.$notify({
        //   type: 'success',
        //   text: "successful vote!",
        // });
        ElMessage({
          message:  "successful vote!",
          type: 'success',
        })
        this.loadingShow = false;
      },1000)
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
