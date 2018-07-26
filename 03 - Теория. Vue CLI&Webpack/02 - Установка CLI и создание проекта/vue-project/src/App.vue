<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-car
      :carName="carName"
      :carYear="carYear"
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
  }
}
</script>

<style lang="scss">
</style>
