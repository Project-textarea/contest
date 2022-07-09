<template>
  <div>
    <div class="container flex flex-center">
      <!-- user-section-->
      <section class="user-section">
        <div class="user-wallet">
          <a class="connect-wallet" @click="getUserInfo()" v-if="user==null">Connect Wallet</a>
          <div v-else class="flex flex-zBetween flex-ac">
            <div class="address">
              {{ hideAddress(user) }}
            </div>
            <a class="logout">log out</a>
          </div>
        </div>
        <div class="user-nav-list">
          <a :class="[navIndex===index?'active':'']" v-for="(item,index) in navList" :key="index" @click="linkTo(item)">{{
              item.name
            }}</a>
        </div>
      </section>
      <!-- user-section-->
      <section class="user-section nft-search-section">
        <div class="section-title">Word in game</div>
        <div class="form-container wrapper-flex-row">
          <a href="#">
            <img src="@/assets/images/icon-search.png" width="100%"/>
          </a>
          <input type="text" class="text"/>
        </div>
        <ul class="list">
          <li :class="index==0?'active':''" v-for="(item,index) in wordList" :key="index">
            <text>{{ item.text }}</text>
            <div class="share">
              <a href="#" target="_blank">
                <span class="iconfont">&#xe60e;</span>
              </a>
              <a href="#" target="_blank">
                <span class="iconfont">&#xe882;</span>
              </a>
              <a href="#" target="_blank">
                <span class="iconfont">&#xe620;</span>
              </a>
            </div>
          </li>
        </ul>
      </section>
      <section class="user-section sentence-container">
        <div class="section-title">Sentences for competition</div>
        <div class="list ">
          <ul class="wrapper-flex-wrap list-container">
            <li>
              <div class="desc">
                <div class="wrapper-flex-row">
                  <i class="icon">
                    <img src="@/assets/images/icon-1.png" width="100%"/>
                  </i>
                  <div class="name">1st: 0x466C...13Ac<br/>
                    2st: 0x4536...1721<br/>
                    3st: 0x5678...1124
                  </div>
                </div>
                <div class="wrapper-flex-row">
                  <i class="icon">
                    <img src="@/assets/images/icon-2.png" width="100%"/>
                  </i>
                  <div class="name">36:13:45</div>
                </div>
                <div class="wrapper-flex-row">
                  <i class="icon">
                    <img src="@/assets/images/icon-3.png" width="100%"/>
                  </i>
                  <div class="name">TEXT; BAYC</div>
                </div>
                <a class="button">participate in the competition</a>
              </div>
            </li>
            <li>
              <div class="content">
                <div class="info">Textarea is a decentralized
                  text derivative of NFT,
                  which provides NFT with
                  more value.
                </div>
                <div class="doing wrapper-flex-row">
                  <div class="share">
                    <a href="#" target="_blank">
                      <span class="iconfont">&#xe60e;</span>
                    </a>
                    <a href="#" target="_blank">
                      <span class="iconfont">&#xe882;</span>
                    </a>
                    <a href="#" target="_blank">
                      <span class="iconfont">&#xe620;</span>
                    </a>
                  </div>
                  <div class="vote">vote</div>
                </div>
              </div>
            </li>
            <li v-for="(item,index) in sentenceList" :key="index">
              <div class="content">
                <div class="info">{{item.text}}
                </div>
                <div class="doing wrapper-flex-row">
                  <div class="share">
                    <a href="#" target="_blank">
                      <span class="iconfont">&#xe60e;</span>
                    </a>
                    <a href="#" target="_blank">
                      <span class="iconfont">&#xe882;</span>
                    </a>
                    <a href="#" target="_blank">
                      <span class="iconfont">&#xe620;</span>
                    </a>
                  </div>
                  <div class="vote">vote</div>
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
import $store from '@/store/index.js'
import {hideAddressEvent} from '@/assets/js/filters.js'
import {computed} from 'vue';
import $ from 'jquery'

