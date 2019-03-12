import Vue from 'vue'
import Router from 'vue-router'
import daohang from '@/components/daohang'
import jingyesi from '@/components/jingyesi/jingyesi.vue'
import minnong from '@/components/minnong/minnong.vue' //这里必须加vue后缀名是因为有重名的js文件
import eee from '@/components/eee/eee.vue'
import mycalendar from '@/components/calendar/mycalendar.vue'

Vue.use(Router)
export default new Router({
  routes: [{
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
      path: '/zhaoshuqi', //这里的名字随便起，无论vue文件是否放在二层文件夹下面都是这个路径
      name: 'minnong',
      component: minnong
    },
    {
      path: '/eee',
      name: 'eee',
      component: eee
    },
    {
      path: '/mycalendar',
      name: 'mycalendar',
      component: mycalendar
    },
  ]
})
