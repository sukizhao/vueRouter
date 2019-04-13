<template>
  <div>
    <h1>我是子组件</h1>
    <p>{{zsq}}-这里可以直接接收父组件的值</p>
    <button @click="showTitle">点击进行bus传值</button>
  </div>
</template>
<script>
export default {
  props: {
    zsq: {
      //此处为要接收的值，zsq为接收过来key
      type: String, //key不能乱写
      default: ""
    }
  },
  methods: {
    showTitle: function() {
      // 点击接收父组件值或者在上面直接接收也行
      console.log(this.zsq);
      this.bus.$emit("openMenu", true); //相当于这个车在emit分发信号，父组件就可以去接收openMenu了
    }
  }
};
</script>

