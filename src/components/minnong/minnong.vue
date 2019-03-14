<template>
  <div>
    <h1>悯农</h1>
    <p>锄禾日当午，</p>
    <p>汗滴禾下土。</p>
    <p>谁知盘中餐，</p>
    <p>粒粒皆辛苦。</p>
    <button @click="diyfun">点击触发</button>
    <child :zsq="sukiTitle"></child>
    <!-- 这里是父组件，定义值必须在这里绑定一下，再去child子组件中接收 -->
  </div>
</template>
<script>
import { myfun } from "./minnong.js";
import child from "./child.vue";
export default {
  name: "minong",
  components: {
    child
  },
  data() {
    return {
      sukiTitle: "玉面小达摩"
    };
  },
  methods: {
    diyfun: function() {
      myfun();
    }
  }
};
</script>