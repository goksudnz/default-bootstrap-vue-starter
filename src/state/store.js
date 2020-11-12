import Vue from 'vue';
import Vuex from 'vuex';

import ExampleModule from './modules/example';

Vue.use(Vuex);

const store = new Vuex.Store({
   modules: {
     example: ExampleModule
   }
})

//example usage: store.state.example.variable
export default store;