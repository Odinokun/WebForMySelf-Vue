new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    counter: 0,
    title: 'Счетчик'
  },
  methods: {
    riseCounter: function(num, str, event) {
      //num, str - это параметры в функции riseCounter
      //event - это параметр который нужен для изменения цвета текста кнопки
      this.counter += num
      this.title = str

      if (num === 10) {
        event.target.style.color = 'blue'
      } else if (num === 20) {
        event.target.style.color = 'red'
      }
    }
    // riseCounter: function() {
    //   this.counter += 10
    // }
  }
})