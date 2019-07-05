import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const requireRouter = require.context(".", false, /\.js$/);

let routers = [];

requireRouter.keys().forEach(filename => {
  if (filename === "./index.js") {
    return;
  }
  let router = requireRouter(filename).default;
  routers.push(...router);
});

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...routers]
});
