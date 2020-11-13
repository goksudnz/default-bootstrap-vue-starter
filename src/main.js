import Vue from 'vue'
import router from './routes/router';
import store from './state/store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

//default files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App'

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')