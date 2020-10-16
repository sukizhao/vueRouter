<template>
  <div>
    <h1>我是子组件</h1>
    <p>{{zsq}}-这里可以直接接收父组件的值</p>
    <button @click="showTitle">点击进行bus传值</button>
    <h3>provide父组件给子孙组件传值{{userName}}</h3>
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
  inject : {                   //inject后面可以是一个对象
        userName : {
            default : '默认值'  //指定默认值
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

