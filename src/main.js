import Vue from 'vue'
import App from './App'
import store from './vuex/store.js'
import router from './router'
import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'
import 'babel-polyfill'
import Print from '@/plugs/print'
// import Print from 'vue-print-nb'

import './mock'//使用mockjs模拟


Vue.use(Print)
Vue.config.productionTip = false
Vue.prototype.bus = new Vue()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  // eslint-disable-next-line indent
    components: {
    App
  },
  template: '<App/>'
})
