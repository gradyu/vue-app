import Vue from "vue";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const comps = require.context("@/layouts", true, /\.vue$/);

comps.keys().forEach(filename => {
  const cfg = comps(filename);
  const cmpName = upperFirst(
    camelCase(filename.replace(/^\.\//, "").replace(/\.\w+$/, ""))
  );
  Vue.component(cmpName, cfg.default || cfg);
});
