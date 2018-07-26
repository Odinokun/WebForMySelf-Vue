<template>
  <div>
    <h1>Parent: {{ carName }}</h1>

    <app-car
      :carName="carName"
      :carYear="carYear"
    ></app-car>
  </div>
</template>

<script>
export default {
  data () {
    return {
//      carName: 'Ford from parent',
      carName: 'Mitsubishi',
      carYear: 2011
    }
  }
}
</script>

<style lang="scss">
</style>
