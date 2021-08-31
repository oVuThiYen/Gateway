import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Default from "./layouts/Default.vue";
import Admin from "./layouts/Admin.vue";

Vue.component("default-layout", Default);
Vue.component("admin-layout", Admin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
