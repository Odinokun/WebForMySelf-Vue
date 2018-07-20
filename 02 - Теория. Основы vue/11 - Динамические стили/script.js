new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    color: '#936',
    height: 100
  },
  computed: {
    circleClasses: function() {
      return {
        'background-color': this.color,
        'height': this.height + 'px'
      }
    }
  }
})