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
        <div class="section-title">Word in wallet</div>
        <ul class="list" v-if="address!=null">
          <li :class="index==0?'active':''" v-for="(item,index) in wordList" :key="index">
            <text>{{ item.text }}</text>
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
          </li>
        </ul>
        <div v-else>
          <no-wallet  @getAccounts='getAccounts' :user="address"></no-wallet>
        </div>
      </section>
      <!--sentence-container-->
      <section class="user-section sentence-container">
        <div class="section-title">Details of the contest</div>
        <div class="list ">
          <div v-if="address==null">
          </div>
          <!--S create-container-->
          <div v-else class="create1-container">
            <h2 class="create1-title">Word "FUCK" Sentence Contest</h2>
            <dl>
              <dd class="wrapper-flex-row show-line" :class="input1Active==true?'active':''">
                <div class="dd-tit">Competition introduction:</div>
                <div :class="[input1.length>0?'animation':'','text-container text text1']">
                  <input spellcheck='false' type="text" placeholder="" v-model="input1" class="text "
                         maxlength="200"
                         @blur="blurEvent(this.input1,1)" @focus="focusEvent(this.input1,1)">
                  <h6 class="placeholder">NFT Contract address</h6>
                </div>
                <div class="len">{{ input1.length }}/200</div>
              </dd>
              <dd class="wrapper-flex-row show-line" :class="[input2Active?'active':'',doing1?'doing':'',ended1?'doing active':'green-input']">
                <div class="dd-tit">Add 1st Prize:</div>
                <div :class="[input2.length>0?'animation':'','text-container text text2']">
                  <input spellcheck='false' type="text" placeholder="" v-model="input2" class="text text2"
                         @blur="blurEvent(this.input2,2)" @focus="focusEvent(this.input2,2)">
                  <h6 class="placeholder">NFT Contract address</h6>
                </div>
                <a class="icon">
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </dd>
              <dd class="wrapper-flex-row show-line" :class="[input3Active?'active':'',doing2?'doing':'',ended2?'doing active':'green-input']">
                <div class="dd-tit">Add 2st Prize:</div>
                <div :class="[input3.length>0?'animation':'','text-container text text2']">
                  <input spellcheck='false' type="text" placeholder="" v-model="input3" class="text text2"
                         @blur="blurEvent(this.input3,3)" @focus="focusEvent(this.input3,3)">
                  <h6 class="placeholder">NFT Contract address</h6>
                </div>
                <a class="icon">
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </dd>
              <dd class="wrapper-flex-row show-line" :class="[input4Active?'active':'',doing3?'doing':'',ended3?'doing active':'green-input']">
                <div class="dd-tit">Add 3st Prize:</div>

                <div :class="[input4.length>0?'animation':'','text-container text text2']">
                  <input spellcheck='false' type="text" placeholder="" v-model="input4" class="text text2"
                         @blur="blurEvent(this.input4,4)" @focus="focusEvent(this.input4,4)">
                  <h6 class="placeholder">NFT Contract address</h6>
                </div>
                <a class="icon">
                  <div>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </dd>
              <dd class="wrapper-flex-row data-sum">
                <div class="show-line data wrapper-flex-row" :class="input5Active || input5!=''?'active':''">
                  <div class="wrapper-flex-row">
                    <div class="dd-tit" @click="this.data1Show?this.data1Show=false:''">Starting time:</div>
                    <div class="re">
                      <div :class="[input5.length>0?'animation':'','text-container text text2']">
                        <input spellcheck='false' type="text" placeholder="" v-model="input5" class="text text2" readonly
                               @click="focusEvent(this.input5,5)" id="date-text1-2">
                        <h6 class="placeholder">Select a start time</h6>
                      </div>
                      <div id="demo1-2" class="data-model" v-show="data1Show"></div>
                    </div>
                  </div>
                </div>
                <input spellcheck='false' type="text" readonly value="-" class="span"/>
                <div class="show-line data wrapper-flex-row" :class="input6Active || input6!=''?'active':''">
                  <div class="wrapper-flex-row">
                    <div class="dd-tit" @click="this.data2Show?this.data2Show=false:''">Ending time:</div>
                    <div class="re">
                      <div :class="[input6.length>0?'animation':'','text-container text text2']">
                        <input spellcheck='false' type="text" placeholder="" v-model="input6" class="text text3" readonly
                               @click="focusEvent(this.input6,6)">
                        <h6 class="placeholder">Select an end time</h6>
                      </div>
                      <div id="demo1-3" class="data-model" v-show="data2Show"></div>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
            <a class="button-game" :class="[data1Show||data2Show?'addTop':'']">Start the game!</a>
          </div>
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
      count: 0,
      address: null,
      input1Active: false,
      input1: '',
      input2Active: false,
      input2: '',
      input3Active: false,
      input3: '',
      input4Active: false,
      input4: '',
      input5Active: false,
      input5: '',
      input6Active: false,
      input6: '',
      doing1: false,
      doing2: false,
      doing3: false,
      ended1: false,
      ended2: false,
      ended3: false,
      data1Show: false,
      data2Show: false,
    }
  },
  mounted() {
  },
  watch: {
    // input1(){
    //   this.input1=this.input1.replace(/[^\d\.\d]/g,"");
    // }
    input2(n, o) {
      this.input2 = this.input2.replace(/[\u4e00-\u9fa5/\s+/]|[^a-zA-Z0-9\u4E00-\u9FA5]/g, "")
      const reg = /^0x[0-9a-fA-F]{40}$/;
      if (reg.test(n)) {
        this.doing1 = true;
      } else {
        this.doing1 = false;
      }
    },
    input3(n, o) {
      this.input3 = this.input3.replace(/[\u4e00-\u9fa5/\s+/]|[^a-zA-Z0-9\u4E00-\u9FA5]/g, "")
      const reg = /^0x[0-9a-fA-F]{40}$/;
      if (reg.test(n)) {
        this.doing2 = true;
      } else {
        this.doing2 = false;
      }
    },
    input4(n, o) {
      this.input3 = this.input3.replace(/[\u4e00-\u9fa5/\s+/]|[^a-zA-Z0-9\u4E00-\u9FA5]/g, "")
      const reg = /^0x[0-9a-fA-F]{40}$/;
      if (reg.test(n)) {
        this.doing3 = true;
      } else {
        this.doing3 = false;
      }
    },
  },
  methods: {
    getAccounts(accounts) {
      console.log(accounts)
      this.address = accounts;
    },
    blurEvent(input, clas) {
      console.log(input)
      if (input == '') {
        if (clas == 1) {
          this.input1Active = false
        }
        if (clas == 2) {
          this.input2Active = false
        }
        if (clas == 3) {
          this.input3Active = false
        }
        if (clas == 4) {
          this.input4Active = false
        }
        if (clas == 5) {
          this.input5Active = false
        }
        if (clas == 6) {
          this.input6Active = false
        }
      } else {
        if (clas == 1) {
          this.input1Active = true
        }
        if (clas == 2) {
          this.input2Active = false
        }
        if (clas == 3) {
          this.input3Active = false
        }
        if (clas == 4) {
          this.input4Active = false
        }
        if (clas == 5) {
          this.input5Active = true
        }
        if (clas == 6) {
          this.input6Active = true
        }
      }
    },
    focusEvent(input, clas) {
      var that = this;
      this.$nextTick(() => {
        if (clas == 1) {
          this.input1Active = true
        }
        if (clas == 2) {
          this.input2Active = true
        }
        if (clas == 3) {
          this.input3Active = true
        }
        if (clas == 4) {
          this.input4Active = true
        }
        if (clas == 5) {
          this.input5Active = true
          this.data1Show = true;
          $('#demo1-2').datetimepicker({
            date: new Date(),
            viewMode: 'YMDHMS',
            startDate: new Date(),
            onDateChange: function () {
              // that.data1Show = false;
              that.input5Active = true
              let d1 = this.getValue()
              that.startDate = d1;
              that.input5 = (d1.getUTCDate() < 10 ? '0' + (d1.getUTCDate()) : (d1.getUTCDate())) + '/' + (d1.getUTCMonth() < 9 ? '0' + (d1.getUTCMonth() + 1) : (d1.getUTCMonth() + 1)) + '/' + d1.getUTCFullYear() + ' ' + (d1.getUTCHours() < 10 ? '0' + d1.getUTCHours() : d1.getUTCHours()) + ':' + (d1.getUTCMinutes() < 10 ? '0' + d1.getUTCMinutes() : d1.getUTCMinutes()) + ':' + (d1.getUTCSeconds() < 10 ? '0' + d1.getUTCSeconds() : d1.getUTCSeconds());
            },
            onOk: function () {
              that.data1Show = false;
              if (that.input5 == '') {
                let d1 = this.getValue();
                that.startDate = d1;
                that.input5 = (d1.getUTCDate() < 10 ? '0' + (d1.getUTCDate()) : (d1.getUTCDate())) + '/' + (d1.getUTCMonth() < 9 ? '0' + (d1.getUTCMonth() + 1) : (d1.getUTCMonth() + 1)) + '/' + d1.getUTCFullYear() + ' ' + (d1.getUTCHours() < 10 ? '0' + d1.getUTCHours() : d1.getUTCHours()) + ':' + (d1.getUTCMinutes() < 10 ? '0' + d1.getUTCMinutes() : d1.getUTCMinutes()) + ':' + (d1.getUTCSeconds() < 10 ? '0' + d1.getUTCSeconds() : d1.getUTCSeconds());
                that.input5Active = true
              } else {
                that.input5Active = false
              }
            }
          });
        }
        if (clas == 6) {
          if (that.startDate == null) {
            this.$notify({
              text: 'Please choose a start date first!',
              type: 'warn',
              duration: 3000,
            });
            return
          }
          this.input6Active = true
          that.data2Show = true;
          let dateTime = that.startDate.setDate(that.startDate.getDate() + 1);
          dateTime = new Date(that.startDate);
          $('#demo1-3').datetimepicker({
            date: dateTime,
            startDate: dateTime,
            viewMode: 'YMDHMS',
            todayBtn: false,
            onDateChange: function () {
              // that.data2Show = false;
              that.input6Active = true
              let d1 = this.getValue()
              that.input6 = (d1.getUTCDate() < 10 ? '0' + (d1.getUTCDate()) : (d1.getUTCDate())) + '/' + (d1.getUTCMonth() < 9 ? '0' + (d1.getUTCMonth() + 1) : (d1.getUTCMonth() + 1)) + '/' + d1.getUTCFullYear() + ' ' + (d1.getUTCHours() < 10 ? '0' + d1.getUTCHours() : d1.getUTCHours()) + ':' + (d1.getUTCMinutes() < 10 ? '0' + d1.getUTCMinutes() : d1.getUTCMinutes()) + ':' + (d1.getUTCSeconds() < 10 ? '0' + d1.getUTCSeconds() : d1.getUTCSeconds());

            },
            onOk: function () {
              that.data2Show = false;
              if (that.input6 == '') {
                let d1 = this.getValue()
                that.input6 = (d1.getUTCDate() < 10 ? '0' + (d1.getUTCDate()) : (d1.getUTCDate())) + '/' + (d1.getUTCMonth() < 9 ? '0' + (d1.getUTCMonth() + 1) : (d1.getUTCMonth() + 1)) + '/' + d1.getUTCFullYear() + ' ' + (d1.getUTCHours() < 10 ? '0' + d1.getUTCHours() : d1.getUTCHours()) + ':' + (d1.getUTCMinutes() < 10 ? '0' + d1.getUTCMinutes() : d1.getUTCMinutes()) + ':' + (d1.getUTCSeconds() < 10 ? '0' + d1.getUTCSeconds() : d1.getUTCSeconds());
                that.input6Active = true
              } else {
                that.input6Active = false
              }
            }
          });
        }
        // console.log(indexs,this.input1Active)
      })
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
