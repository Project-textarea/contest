<template>
  <div>
    <div class="container flex flex-center">
      <div class="bg" v-show="data1Show"
           @click="this.data1Show=false;this.input5==''?this.input5Active=false:this.input5Active=true"></div>
      <div class="bg" v-show="data2Show"
           @click="this.data2Show=false;this.input6==''?this.input6Active=false:this.input6Active=true"></div>
      <!-- user-section-->
      <user-navigation @getAccounts='getAccounts' :user="address"></user-navigation>
      <!-- user-section-->
      <section class="user-section nft-search-section other-search-section">
        <div class="section-title">Menu</div>
        <ul class="list" v-if="address!=null">
          <li :class="[index==showIndex?'active':'','flex flex-zBetween']" v-for="(item,index) in navProfileList" :key="index" @click="navChangeIndex(index)">
            <text>{{ item.text }}<div class="number">({{item.number}})</div></text>

          </li>
        </ul>
        <div v-else>
          <no-wallet  @getAccounts='getAccounts' :user="address"></no-wallet>
        </div>
      </section>
      <!--sentence-container-->
      <section class="user-section sentence-container">
        <div class="section-title">Details</div>
        <div class="list ">
          <div v-if="address==null">

          </div>
          <div v-else>
            <main v-if="showIndex==0">
              <ul class="wrapper-flex-wrap list-container">
                <li v-for="(item,index) in sentenceList" :key="index">
                  <div class="content">
                    <div class="info">{{ item.text }}
                    </div>
                    <div class="doing wrapper-flex-row">
                      <div class="share">
                        <a href="#" target="_blank">
                          <span class="iconfont">&#xf24d;</span>
                        </a>
                        <a href="#" target="_blank">
                          <span class="iconfont">&#xe7d7;</span>
                        </a>
                        <a href="#" target="_blank">
                          <span class="iconfont">&#xe606;</span>
                        </a>
                      </div>
                      <div class="vote">
                        <span class="iconfont">&#xe602;</span>
                        Vote
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </main>
            <main v-if="showIndex==1">
              <ul class="wrapper-flex-wrap list-container">
                <li @click="toDetails()" style="cursor: pointer">
                  <div class="desc">
                    <div class="info" style="word-break: break-all; ">
                      12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                    </div>
                    <div class="reward wrapper-flex-row">
                      <i class="icon">
                        <img src="@/assets/images/icon-1.png" width="100%"/>
                      </i>
                      <div class="name">1st: <a href="#" target="_blank">Opensea</a>; <a href="#"
                                                                                         target="_blank">Etherscan</a><br/>
                        2st: <a href="#" target="_blank">0x466C...13Ac</a><br/>
                        3st: <a href="#" target="_blank">0x466C...13Ac</a>
                      </div>
                    </div>
                    <div class="reward wrapper-flex-row">
                      <i class="icon">
                        <img src="@/assets/images/icon-2.png" width="100%"/>
                      </i>
                      <div class="name">36:13:45</div>
                    </div>
                    <div class="reward wrapper-flex-row">
                      <i class="icon">
                        <img src="@/assets/images/icon-3.png" width="100%"/>
                      </i>
                      <div class="name">TEXT; BAYC</div>
                    </div>
                  </div>
                </li>
              </ul>
            </main>
            <main v-if="showIndex==2">
              <ul class="wrapper-flex-wrap list-container">
                <li @click="toDetails()" style="cursor: pointer">
                  <div class="desc">
                    <div class="info" style="word-break: break-all; ">
                      12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
                    </div>
                    <div class="reward wrapper-flex-row">
                      <i class="icon">
                        <img src="@/assets/images/icon-1.png" width="100%"/>
                      </i>
                      <div class="name">1st: <a href="#" target="_blank">Opensea</a>; <a href="#"
                                                                                         target="_blank">Etherscan</a><br/>
                        2st: <a href="#" target="_blank">0x466C...13Ac</a><br/>
                        3st: <a href="#" target="_blank">0x466C...13Ac</a>
                      </div>
                    </div>
                    <div class="reward wrapper-flex-row">
                      <i class="icon">
                        <img src="@/assets/images/icon-2.png" width="100%"/>
                      </i>
                      <div class="name">36:13:45</div>
                    </div>
                    <div class="reward wrapper-flex-row">
                      <i class="icon">
                        <img src="@/assets/images/icon-3.png" width="100%"/>
                      </i>
                      <div class="name">TEXT; BAYC</div>
                    </div>
                  </div>
                </li>
              </ul>
            </main>
            <main v-if="showIndex==3">
              <ul class="wrapper-flex-wrap list-container">
                <li v-for="(item,index) in sentenceList" :key="index">
                  <div class="content">
                    <div class="info">{{ item.text }}
                    </div>
                    <div class="doing wrapper-flex-row">
                      <div class="share">
                        <a href="#" target="_blank">
                          <span class="iconfont">&#xf24d;</span>
                        </a>
                        <a href="#" target="_blank">
                          <span class="iconfont">&#xe7d7;</span>
                        </a>
                        <a href="#" target="_blank">
                          <span class="iconfont">&#xe606;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </main>
          </div>
          <!--S create-container-->
          <!--E create-container-->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import noWallet from '@/components/no-wallet/index'
import userNavigation from '@/components/user-navigation/index'
import $store from '@/store/index.js'
import {hideAddressEvent} from '@/assets/js/filters.js'
import {computed} from 'vue';
import $ from "jquery";

export default ({
  components: {
    noWallet,
    userNavigation
  },
  data() {
    return {
      startDate: null,
      input: '',
      search: '',
      focus: false,
      showIndex: 0,
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
      navProfileList: [
        {
          text: 'Owned Sentence',
          number:1,
        },
        {
          text: 'Initiated Contest',
          number:23,
        },
        {
          text: 'Participated Contest',
          number:100,
        },
        {
          text: 'Voted Sentence',
          number:895,
        },
      ],
      list:[
        {
          info:'',
          Opensea:'Opensea',
          Etherscan:'Etherscan',
          reward2st: '0x466C...13Ac',
          reward3st: '0x466C...13Ac',
        }
      ],
      count: 0,
      address: null,
    }
  },
  mounted() {
    $('.list-container li').css('min-height', $('.list-container').width() / 3);
    $(window).resize(function () {
      $('.list-container li').css('min-height', $('.list-container').width() / 3);
    })
    console.log($('.list-container').width() )
  },
  watch: {
    address(){
      this.$nextTick(()=>{
        $('.list-container li').css('min-height', $('.list-container').width() / 3);
      })
    }
  },
  methods: {
    /**
     * @event navChangeIndex
     * @desc Toggle navigation Event
     * */
    navChangeIndex(index){
      this.showIndex=index
      this.$nextTick(()=>{
        $('.list-container li').css('min-height', $('.list-container').width() / 3);
      })
    },

    /**
     * @event toDetails
     * @desc Go to details page
     * @param id <Number>
     * */
    toDetails(id){

    },
    getAccounts(accounts) {
      console.log(accounts)
      this.address = accounts;
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
<style scoped lang="less">
@import "index.less";
</style>
<style lang="less">
@import "@/styles/jquery.datetimepicker.less";
</style>
