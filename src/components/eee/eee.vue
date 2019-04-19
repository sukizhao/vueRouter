<template>
  <div>
    <button type @click="gettext">点击</button>
  </div>
</template>
<script>
import { password } from "@/libs/password";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    gettext() {
      this.nodeList = this.list;
      console.log(this.list);
      this.nodeList.splice(1, 1);
    }
  },
  mounted() {
    console.log(password("sukizhao"));
  }
};
</script>
<style>
</style>