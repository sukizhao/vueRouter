<template>
  <div>
    <button type @click="gettext">点击</button>
    <div id="printTest" style="text-align:center">
　　　　　<p>锄禾日当午</p>
　　　　　<p>汗滴禾下土 </p>
　　　　　<p>谁知盘中餐</p>
　　　　　<p>粒粒皆辛苦</p>
　　　</div>
　　　<button v-print="'#printTest'">打印</button>
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