<template>
  <div style="height:100%;">
    <button type @click="gettext">点击</button>
    <div id="printTest" style="text-align:center">
      　　　　　<p>锄禾日当午</p>
      　　　　　<p>汗滴禾下土 </p>
      　　　　　<p>谁知盘中餐</p>
      　　　　　<p>粒粒皆辛苦</p>
      　　　</div>
    <!-- 　　　<button v-print="'#printTest'">打印</button> -->
    <button @click="getFunction">调用新函数</button>
  </div>
</template>
<script>
import { password } from '@/libs/password'
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    gettext() {
      this.nodeList = this.list
      console.log(this.list)
      this.nodeList.splice(1, 1)
    },
    getFunction(){
      // 引用了mixins那么里面的函数也可以直接调用了
        this.setChoices()
    }
  },
  mounted() {
    console.log(password('sukizhao'))
  }
}
</script>
<style>
</style>