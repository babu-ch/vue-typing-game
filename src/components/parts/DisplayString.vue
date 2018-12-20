<template>
    <div :style="style">
        <span v-for="(char, i) in string" :key="i">{{char}}</span>
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
        return this.$store.state.displayString.split('')
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
    span {
    }
</style>
