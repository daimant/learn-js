"use strict";

const NotFound = { template: "<h2>Страница не найдена</h2>" };
const Home = { template: "<h2>Стартовая страница</h2>" };
const PostList = {
  template: `<div><h2>Список постов</h2><span v-for="n in 10">{{ n }} </span></div>`
};
const Post = { template: `<h2>Пост: $route.:id<h2>` };

const routes = [
  { path: "/learnJS/js/test-task/vue/", component: Home },
  { path: "/learnJS/js/test-task/vue/post-list", component: PostList },
  { path: "/learnJS/js/test-task/vue/post-:id", component: Post },
  { path: "/learnJS/js/test-task/vue/*", component: NotFound }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  el: "#app",
  router: router,
  data: {
    info: "здесь будут данные из апи",
    currentPost: 0
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => (this.info = response));
  }
});
