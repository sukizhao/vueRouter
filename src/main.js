import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/Ueditor/ueditor.config.js'
import '../static/Ueditor/ueditor.all.min.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import '../static/Ueditor/ueditor.parse.min.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
