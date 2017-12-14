<template>
<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center"
        v-for="(tasca, posicio) of tasques"
        v-bind:tasca="tasca"
        v-bind:key="posicio"
        v-bind:class="{acabada : tasca.acabada}">
        {{ tasca.text}}
        <span class="pull-right">
            <button type="button"
                    class="btn btn-success btn-xs oi oi-check"
                    @click="acabaTasca(posicio)">
            </button>
            <button type="button"
                class="btn btn-danger btn-xs oi oi-trash"
                @click="esborraTasca(posicio)">
            </button>
        </span>
    </li>
</ul>
</template>

<script>
export default {
  props: ['tasques', 'comptadorDePendents'],
  methods: {
        acabaTasca: function(posicio) {
            this.tasques[posicio].acabada = !this.tasques[posicio].acabada;
            if (this.tasques[posicio].acabada) {
                this.comptadorDePendents(-1);
            }
            let id = this.tasques[posicio].id;
            axios.patch('https://tudu-a6941.firebaseio.com/tasques/' + id + '.json', {
                acabada : this.tasques[posicio].acabada
            }).then( resposta => { console.log(resposta); });
        },
        esborraTasca: function (posicio) {
            console.log("Esborra la tasca " + posicio);
            let id = this.tasques[posicio].id;

            this.tasques.splice(posicio, 1)
            this.$emit('decrementa', 1);
            axios.delete('https://tudu-a6941.firebaseio.com/tasques/' + id + '.json')
                 .then(resultat => { console.log(resultat); });
        }
  }
};
</script>

<style>
.acabada {
    color: gray;
    text-decoration: line-through;
}
</style>

