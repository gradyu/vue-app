import Vue from "vue";

import "@/plugins";
import "@/layouts";
import "@/components";

import router from "@/routers";
import store from "@/stores";

import App from "./App";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
