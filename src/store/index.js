// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

export default new Vuex.Store({
  plugins: [vuexLocal.plugin],
  state: {
    num: 1
  },
  getters: {},
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
