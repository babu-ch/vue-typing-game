<template>
    <div :style="style" @click="currentString.pop()">
        <transition-group name="list" tag="p">
            <span v-for="(char) in currentString" :key="char">{{char}}</span>
        </transition-group>
    </div>
</template>

<script>
  export default {
    name: 'Strings',
    data() {
      return {
        style: {},
        currentString: [],
      }
    },
    computed: {
      storeString() {
        return this.$store.state.strings
      }
    },
    watch: {
      storeString() {
        this.currentString = this.storeString
      }
    },
    mounted() {
      window.addEventListener('keydown', (event)  => {
        this.keyDown(event.key)
      });
      this.$store.commit('choice')
    },
    methods: {
      keyDown(code) {
        const string = this.currentString
        if (code !== string[0]) {
          this.$store.commit('relativeUpdateHealth', -1)
          return false;
        }
        string.shift()
        if (!string[0]) {
          this.$store.commit('choice')
        }
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
    span {
        display: inline-block;
    }
    .list-leave-active {
        transition: all .5s;
        position: absolute;
    }
    .list-enter-active {
        transition: all .5s;
    }
    .list-enter, .list-leave-to /* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(100px);
    }
</style>
