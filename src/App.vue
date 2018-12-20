<template>
  <div id="app">
      <game-display></game-display>
  </div>
</template>

<script>
import GameDisplay from './components/GameDisplay'

export default {
  name: 'app',
  components: {
    GameDisplay
  },
  data() {
    return {
    }
  },
  computed: {
    currentString() {
      return this.$store.state.currentString
    },
    firstChar() {
      return this.currentString[0]
    }
  },
  mounted() {
    window.addEventListener('keydown', (event)  => {
        this.keyDown(event.key)
    });
    this.$store.commit('choice')
  },
  methods: {
    keyDown(code) {
      if (code !== this.firstChar) {
        return false;
      }
      this.$store.commit('charHit')
      if (!this.firstChar) {
        this.$store.commit('choice')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
}
</style>
