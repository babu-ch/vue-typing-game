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
      }
    },
    computed: {
      string() {
        return this.$store.state.displayString
      }
    }
  }
</script>

<style scoped lang="scss">
    div {
        font-size: 50px;
        margin-top: 70px;
        text-align: center;
    }
</style>
