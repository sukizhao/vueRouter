import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

Vue.use(Vuex)
// mutations里面放的是方法，方法主要用于改变state里面的数据
// vuex  实例化 Vuex.store
const store = new Vuex.Store({
  state: {
    count: 7,
    user:'无名'
  },
  mutations:{
    incCount(state){
      state.count++
    },
    user(state,v){
      state.user=v
    }
  }
  // actions,
  // getters,

})

export default store
