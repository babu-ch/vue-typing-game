import Vue from 'vue'
import Vuex from 'vuex'
import inputStrings from './inputStrings'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    health: 10,
    strings: 'This is Test',
    currentString: ['t','h','i','s'],
    displayString: 'ディスイズテスト',
    inputStrings: inputStrings,
    inputStringsBase: inputStrings
  },
  mutations: {
    choice(state) {
      let mondai = state.inputStrings.pop()
      if (!mondai) {
        state.inputStrings = state.inputStringsBase.concat()
        mondai = state.inputStrings.pop()
      }
      state.displayString = mondai.displayString
      state.currentString = mondai.inputString.split('')
      console.log(state)
    },
    charHit(state) {
      state.currentString.shift()
    }
  }
})
