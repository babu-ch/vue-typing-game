import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    health: 10,
    strings: 'This is Test',
    currentString: ['t','h','i','s'],
    displayString: 'ディスイズテスト',
  },
  mutations: {
    charHit(state) {
      state.currentString.shift()
      console.log(state.currentString)
    }
  }
})
