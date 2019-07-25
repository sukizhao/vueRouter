<template>
  <div style="height:100%;">
    <!-- 监听子组件的showCityName事件 -->
    <trainCity @showCityName="updateCity"></trainCity>
    <input>
    <itemtable></itemtable>
    <countryLink></countryLink>
  </div>
</template>
<script>
import trainCity from './trainCity.vue'
import countryLink from './country-link.vue'
import itemtable from './itemtable'
export default {
  name: 'ingyesi',
  components: { trainCity, countryLink, itemtable },
  data() {
    return {
      toCity: '北京'
    }
  },
  methods: {
    updateCity(data) {
      //触发子组件城市选择-选择城市的事件
      this.toCity = data.cityname //改变了父组件的值
      console.log('toCity:' + this.toCity)
    }
  },
  mounted() {
    this.bus.$on('openMenu', msg => {
      console.log(msg)
    })
  }
}
</script>
<style lang="">
html,
body {
  height: 100%;
}
</style>



