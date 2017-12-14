<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <span>
        <strong>Filtre majúscules:</strong> {{ msg | majuscules }}
      </span>
      <hr>
      <span>
        <strong>Filtre minúscules:</strong> {{ msg | minuscules }}
      </span>
      <hr>
      <span>
        <strong>Filtre cap:</strong> {{ msg }}
      </span>
      <hr>
      <span>
        <strong>Temperatura:</strong> {{ temperatura }}
      </span>
      <hr>
      <span>
        <strong>Temperatura:</strong> {{ temperatura | aFarenheid }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      temperatura: 30
    }
  },
  filters: {
    majuscules( missatge) {
      return missatge.toUpperCase();
    },
    aFarenheid( temperatura ) {
      return (9/5) * temperatura + 32 + "F";
    }
  }
}
</script>

<style>

</style>
