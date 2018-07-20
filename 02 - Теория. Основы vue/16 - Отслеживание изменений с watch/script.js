new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    counter: 0,
    counter2: 0
  },
  methods: {
    add: function() {
      this.counter++
    },
    sub: function() {
      this.counter--
    },
    result: function() {
      return this.counter > 3 ? 'More than 3' : 'less than 3'
    }
  },
  computed: {
    computedResult: function() {
      return this.counter > 3 ? 'More than 3' : 'Less than 3'
    }
  },
  watch: {
    // counter: function() {
    //   console.log('From watch object ' + this.counter)
    // },
    counter: function(val) {
      console.log('From watch object ' + val)
    }
  }
})