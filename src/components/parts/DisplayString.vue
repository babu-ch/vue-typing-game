<template>
    <div :style="style">
        {{string}}
    </div>
</template>

<script>
  export default {
    name: 'DisplayString',
    data() {
      return {
        style: {
        },
        string: this.$store.state.displayString
      }
    },
  }
</script>

<style scoped lang="scss">
    div {
        font-size: 60px;
        margin-top: 70px;
    }
</style>
