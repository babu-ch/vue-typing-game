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
      },
      missCount() {
        return this.$store.state.missCount
      },
      typeSuccessCount() {
        return this.$store.state.typeSuccessCount
      }
    },
    watch: {
      missCount() {
        this.width -= 10
        this.checkTimeOver()
      },
      typeSuccessCount() {
        if (99 < this.width + 5) {
          this.width = 100
          return
        }
        this.width += 5;
      }
    },
    mounted() {
      this.start()
    },
    methods: {
      checkTimeOver() {
        if (this.width > 0) {
          return
        }
        this.width = 0
        clearInterval(this.interval)
      },
      restart() {
        this.width = 100
        this.start()
      },
      start() {
        this.interval = setInterval(() => {
          this.width--
          this.checkTimeOver()
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
