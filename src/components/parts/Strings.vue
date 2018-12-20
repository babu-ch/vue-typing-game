<template>
    <div :style="style">
        {{string}}
    </div>
</template>

<script>
  export default {
    name: 'Strings',
    data() {
      return {
        currentString: this.$store.state.currentString,
        style: {
        }
      }
    },
    computed: {
      string() {
        return this.currentString.join('')
      }
    }
  }
</script>

<style scoped lang="scss">
    div {
        font-size: 60px;
        margin-top: 20px;
    }
</style>
