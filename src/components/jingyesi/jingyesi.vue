<template>
  <div>
    <!-- 监听子组件的showCityName事件 -->
    <trainCity @showCityName="updateCity"></trainCity>
  </div>
</template>
<script>
import trainCity from "./trainCity.vue";
export default {
  name: "ingyesi",
  components: { trainCity },
  data() {
    return {
      toCity: "北京"
    };
  },
  methods: {
    updateCity(data) {
      //触发子组件城市选择-选择城市的事件
      this.toCity = data.cityname; //改变了父组件的值
      console.log("toCity:" + this.toCity);
    }
  }
};
</script>



