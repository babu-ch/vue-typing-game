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
        style: {
        }
      }
    },
    computed: {
      currentString() {
        return this.$store.state.currentString
      },
      string() {
        return this.currentString.join('')
      }
    }
  }
</script>

<style scoped lang="scss">
    div {
        font-size: 40px;
        margin-top: 20px;
        text-align: center;
    }
</style>
