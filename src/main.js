import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './sotre/index'
import {
  Button, message,Menu,   Layout,Icon, Dropdown
} from "ant-design-vue";

Vue.config.productionTip = false

Vue.use(Button);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Dropdown);


Vue.prototype.$message = message;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
