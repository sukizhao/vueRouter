import Vue from 'vue'
import Router from 'vue-router'
import daohang from '@/components/daohang'
import jingyesi from '@/components/jingyesi'
import minnong from '@/components/minnong'
import eee from '@/components/eee'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/daohang',
      name: 'daohang',
      component: daohang
    },
    {
      path: '/jingyesi',
      name: 'jingyesi',
      component: jingyesi
    },
    {
      path: '/minnong',
      name: 'minnong',
      component: minnong
    },
    {
      path: '/eee',
      name: 'eee',
      component: eee
    },
  ]
})
