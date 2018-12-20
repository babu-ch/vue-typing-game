<template>
    <div class="gameDisplay">
        <h1>Game End</h1>
        <p>Success Stages: {{successStage}}</p>
        <button @click="gameStart">Retry</button>
    </div>
</template>

<script>
  export default {
    name: 'GameEndDisplay',
    components: {},
    computed: {
      successStage() {
        return this.$store.state.successStage
      }
    },
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
</style>
