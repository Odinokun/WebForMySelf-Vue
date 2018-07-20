new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    name: 'Vue!',
    number: 100,
    isOk: true,
    string: 'My name is Odinokun'
  },
  methods: {
    sayHellow: function() {
      return 'I am function'
    }
  }
})
