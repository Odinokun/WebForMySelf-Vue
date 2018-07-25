var dataObj = {
  counter: 0
}

Vue.component('my-counter', {
  template: `
    <div class="wrap">
      <h2>Counter: {{ counter }}</h2>
      <button @click="add">Add to counter</button>
    </div>
  `,
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    add: function() {
      this.counter++
    }
  }
})

new Vue({
  el:'#app'
});