<template>
    <div class="healthBar" :style="style">
        health
    </div>
</template>

<script>
  export default {
    name: 'HealthBar',
    data() {
      return {
        c: this.$store.state.count,
        style: {
          width: 0,
        }
      }
    },
    mounted() {
      const health = this.$store.state.count
      this.style.width = (health * 20) + 'px'
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
