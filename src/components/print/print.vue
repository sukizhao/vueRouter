
<template>
  <div>
    <!-- <div id="printTest" style="text-align:center">
      　　　　　<p>锄禾日当午</p>
      　　　　　<p>汗滴禾下土 </p>
      　　　　　<p>谁知盘中餐</p>
      　　　　　<p>粒粒皆辛苦</p>
      　　　</div>
    　　 -->
    <section ref="print" style="text-align:center">
      <p>锄禾日当午</p>
      　　　　　<p>汗滴禾下土 </p>
      　　　　　<p>谁知盘中餐</p>
      　　　　　<p>粒粒皆辛苦</p>
      <div class="no-print">不要打印我</div>
      <button @click="dayin">print</button>
      <button @click="getMock">获取mock数据</button>
    </section>

  </div>
</template>
<script>
 import axios from 'axios'
export default {
  methods: {
    dayin() {
      this.$print(this.$refs.print)
    },
    getMock(){
       axios.post("/decision/getName").then(response => {
          if (response.data) {
              console.log(response.data)
              alert(response.data.data.name)
          }
      })
      axios.post("/list").then(response => {
          if (response.data) {
              console.log(response.data)
              alert(response.data.name)
          }
      })
    }
  }
}
</script>