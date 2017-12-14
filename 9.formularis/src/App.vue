<template>
  <div id="app" class="container">
    <div class="row">
    <div class="col-md-6">
      <h1>Formulari</h1>
      <form>
        <div class="form-group">
          <label for="correu">Nom</label>
          <input type="text" class="form-control" placeholder="Nom"
                 v-model.trim="usuari.nom">
        </div>
        <div class="form-group">
          <label for="correu">Correu</label>
          <input type="email" class="form-control" placeholder="Correu"
                 v-model.lazy="usuari.correu">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" placeholder="Contrasenya"
                 v-model="usuari.contrasenya">
        </div>
        <div class="form-group">
          <label for="password">Edat</label>
          <input type="text" class="form-control" placeholder="Edat"
                 v-model.number="usuari.edat">
        </div>
        <div class="form-group">
          <label for="pais">País</label>
          <select class="form-control" v-model="usuari.pais">
            <option v-for="pais in paisos"
                    v-bind:key="pais">{{pais}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="missatge">Missatge</label>
          <textarea class="form-control" rows=3 v-model="usuari.missatge"></textarea>
        </div>

        <fieldset class="form-group">
          <legend>Gènere</legend>
          <div class="form-check">
            <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadio"
                   value="home" checked v-model="usuari.genere">
            home
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
            <input type="radio" class="form-check-input" name="optionsRadio"
                   value="dona" v-model="usuari.genere">
            dona
            </label>
          </div>
        </fieldset>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input"
                   value="condicions" v-model="usuari.condicions">
            Accepto les condicions
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input type="checkbox" class="form-check-input"
                   value="rebre" v-model="usuari.condicions">
            Estic d'acord amb rebre correus
          </label>
        </div>
        <button type="submit" class="btn btn-primary"
                @click.prevent="Enviar()">
          Enviar
        </button>
      </form>
    </div>
    <div class="resultats col-md-6" v-if="mostrar">
      <h1>Resultats</h1>
      <p><strong>Nom:</strong> {{ usuari.nom }} - {{ usuari.nom.length }} </p>
      <p><strong>Correu electrònic:</strong>{{ usuari.correu }}</p>
      <p><strong>Contrasenya:</strong>{{ usuari.contrasenya }}</p>
      <p><strong>Edat:</strong>{{ usuari.edat }} - {{ typeof usuari.edat }}</p>
      <p><strong>País:</strong> {{ usuari.pais }}</p>
      <p class="missatge"><strong>Missatge:</strong> {{ usuari.missatge }}</p>
      <p><strong>Gènere:</strong>{{usuari.genere}}</p>
       <p><strong>Condicions:</strong>{{usuari.condicions}}</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usuari : {
        nom: '',
        correu: '',
        contrasenya: '',
        edat: '',
        pais: '',
        missatge: '',
        genere: 'home',
        // condicions: false <-- quan n'hi ha un de sol
        condicions: []
      },
      mostrar: false,
      paisos: [
        'Catalunya',
        'Euskadi',
        'Escocia'
      ]
    }
  },
  methods: {
    Enviar() {
      console.log("Enviar el formulari ...")
      this.mostrar = true
    }
  }
}
</script>

<style>
.missatge {
  white-space: pre;
}
</style>
