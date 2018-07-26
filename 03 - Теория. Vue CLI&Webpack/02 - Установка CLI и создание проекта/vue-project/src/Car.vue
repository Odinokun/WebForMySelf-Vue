<template>
  <div class="car">
    <h3>Name: {{ carName }} / {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>

    <button @click="changeName">Change name</button>
    <button @click="changeFunc()">Change from parent</button>

    <button @click="updateCounter">Update counter</button>
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
  import {eventEmmiter} from './main'

  export default {
    props: {
      carName: {
        type: String,
        required: true
      },
      carYear: Number,
      changeFunc: Function
    },
    methods: {
      changeName() {
        this.carName = 'Mazda'
        this.$emit('nameChanged', this.carName)
      },
      updateCounter() {
//        this.$emit('counterUpdated', this.counter + 1)
        eventEmmiter.$emit('counterUpdated')
      }
    },
    computed: {
      reverseName() {
        return this.carName.split('').reverse().join('')
      }
    }
  }

</script>