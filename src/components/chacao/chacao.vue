<template>
  <div>
      <p>使用slot分发内容</p>
      <child></child>
      <child>   
          <div>我是父页面插槽里面的内容</div>
      </child>
      <newImage></newImage>
      <twoButton></twoButton>
  </div>
</template>
<script>
import child from './child'
import {myMixin} from '@/mixins/mixin'
export default {
   name: 'chacao',
     // 用了mixins就可以不再重复引入和声明组建了，可以直接调用里面的方法
   mixins: [myMixin],
   components: {
    child
  },
  data() {
    return {
     
    }
  },
  methods: {
   
  },
  mounted() {
    // 用了mixins这里就可以直接调用mixin里面的函数和组件了
      this.setChoices()
      this.dayin()

  }
}
</script>
<style>
</style>