<template>
    <div class="gameDisplay">
        <health-bar></health-bar>
        <strings></strings>
    </div>
</template>

<script>
  import HealthBar from './parts/HealthBar'
  import Strings from './parts/Strings'
  export default {
    name: 'GameDisplay',
    components: {
      HealthBar,
      Strings
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
