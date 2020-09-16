export default {
  state: {
    breadCrumbList: ['2','3'],
  },
  getters: {
    errorCount: state => state.breadCrumbList.length
  },
  mutations: {
    // pushBreadCrumb(state){
    //   state.breadCrumbList=['1','2']
    // },
  },
  actions: {

  }
}
