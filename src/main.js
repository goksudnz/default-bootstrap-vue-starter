import Vue from 'vue'
import router from './routes/router';
import store from './state/store';
import VueMaterial from 'vue-material';

//default files
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import App from './App'

Vue.config.productionTip = false;

Vue.use(VueMaterial);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')