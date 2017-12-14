import Vue from 'vue'
import App from './App.vue'

Vue.directive('decorar', {
  bind(el, binding, vnode) {
    el.style.color = binding.value;

    if (binding.arg == 'gran') {
      el.style.fontSize = '50px';
    }
    if (binding.arg == 'petit') {
      el.style.fontSize = '10px';
    }

    if (binding.modifiers['negreta']) {
      el.style.fontWeight = 'bold';
    }
    if (binding.modifiers['italica']) {
      el.style.fontStyle = 'italic';
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
