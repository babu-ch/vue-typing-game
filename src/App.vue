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
