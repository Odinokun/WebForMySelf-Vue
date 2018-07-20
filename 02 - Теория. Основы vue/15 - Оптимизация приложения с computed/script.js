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
      console.log('result was called')
      return this.counter > 3 ? 'More than 3' : 'less than 3'
    }
  },
  // Итог урока в том, что нужно результаты вычислений засовывать в computed
  computed: {
    computedResult: function() {
      console.log('computed result was called')
      return this.counter > 3 ? 'More than 3' : 'Less than 3'
    }
  }
})