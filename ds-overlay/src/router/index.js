import Vue from "vue";
import Router from "vue-router";
import CreateImage from "@/components/CreateImage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "CreateImage",
      component: CreateImage
    }
  ]
});