export default ({
  data() {
    return {
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
    }
  },
  mounted() {
    $('.sentence-container .list li').css('min-height',$('.sentence-container .list').width()/3);
    $(window).resize(function () {
      $('.sentence-container .list li').css('min-height',$('.sentence-container .list').width()/3);
    })
  },
  setup() {
    // let count = computed(()=>{
    //   return $store.state.count
    // })
    // const addCount = ()=>{
    //   $store.commit('increment',2) // 同步
    // }
    let user = computed(() => {
      return $store.state.user
    })
    const getUserInfo = () => {
      $store.dispatch('getUserInfo');
    }
    const hideAddress = (accouts) => {
      return hideAddressEvent(accouts)
    }
    return {
      user,
      getUserInfo,
      hideAddress
    };
  },
})
</script>
<style scoped lang="less">
.user-section {
  width: 18.5%;
  height: 100vh;
  background: @primaryBg;
  border-right: 1px solid @lineColor;
  box-sizing: border-box;

  .user-wallet, .section-title {
    padding: @navPadding;
    border-bottom: 1px solid @lineColor;

    a.connect-wallet {
      width: 195px;
      height: 45px;
      line-height: 45px;
      background: @primaryButtonBg;
      font-size: 20px;
      color: @primaryFontColor;
      text-align: center;
      border-radius: 5px;
    }

    .address {
      padding: 14px 0 13px;
      font-size: @font18;
      color: @primaryFontColor;
    }

    .logout {
      font-size: @font18;
      color: @primaryFontColor;
      background: #720303;
      padding: 7px 15px 10px;
      line-height: 1;
      border-radius: 5px;
      display: block;
    }
  }

  .section-title {
    font-size: @font26;
    text-align: center;
    color: @primaryFontColor;
    background: @primaryBg;
    line-height: 45px;
  }

  .user-nav-list {
    a {
      border-bottom: 1px solid @lineColor;
      background: #000000;
      font-size: @font24;
      width: 100%;
      display: block;
      padding: @navPadding;
      color: @ButtonActiveBg;
      box-sizing: border-box;
      line-height: 1;

      &:hover {
        background: @ButtonHoverBg;
      }

      &.active {
        background: @ButtonActiveBg;
        color: @primaryFontColor;
      }
    }
  }
}

.nft-search-section {
  background: #000000;

  .form-container {
    padding: @buttonPadding;
    box-sizing: border-box;
    border-bottom: 1px solid @lineColor;
    position: relative;

    a {
      margin-right: 10px;
    }

    input {
      background: transparent;
      border: 0;
      font-size: @font24;
      color: @primaryFontColor;
    }
  }

  .list {
    height: calc(100vh - 225px);
    overflow: auto;
    box-sizing: border-box;

    li {
      padding: @buttonPadding;
      box-sizing: border-box;
      border-bottom: 1px solid @lineColor;
      position: relative;
      cursor: pointer;

      text {
        font-size: @font24;
        color: @ButtonActiveBg;
        width: 100%;
      }

      .share {
        position: absolute;
        top: 30px;
        right: 25px;
        opacity: 0;

        a {
          width: 25px;
          margin-left: 10px;
          color: #022223;

          .iconfont {
            font-size: 24px;
          }
        }
      }

      &:hover {
        background: @ButtonHoverBg;

        .share {
          opacity: 1;

          a {
            color: #000000;
          }
        }
      }

      &.active {
        background: @ButtonActiveBg;

        text {
          color: #ffffff;
        }

        .share {
          opacity: 1;

          a {
            color: @ButtonHoverBg;
          }
        }
      }
    }
  }
}

