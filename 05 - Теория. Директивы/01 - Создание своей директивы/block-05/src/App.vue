<template>
  <div>
    <h2 v-colored:background.font="'green'">{{ title }}</h2>
    <br>
    <h2 v-colored:color.delay.font="'green'">{{ title }}</h2>
    <br>
    <br>
    <h2 v-font>Local font directive</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Welcome to Your Vue.js'
    }
  },
  directives: {
    font: {
      bind(el, bindings, vnode) {
        el.style.fontSize = '10px'
      }
    }
  }
}
</script>

<style scoped>
</style>
