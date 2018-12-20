<template>
    <div class="gameDisplay">
        <health-bar></health-bar>
        <display-string></display-string>
        <strings></strings>
    </div>
</template>

<script>
  import HealthBar from './parts/HealthBar'
  import Strings from './parts/Strings'
  import DisplayString from './parts/DisplayString'

  export default {
    name: 'GameDisplay',
    components: {
      HealthBar,
      Strings,
      DisplayString
    },
    data() {
      return {
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
