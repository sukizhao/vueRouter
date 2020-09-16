<template>
  <div>
      <p>使用slot分发内容</p>
      <child></child>
      <child>   
          <div>我是父页面插槽里面的内容</div>
      </child>
      <newImage></newImage>
      <twoButton></twoButton>
      <button @click="dianji">qqq</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
// mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
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
    setChoices(){
      alert('11')
    },
    dianji(){
      // 这里如果混用和本vue定义了同一个名字的方法setChoices，那么只会执行本页面的方法
        this.setChoices('222');
    }
   
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'doneTodos',
    ])
  },
  mounted() {
    // 用了mixins这里就可以直接调用mixin里面的函数和组件了
      this.dayin()
      console.log(this.doneTodosCount)
      console.log(this.doneTodos)


  }
}
</script>
<style>
</style>