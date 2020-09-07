<template>
  <div>
      <p>使用slot分发内容</p>
      <child></child>
      <child>   
          <div>我是父页面插槽里面的内容</div>
      </child>
  </div>
</template>
<script>
import child from './child'
export default {
   name: 'chacao',
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
   
  }
}
</script>
<style>
</style>