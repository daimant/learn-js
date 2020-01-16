"use strict";

var style = new Vue({
  el: "#style",
  data: { isActive: false, isBounded: false },
  computed: {
    classObj: function() {
      return {
        active: this.isActive,
        bounded: this.isBounded
      };
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    message: "Добрый вечер, я диспетчер"
  },
  methods: {
    setMessage: function(event) {
      this.message = event.target.value;
    }
  }
});

var api = new Vue({
  el: "#api",
  data() {
    return {
      info: "здесь будут данные из апи"
    };
  },
  mounted() {
    axios
      .post("https://jsonplaceholder.typicode.com/")
      .then(response => (this.info = response));
  }
});

var object = new Vue({
  el: "#object",
  data: { name: "Tom", age: 25 },
  methods: {
    welcome: function() {
      return "Welcome";
    },
    displayName: function() {
      return this.name;
    },
    factorial: function(n) {
      var result = 1;
      for (var i = 1; i <= n; i++) {
        result = result * i;
      }
      return result;
    }
  }
});

var action = new Vue({
  el: "#action",
  data: { counter: 0, counter2: 0 },
  methods: {
    increase: function(n, event) {
      this.counter2 = this.counter2 + n;
    },
    decrease: function(n, event) {
      this.counter2 = this.counter2 - n;
    }
  }
});

var template = new Vue({
  el: "#template",
  data: { name: "Том", age: 25 },
  template: "<p>Имя: {{name}},  Возраст {{age}}</p>"
});

var link = new Vue({
  el: "#link",
  data: {
    message: "<h2>Hello</h2>",
    text: "Google",
    link: "https://google.com",
    name: "Tom",
    age: 99
  }
});

var twoWayBind = new Vue({
  el: "#twoWayBind",
  data: { name: "Tom", age: 99, number: 1 },
  methods: {
    factorial: function(n) {
      var result = 1;
      for (var i = 1; i <= n; i++) result *= i;
      return result;
    }
  }
});

var calculatedProperties = new Vue({
  el: "#calculatedProperties",
  data: { name: "Tom", age: 25, firstname: "Tom", lastname: "Smith" },
  computed: {
    enabled: function() {
      console.log("computed");
      if (this.age > 17) return "доступ разрешен";
      else return "доступ запрещен";
    },
    fullname: {
      get: function() {
        return this.firstname + " " + this.lastname;
      },
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstname = names[0];
        this.lastname = names[names.length - 1];
      }
    }
  },
  methods: {
    checkAge: function() {
      console.log("method");
      if (this.age > 17) return "доступ разрешен";
      else return "доступ запрещен";
    }
  }
});
