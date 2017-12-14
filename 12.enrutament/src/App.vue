<template>
  <div id="app" class="container">
    <capsalera></capsalera>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Capsalera from './components/Capsalera.vue';
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    capsalera: Capsalera
  }
}
</script>

<style>

</style>
