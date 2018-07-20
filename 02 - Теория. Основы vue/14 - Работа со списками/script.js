new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    people: [
      'Vlad',
      'Max',
      'Elena',
      'John'
    ],
    people2: [
      {name: 'Max', age: 20},
      {name: 'Vlad', age: 25},
      {name: 'Elena', age: 30}
    ],
    onePerson: {
      name: 'Max',
      age: 40,
      job: 'frontender'
    }
  },
  computed: {
  }
})