import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles/base.less";
import Vant from "vant";
import "vant/lib/index.css";
import "amfe-flexible";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "vant/lib/index.less";
import "animate.css";

Vue.use(ElementUI);

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
