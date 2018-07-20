new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    counter: 0,
    counter2: 0
  },
  methods: {
    riseCounter: function() {
      this.counter++
    },
    onHover: function(event) {
      event.target.style.color = 'red'
    }
  }
})