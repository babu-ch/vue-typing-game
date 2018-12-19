<template>
    <div class="gameDisplay">
        <health-bar></health-bar>
    </div>
</template>

<script>
  import HealthBar from './parts/HealthBar'
  export default {
    name: 'GameDisplay',
    components: {
      HealthBar
    },
    data() {
      return {
        c: this.$store.state.count
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
    }
</style>
