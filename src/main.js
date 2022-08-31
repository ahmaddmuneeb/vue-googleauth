import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import GAuth from "vue-google-oauth2";
const gauthOption = {
  clientId: "676785461988-icoil0dtlld2fcp5kb22llst7t94mans.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
};
Vue.use(GAuth, gauthOption);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
