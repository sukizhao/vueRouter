<template>
  <div class="navagation">
    <router-link to="/mycalendar">日历</router-link>
    <router-link to="/jingyesi">静夜思</router-link>
    <router-link to="/zhaoshuqi">悯农</router-link>
    <router-link to="/eee">鹅鹅鹅</router-link>
    <router-link to="/tree">机构树</router-link>
    <router-link to="/print">打印</router-link>
    <router-link to="/chacao">插槽和mixins应用</router-link>
    <router-link to="/biaoge">表格</router-link>
  </div>
</template>
<script>
export default {
  name: "daohang",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navagation {
  background: #09c;
}
.navagation a {
  display: inline-block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-left: 10px;
  color: #000;
  text-decoration: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-left: 10px;
  color: #000;
}
a {
  color: #42b983;
}
</style>
