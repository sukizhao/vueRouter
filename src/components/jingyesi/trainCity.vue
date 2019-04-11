<template>
  <div class="train-city">
    <span @click="select(`大连`)">大连</span>
  </div>
</template>  
<script>
export default {
  name: "trainCity",
  methods: {
    select(val) {
      let data = {
        cityname: val
      };
      this.$emit("showCityName", data); //select事件触发后，自动触发父组件的showCityName事件
    }
  }
};
</script>  