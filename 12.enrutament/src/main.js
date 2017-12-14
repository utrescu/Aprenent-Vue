import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutes } from './rutes.js';

Vue.use(VueRouter);

const encaminador = new VueRouter({
  mode: 'history',
  routes: rutes
})
new Vue({
  el: '#app',
  router: encaminador,
  render: h => h(App)
})
