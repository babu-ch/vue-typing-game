import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    health: 10,
    strings: 'This is Test',
  },
  mutations: {
    increment(state) {
    }
  }
})
