<template>
  <div id="app">
    <v-nav></v-nav>
    <router-view/>
  </div>
</template>
<script>
import daohang from "./components/daohang.vue";
export default {
  name: 'App',
  components:{
  // 视图模板名称:对应的是一个组件
  "v-nav":daohang,
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
