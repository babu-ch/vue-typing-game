import Vue from 'vue'
import Vuex from 'vuex'
import inputStrings from './inputStrings'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseTime: 5000,
    strings: [],
    displayString: '',
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
      state.strings = mondai.inputString.split('')
    },
  }
})
