// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import CreateImage from "@/components/CreateImage";
import UploadImage from "@/components/UploadImage";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#createImage",
  router,
  components: { CreateImage },
  template: "<CreateImage/>"
});

new Vue({
  el: "#uploadImage",
  components: { UploadImage },
  template: "<UploadImage />"
});
