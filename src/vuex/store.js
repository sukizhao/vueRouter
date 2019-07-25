import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'

Vue.use(Vuex)

//  1.state在vuex中用于存储数据
// var state = {
//   count: 7
// }

// 2.mutations里面放的是方法，方法主要用于改变state里面的数据

let mutations = {

  incCount () {

  }
}

// vuex  实例化 Vuex.store
const store = new Vuex.Store({
  state: {
    count: 7
  },
  mutations
  // actions,
  // getters,

})

export default store
