
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
    </section>

  </div>
</template>
<script>
export default {
  methods: {
    dayin() {
      this.$print(this.$refs.print)
    }
  }
}
</script>
