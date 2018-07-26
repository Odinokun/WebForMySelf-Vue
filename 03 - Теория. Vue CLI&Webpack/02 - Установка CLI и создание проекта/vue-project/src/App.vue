<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-car
      :carName="carName"
      :carYear="carYear"
      :changeFunc="changeNameToAudi"
      @nameChanged="carName = $event"
    ></app-car>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 1956
    }
  },
  methods: {
    changeNameToAudi() {
      this.carName = 'Audi'
    }
  }
}
</script>

<style lang="scss">
</style>
