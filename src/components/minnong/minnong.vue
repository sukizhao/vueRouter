<template>
  <div>
    <h1>悯农</h1>
    <p>锄禾日当午，</p>
    <p>汗滴禾下土。</p>
    <p>谁知盘中餐，</p>
    <p>粒粒皆辛苦。</p>
    <button @click="diyfun">点击触发</button>
    <child :zsq="sukiTitle"></child>

    <div id="news">
      我是新闻组件 --{{this.$store.state.count}}----实际数字{{count}}---组建内部属性{{localComputed}}
      <br>
      <button @click="incCount()">增加store.state数量</button>
      <button @click="userName()">点击赋用户名:{{this.$store.state.user}}</button>
    </div>
    <!-- 这里是父组件，定义值必须在这里绑定一下，再去child子组件中接收 -->
  </div>
</template>
<script>
import { myfun } from './minnong.js'
import child from './child.vue'

export default {
  name: 'minong',
  components: {
    child
  },
  data() {
    return {
      sukiTitle: '玉面小达摩'
    }
  },
  methods: {
    diyfun() {
      myfun()
    },
    incCount() {
      this.$store.commit('incCount')
      console.log(this.$store.state.count)
    },
    userName(){
      this.$store.commit('user','zhaoshuqi')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    localComputed() {
      return this.count + 5
    }
  },
  mounted() {
    // 接收信号openMenu
    this.bus.$on('openMenu', msg => {
      console.log(msg)
    })
  }
  // 最好在组件销毁前清除事件监听
  // beforeDestroy() {
  //   this.$bus.$off("openMenu");
  // }
}
</script>