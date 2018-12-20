<template>
    <div class="gameDisplay">
        <h1>Vue-typing</h1>
        <button @click="gameStart">Start Game</button>
    </div>
</template>

<script>
  export default {
    name: 'GameStartDisplay',
    methods: {
      gameStart() {
        this.$emit('game-start')
      }
    }
  }
</script>

<style scoped lang="scss">
    .gameDisplay {
        width: 600px;
        height: 400px;
        border: 1px solid #CCC;
        margin: auto;
        position: relative;
    }
    h1 {
        margin-top: 160px;
    }
</style>