.sentence-container {
  width: 63%;
  background: #000000;

  .list-container {
    justify-content: flex-start;
    align-items: normal;
    margin-bottom: 10px;
  }

  .list {
    height:calc(100vh - 142px);
    overflow: auto;
    box-sizing: border-box;

    > div {
      align-items: normal;
      justify-content: flex-start;

    }

    li {
      width: 33.33%;
      box-sizing: border-box;
      padding: @contentPadding;
      color: @primaryFontColor;
      font-size: @font20;
      line-height: 1.5;
      border-top: 1px solid #191717;
      border-left: 1px solid #191717;
      position: relative;
      overflow: hidden;

      > div {
        justify-content: flex-start;
        align-items: normal;
        margin-bottom: 10px;
      }

      &:nth-child(3n - 2) {
        border-left: 0;
      }

      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3) {
        border-top: 0;
      }

      .icon {
        margin-right: 20px;
        margin-top: 3px;
      }

      .desc {
        position: relative;
        padding-bottom: 110px;

        > div {
          justify-content: flex-start;
          align-items: normal;
        }
      }

      .button {
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 5px;
        line-height: 55px;
        padding: 0 20px;
        box-sizing: border-box;
        display: block;
        width: 100%;
        background: @ButtonHoverBg;
        font-size: @font16;
        text-align: center;

        &:hover {
          background: @ButtonActiveBg;
        }
      }

      .content {
        //padding-bottom: 110px;
        .info{
          word-break: break-all;
        }
      }

      .doing {
        position: absolute;
        width:100%;
        bottom: -100px;
        box-sizing: border-box;
        padding:0 20px 25px 20px;
        transition: all .5s ease-in-out;
        background: rgba(0,0,0,.5);
        left:0;
        .share {
          a {
            background: @ButtonHoverBg;
            color: @primaryFontColor;
            padding: 5px 13px;
            line-height: 35px;
            border-radius: 5px;
            margin-right: 3px;

            span.iconfont {
              font-size: 24px;
            }
            &:hover{
              background: @ButtonActiveBg;
            }
          }
        }
      }
      &:hover{
       .doing{
         bottom: 0;
        }
      }
      .vote {
        background: @ButtonHoverBg;
        padding: 5px 10px;
        width: 110px;
        border-radius: 5px;
        box-sizing: border-box;
        text-align: center;
        line-height: 35px;
        cursor: pointer;
        &:hover{
          background: @ButtonActiveBg;
        }
      }
    }
  }
}

@media screen and (max-width: 1660px) {
  .user-section {
    .user-wallet, .section-title {
      padding: 25px 15px;

      a.connect-wallet {
        width: 150px;
        height: 32px;
        line-height: 32px;
        font-size: 18px;
      }
      .address {
        padding: 8px 0;
        font-size: @font16;
      }

      .logout {
        font-size: @font16;
        padding: 3px 8px 5px;
      }
    }

    .section-title {
      font-size: @font24;
      line-height: 32px;
    }

    .user-nav-list {
      a {
        font-size: @font20;
        padding: 25px 15px;
      }
    }
  }

  .nft-search-section {

    .form-container {
      padding: 15px 12px;
      a {
        margin-right: 6px;
      }

      input {
        font-size: @font20;
      }
    }

    .list {
      height: calc(100vh - 142px);
      overflow: auto;
      box-sizing: border-box;

      li {
        padding: 20px 12px;

        text {
          font-size: @font20;
        }

        .share {
          top: 18px;
          right: 10px;

          a {
            margin-left: 4px;
            .iconfont {
              font-size: 20px;
            }
          }
        }

        &:hover {
          background: @ButtonHoverBg;

          .share {
            opacity: 1;

            a {
              color: #000000;
            }
          }
        }

        &.active {
          background: @ButtonActiveBg;

          text {
            color: #ffffff;
          }

          .share {
            opacity: 1;

            a {
              color: @ButtonHoverBg;
            }
          }
        }
      }
    }
  }

  .sentence-container {

    .list-container {
      margin-bottom: 5px;
    }

    .list {
      height:calc(100vh - 83px);

      li {
        font-size: @font18;
padding: 10px 13px;
        > div {
          margin-bottom: 5px;
        }


        .icon {
          margin-right: 12px;
          width: 20px;
          margin-top: 3px;
        }

        .desc {
          padding-bottom: 70px;
        }

        .button {
          line-height: 35px;
          padding: 0 5px;
          font-size: 14px;
        }

        .doing {
          bottom: -130px;
          padding: 10px 13px;
          .share {
            a {
              padding: 5px 8px;
              line-height: 20px;
              margin-right: 2px;

              span.iconfont {
                font-size: 20px;
              }
            }
          }
        }
        .vote {
          padding: 5px 8px;
          width: 86px;
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
  .sentence-container .list li .content .info{
    font-size: 14px;
  }
}
@media screen and (max-width: 1100px) {
  .sentence-container .list li .content .info,.sentence-container .list li .desc{
    font-size: 13px;
    line-height: 1.5;
  }
  .sentence-container .list li .button{
    font-size: 12px;
  }
  .nft-search-section .list {
     height: calc(100vh - 153px);
   }
  .sentence-container .list{
    height: calc(100vh - 105px);
  }
}
</style>
