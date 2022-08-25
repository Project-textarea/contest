<template>
    <span :endTime="endTime" :callback="callback" :endText="endText">
       {{content}}
    </span>
</template>
<script>
export default {
  data(){
    return {
      content: 'Loading...',
      timeout:null,
    }
  },
  props:{
    endTime:{
      type: Number,
      default :''
    },
    endText:{
      type : String,
      default:'ended'
    },
    callback : {
      type : Function,
      default :''
    }
  },
  mounted () {
    this.countdowm(this.endTime)
  },
  // Finally clear the timer during the beforeDestroy() life cycle:
  beforeDestroy() {
    clearInterval(this.timeout);
    this.timeout = null;
  },
  methods: {
    countdowm(timestamp){
      let self = this;
      this.timeout = setInterval(function(){
        let nowTime = new Date();
        // let endTime = new Date(new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' '));
        let endTime = new Date(new Date(parseInt(timestamp)).toLocaleString().replace(/:\d{1,2}$/,' '));
        let t = endTime.getTime() - nowTime.getTime();
        // let endTime = new Date(timestamp);
        // let t = Number(timestamp) - nowTime.getTime();
        // console.log(endTime)
        if(t>0){
          let day =Math.floor(t/86400000);
          let hour=Math.floor((t/3600000)%24);
          let min=Math.floor((t/60000)%60);
          let sec=Math.floor((t/1000)%60);
          hour = hour < 10 ? "0" + hour : hour;
          min = min < 10 ? "0" + min : min;
          sec = sec < 10 ? "0" + sec : sec;
          let format = '';
          // if(day > 0){
          //   format =  `CountDown:${day} Days ${hour} Hour ${min} Minus ${sec} Sec`;
          // }
          // if(day <= 0 && hour > 0 ){
          //   format = `CountDown: ${hour} Hour ${min} Minus ${sec} Sec`;
          // }
          // if(day <= 0 && hour <= 0){
          //   format = `CountDown:${min} Minus ${sec} Sec`;
          // }
          format =`${day*24 + hour}: ${min}: ${sec}`;
          self.$nextTick(()=>{
            self.content = format;
            // console.log("self.content=>",self.content)
          })
        }else{
          self.$nextTick(()=>{
            clearInterval(this.timeout);
            self.content = self.endText;
            self._callback();
            // console.log("self._callback=>",self.content)
          })
        }
        self.$forceUpdate()
      },1000);
    },
    _callback(){
      if(this.callback && this.callback instanceof Function){
        this.callback(...this);
      }
    }
  }
}
</script>
<style scoped>
*{
  color: #ffffff;
}
</style>
