<template>
  <div>
    <loading-bar :loadingShow="loadingShow"></loading-bar>
    <div class="container flex flex-center">
      <!-- user-section-->
      <user-navigation class="user-section pc-media" @getAccounts='getAccounts' :user="address"></user-navigation>
      <!-- user-section-->
      <section class="user-section nft-search-section">
        <div class="section-title">Word in contest</div>
        <div class="form-container wrapper-flex-row" :class="focus?'focus':''" @click="$refs.search.focus()">
          <a href="#">
            <span class="iconfont no-selection">&#xe86e;</span>
          </a>
          <input type="text" class="text" v-model="search" ref="search" @focus="focus=true" @blur="focus=false"/>
        </div>
        <ul class="list">
          <li :class="index==0?'active':''" v-for="(item,index) in wordResultList" :key="index">
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
        <div class="section-title"><span class="iconfont-nav icon" @click="returnPage">&#xe7ed;</span>Choose a sentence in your wallet to compete
        </div>
        <div class="list " style="position: relative">
          <div v-if="sentenceList.length==0" class="no-sentenceList-text">No sentence in your wallet, <a href="https://test.textarea.xyz/sentence" target="_blank">go make a sentence<span class="iconfont-nav icon">&#xe7ed;</span></a></div>
          <ul class="wrapper-flex-wrap list-container" v-else>
            <li v-for="(item,index) in sentenceList" :key="index">
              <div class="content">
                <div class="info">{{ item.text }}
                </div>
<!--                <div class="doing wrapper-flex-row">-->
<!--                  <a class="button">select sentence to contest</a>-->
<!--                </div>-->
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
      wordResultList: [],
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
      // sentenceList:[],
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
    getAccounts(accout) {
      console.log(accout)
      this.address = accout;
    },
    returnPage() {
      this.$router.go(-1);
    },
    linkTo() {
      this.$nextTick(() => {
        this.loadingShow = true;
        // console.log('this.loadingShow',this.loadingShow);
      })
      setTimeout(() => {
        this.$message.success("successful vote!");
        this.loadingShow = false;
      }, 1000)
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
<style lang="less" scoped>
.sentence-container{
  .list{
    li{
      position: relative;
      .info{
        color: #2d8081;
      }
    }
    li:hover{
      cursor: pointer;
      .info{
        color: #ffffff;
      }
    }
  }
}
</style>
