<template>
  <div>
    <h2 v-colored v-if="visible">{{ title }}</h2>


    <button @click="visible = !visible">Visible</button>
    <button @click="title = 'New title'">Title</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Welcome to Your Vue.js',
      visible: true
    }
  }
}
</script>

<style scoped>
</style>
