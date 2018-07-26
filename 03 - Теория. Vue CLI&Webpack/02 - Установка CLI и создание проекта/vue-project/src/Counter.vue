<template>
  <h1>Counter: {{ counter }}</h1>
</template>

<script>
  import {eventEmmiter} from './main'

  export default {
    data () {
      return {
        counter: 0
      }
    },
    created() {
      eventEmmiter.$on('counterUpdated', () => {
        this.counter++
      })
    }
  }
</script>