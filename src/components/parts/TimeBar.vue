<template>
    <div :style="style">
        time {{style.width}}
    </div>
</template>

<script>
  export default {
    name: 'TimeBar',
    data() {
      return {
        width: 100,
        interval: null,
      }
    },
    computed: {
      style() {
        return {
          width: this.width + '%'
        }
      }
    },
    mounted() {
      this.start()
    },
    methods: {
      start() {
        this.interval = setInterval(() => {
          this.width -= 1
          if (this.width < 1) {
            clearInterval(this.interval)
          }
        }, this.$store.state.interval);
      },
    }
  }
</script>

<style scoped lang="scss">
    div {
        margin: 10px;
        height: 20px;
        background: blue;
        color: white;
    }
</style>
