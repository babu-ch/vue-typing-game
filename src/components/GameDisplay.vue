<template>
    <div class="gameDisplay">
        display
        {{c}}
    </div>
</template>

<script>
  export default {
    name: 'GameDisplay',
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
