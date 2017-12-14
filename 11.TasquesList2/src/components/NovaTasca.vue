<template>
  <div class="input-group">
        <input type="text"
                class="form-control"
                placeholder="Afegir tasca..." aria-label="Afegir tasca..."
                v-model="novaTasca"
                v-on:keyup.enter="afegirTasca">
        <span class="input-group-btn">
            <button class="btn btn-primary" type="button" @click="afegirTasca">
                Afegir!
            </button>
        </span>
    </div>
</template>

<script>
export default {
  props: ['tasques', 'comptadorDePendents'],
  data() {
      return {
          novaTasca : ''
      };
  },
  methods: {
      afegirTasca: function () {
            var text = this.novaTasca.trim();
            if (text) {
                this.tasques.push(
                    {
                        text: text,
                        acabada: false
                    });
                this.comptadorDePendents(1);
                this.$emit('incrementa', 1);
            }
            this.novaTasca = '';
            axios.post('https://tudu-a6941.firebaseio.com/tasques.json',
            {
                text: text,
                acabada: false
            }).then(resposta => { console.log(resposta); })
        }
  }
};
</script>
