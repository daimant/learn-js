"use strict";

var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!"
  },
  methods: {
    setMessage: function(event) {
      this.message = event.target.value;
    }
  }
});

new Vue({
  el: "#api",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/")
      .then(response => (this.info = response));
  }
});
