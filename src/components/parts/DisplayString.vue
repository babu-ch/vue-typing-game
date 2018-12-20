<template>
    <div :style="style">
        <fuwa-moji v-for="(char, i) in string" :key="i" :char="char"></fuwa-moji>
    </div>
</template>

<script>
  import FuwaMoji from './FuwaMoji'
  export default {
    name: 'DisplayString',
    components: {
      FuwaMoji
    },
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

</style>
