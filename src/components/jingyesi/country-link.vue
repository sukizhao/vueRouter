<template>
  <div class="country_weblink" v-if="showCountry" id="codefans_net">
    <div class="country_box">
      <span class="close_country" @click="closeCountry">
        <Icon class="close_country" @click="closeCountry" type="ios-close"></Icon>
      </span>

      <a href="http://www.gjzwfw.gov.cn" target="blank"><img :src="countryimg" alt></a>
      <!-- <span class="title_tips">中国政务服务平台上线试运行</span> -->
    </div>
  </div>
</template>
<script>
import countryimg from '@/assets/images/country_weblink.png'
export default {
  data() {
    return {
      countryimg: countryimg,
      showCountry: true
    }
  },
  methods: {
    closeCountry() {
      this.showCountry = false
    },
    floatAD() {
      var x = 0,
        y = 0
      var xin = true,
        yin = true
      var step = 1
      var delay = 30
      var obj = document.getElementById('codefans_net')
      function float() {
        var L = 0
        var T = 0
        var R = document.body.clientWidth - obj.offsetWidth
        var B = document.body.clientHeight - obj.offsetHeight
        // obj.style.left = x + document.body.scrollLeft
        $('#codefans_net').css('left', x + document.body.scrollLeft + 'px')
        // obj.style.top = y + document.body.scrollTop
        $('#codefans_net').css('top', y + document.body.scrollTop + 'px')
        //console.log(x +document.body.scrollLeft,y +document.body.scrolTop)
        x = x + step * (xin ? 1 : -1)
        if (x < L) {
          xin = true
          x = L
        }
        if (x > R) {
          xin = false
          x = R
        }
        y = y + step * (yin ? 1 : -1)
        if (y < T) {
          yin = true
          y = T
        }
        if (y > B) {
          yin = false
          y = B
        }
      }
      var itl = setInterval(float, delay)
      obj.onmouseover = function() {
        clearInterval(itl)
      }
      obj.onmouseout = function() {
        itl = setInterval(float, delay)
      }
      this.$once('hook:beforeDestroy', () => {
        clearInterval(itl)
      })
    }
  },
  mounted() {
    this.floatAD()
  },
  beforeRouteLeave(to, from, next) {}
}
</script>

<style scoped lang="less">
.country_weblink {
  width: 400px;
  height: 200px;
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100000;
  .country_box {
    position: relative;
    width: 100%;
    height: 100%;
    .close_country {
      position: absolute;
      right: 0;
      top: 0;
      font-size: 26px;
      font-weight: bold;
      cursor: pointer;
      color: #666;
      background: rgba(255, 255, 255, 0.8);
    }
    img {
      width: 100%;
      float: left;
    }
    a {
      display: inline-block;
      width: 400px;
      height: 200px;
    }
    .title_tips {
      display: inline-block;
      width: 100%;
      background: rgba(255, 237, 221, 1);
      color: #666;
      line-height: 25px;
      padding-left: 20px;
    }
  }
}
</style>

