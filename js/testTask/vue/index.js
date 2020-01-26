"use strict";

var app = new Vue({
  el: "#app",

  data: {
    info: "здесь будут данные из апи",
    currentPage: 0
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => (this.info = response));
  }
});
