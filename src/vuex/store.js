import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
import user from './module/user'
import app from './module/app'
Vue.use(Vuex)
// mutations里面放的是方法，方法主要用于改变state里面的数据
// vuex  实例化 Vuex.store
const store = new Vuex.Store({
  state: {
    count: 7,
    todos: [
      { id: 11111, text: '111', done: true },
      { id: 22222, text: '222', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
  },
  mutations:{
    incCount(state){
      state.count++
    },
    addCount(state,n){
      state.count+=10
    },
  },
  actions: {
    incCount (context) {
      context.commit('incCount')
    }
  },
  modules: {
    user,
    app,
  }
})

export default store
