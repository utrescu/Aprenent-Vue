<template>
    <h2 class="display-3">{{enMajuscules()}}</h2>
</template>

<script>
export default {
  props: {
    titol: {
      type:String,
      default: 'Tasques'
    }
  },
  methods: {
      enMajuscules() {
           return this.titol.toUpperCase();
      }
  }
}
</script>