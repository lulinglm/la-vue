import Vue from 'vue'
import {
  Button, message,Menu,   Layout,Icon, Dropdown
} from "ant-design-vue";


Vue.use(Button);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Dropdown);


Vue.prototype.$message = message;