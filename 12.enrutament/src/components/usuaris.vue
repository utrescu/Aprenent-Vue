<template>
    <div>
      <p>LLista d'usuaris</p>
      <ul class="list-group">
          <router-link tag="li"
            :to="{name:'usuari', params:{id:usuari.id}}"
            class="list-group-item"
            v-for="usuari in usuaris"
            v-bind:key = "usuari.id">
            {{ usuari.name }}
          </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      usuaris: {}
    };
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(result => {
      console.log(result.data);
      this.usuaris = result.data;
    });
  }
};
</script>

<style>

</style>
