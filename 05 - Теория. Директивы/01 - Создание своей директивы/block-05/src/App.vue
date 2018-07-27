<template>
  <div>
    <h2 v-colored:background.font="'green'">{{ title }}</h2>
    <br>
    <h2 v-colored:color.delay.font="'green'">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Welcome to Your Vue.js'
    }
  }
}
</script>

<style scoped>
</style>
