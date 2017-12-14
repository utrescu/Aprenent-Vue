<template>
  <div>
      <div>
          <h2>Usuari</h2>
        <p><strong>Nom:</strong> {{ usuari.nom }}</p>
        <p><strong>Username:</strong> {{ usuari.username }}</p>
        <p><strong>Email:</strong> {{ usuari.email }}</p>
      </div>
      <button class="btn btn-primary" @click="tornar">Tornar</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            usuari: {
                nom: '',
                username: '',
                email: ''
            }
        };
    },
    methods: {
        tornar() {
            this.$router.push({ name: 'usuaris'});
        }
    },
    created() {
        let id = this.$route.params.id;
        console.log('https://jsonplaceholder.typicode.com/users/' + id);
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
           .then(result => {
               console.log(result.data);
               this.usuari.nom = result.data.name;
               this.usuari.username = result.data.username;
               this.usuari.email = result.data.email;
           });
    }
}
</script>

<style>

</style>
