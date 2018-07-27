<template>
  <div>
    <h1>List</h1>

    <input v-model="searchName">

    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
  import ListMixin from './listmixin'

  export default {
    mixins: [ListMixin]
  }
</script>