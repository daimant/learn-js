"use strict";

const NotFound = { template: "<h2>Page Not Found</h2>" };
const Home = { template: "<h2>Home Page</h2>" };
const postList = { template: "<h2>post list</h2>" };
const About = { template: "<h2>About Page</h2>" };

const routes = [
  { path: "/learnJS/js/test-task/vue/", component: Home },
  { path: "/learnJS/js/test-task/vue/postList", component: postList },
  { path: "/learnJS/js/test-task/vue/about", component: About },
  { path: "/learnJS/js/test-task/vue/*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  el: "#app",
  router: router
});

var api = new Vue({
  el: "#api",

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
