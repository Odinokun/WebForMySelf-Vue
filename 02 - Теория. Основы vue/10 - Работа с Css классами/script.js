new Vue({
  el: '#app', //инициализируем основную обертку
  data: { //объект в который мы можем складывать различные данные
    isActive: true,
    color: 'blue'
  },
  computed: {
    getCssClasses: function() {
      return {
        'red' : this.isActive,
        'green' : !this.isActive
      }
    }
  },
  methods: {
  }
})