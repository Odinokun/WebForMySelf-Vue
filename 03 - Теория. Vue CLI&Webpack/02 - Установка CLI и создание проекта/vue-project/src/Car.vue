<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName}}</h3>
    <p>Year: {{ carYear }}</p>

    <button @click="changeName">Change name</button>
  </div>
</template>

<style>
  .car {
    border: 5px solid #396;
    padding: 20px;
    margin: 20px auto;
  }
</style>

<script>

  export default {
    props: {
      carName: {
        type: String,
        required: true,
        default: 'Default name'
      },
      carYear: Number
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      }
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    }
  }

</script>