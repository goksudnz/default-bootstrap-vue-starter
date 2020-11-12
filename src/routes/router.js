import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import DynamicFormComponent from './views/dynamic-form.vue';


const router = new Router({
  mode: 'history',
  base: process.env.base,
  routes: [
    {
      path: '*',
      name: 'form',
      meta: { title: 'Ultimate Dynamic Form' },
      component: DynamicFormComponent
    },
    {
      path: 'dynamic-form',
      name: 'form',
      meta: {title: 'Ultimate Dynamic Form' },
      component: DynamicFormComponent
    }
  ]
})

export default router;