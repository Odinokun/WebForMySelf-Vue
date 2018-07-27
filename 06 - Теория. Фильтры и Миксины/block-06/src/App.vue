<template>
  <div>
    <h2>{{ title }}</h2>

    <input v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>

    <hr>

    <app-list></app-list>


  </div>
</template>

<script>
  import ListMixin from './listmixin'

export default {
  data () {
    return {
      title: 'Welcome to Your Vue.js App!'
    }
  },
  mixins: [ListMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }
}
</script>

<style scoped>
</style>
