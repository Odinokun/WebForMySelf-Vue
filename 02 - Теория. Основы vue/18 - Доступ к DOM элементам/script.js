var vue1 = new Vue({
  el: '#app',
  data: {
    title: 'Hellow I am Vue!'
  },
  methods: {
    updateFirstTitle: function() {
      this.title = "New title!"
      this.$refs.heading.style.color = '#f0f'
      console.log(this.$refs);
    }
  }
});