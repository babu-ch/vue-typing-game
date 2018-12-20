<template>
  <div id="app">
      <component v-bind:is="currentComponent"></component>
  </div>
</template>

<script>
import GameDisplay from './components/GameDisplay'
import GameEndDisplay from './components/GameEndDisplay'

export default {
  name: 'app',
  components: {
    GameDisplay,
    GameEndDisplay
  },
  data() {
    return {
      currentComponent: GameDisplay
    }
  },
  computed: {
    isDied() {
        return this.$store.state.isDied
    }
  },
  watch: {
    isDied() {
      if (!this.isDied) {
        return
      }
      this.currentComponent = GameEndDisplay
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
