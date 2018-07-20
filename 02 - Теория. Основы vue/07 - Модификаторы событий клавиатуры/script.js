new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    x: 0,
    y: 0
  },
  methods: {
    clickOnGoogle: function(event) {
      event.preventDefault()
    },
    handleMouseMove: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    alertValue: function(event) {
      alert(event.target.value)
    }
  }
})