import Vue from "vue";
import App from "./App";
import Vector from "./Vector";

Vue.config.productionTip = false;

// Register vector component globally since we'll be using it in several .Vue files
Vue.component("vector", Vector);

new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
