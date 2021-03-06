import Vue from "vue";
import Vuex from "vuex";
import AppModules from "./app";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...AppModules
  }
});
