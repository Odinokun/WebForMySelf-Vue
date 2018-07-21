var vue1 = new Vue({
  el: '#app',
  data: {
    title: 'Hellow I am Vue!'
  },
  methods: {
    alertFast: function () {
      alert('I am from vue 1')
    }
  }
});

console.log(vue1);


new Vue({
  el: '#app2',
  data: {
    title: 'Hellow, I am Vue 2!'
  },
  methods: {
    updateFirstTitle: function() {
      vue1.title = 'Updated from second app'
      setTimeout(function () {
        vue1.alertFast()
      }, 1000)
    }
  }
});