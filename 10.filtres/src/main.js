import Vue from 'vue'
import App from './App.vue'

Vue.filter('minuscules', function(text) {
  return text.toLowerCase();
})

new Vue({
  el: '#app',
  render: h => h(App)
})
