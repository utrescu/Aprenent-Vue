<template>
  <div id="app" class="container">
      <div class="jumbotron">
          <titol :titol="titol"></titol>
          {{numeroDeTasquesPendents}} / {{ numeroDeTasques }}
          <nova-tasca :tasques="tasques"
                      v-on:incrementa="incrementaNumeroDeTasques"
                      :comptadorDePendents="comptadorDePendents">
          </nova-tasca>
          <llista-de-tasques :tasques="tasques"
                      v-on:decrementa="decrementaNumeroDeTasques"
                      :comptadorDePendents="comptadorDePendents">
          </llista-de-tasques>
      </div>
  </div>
</template>

<script>
import Titol from "./components/TitolComponent.vue";
import NovaTasca from "./components/NovaTasca.vue";
import LlistaDeTasques from "./components/LlistaDeTasques.vue";

export default {
  components: {
    Titol,
    NovaTasca,
    LlistaDeTasques
  },
  data() {
    return {
      titol: "Llista de Tasques",
      numeroDeTasques: 0,
      numeroDeTasquesPendents: 0,
      tasques: [
      ],
      novaTasca: ""
    };
  },
  methods: {
    incrementaNumeroDeTasques(event) {
      // Amb event rebem el segon paràmetre!
      this.numeroDeTasques += event
    },
    decrementaNumeroDeTasques(event) {
      // Amb event rebem el segon paràmetre!
      this.numeroDeTasques -= event
    },
    comptadorDePendents(que) {
      this.numeroDeTasquesPendents += que;
    }
  },
  created() {
    axios.get('https://tudu-a6941.firebaseio.com/tasques.json')
         .then(resposta => {
           return resposta.data;
         })
         .then( dades => {
                for(let id in dades) {
                  console.log(dades[id]);
                  let tasca = {
                    id: id,
                    text: dades[id].text,
                    acabada: dades[id].acabada
                  }
                  this.tasques.push(tasca);
                  this.numeroDeTasques++;
                  if (!tasca.acabada) {
                    this.numeroDeTasquesPendents++;
                  }
                };
         });
  }
};
</script>

<style>

</style>

