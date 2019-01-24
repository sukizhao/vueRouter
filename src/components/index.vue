<template>
      <div>
      <!-- 路径直接一static为单位 -->
      <img src="static/img/1.jpg" alt="">
          <h1>我是内容</h1>
          <p>啦啦啦</p>
      </div> 
</template>

<script>
export default {
  data () {
    return {
      msg: '你好Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
