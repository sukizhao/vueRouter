<template>
  <div>
    <h1>悯农</h1>
    <p>锄禾日当午，</p>
    <p>汗滴禾下土。</p>
    <p>谁知盘中餐，</p>
    <p>粒粒皆辛苦。</p>
    <button @click="diyfun">点击触发</button>
  </div>
</template>
<script>
import { myfun } from "./minnong.js";
export default {
  name: "minong",
  methods: {
    diyfun: function() {
      myfun();
    }
  }
};
</script>