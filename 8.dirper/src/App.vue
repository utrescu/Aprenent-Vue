<template>
  <div class="container">
    <div class="jumbotron">
      <span v-decorar="'blue'" >
        No et pensis pas que cabres siguin bèsties
      </span>
      <br>
      <span v-decorar="'red'" >
        No et pensis pas que cabres siguin bèsties
      </span>
      <br>
      <span v-decorar.negreta="'green'" >
        No et pensis pas que cabres siguin bèsties (modificadors)
      </span>
      <br>
      <span v-decorar.negreta.italica="'blue'" >
        No et pensis pas que cabres siguin bèsties (modificadors)
      </span>
      <br>
      <span v-decorar:gran="'pink'" >
        No et pensis pas que cabres siguin bèsties (argument)
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
