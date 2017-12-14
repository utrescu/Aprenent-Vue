Vue.component(
    'titol', {
        template: ' <h1 class="display-3">{{titol}}</h1>',
        data: function () {
            return { titol: 'Llista de tasques' };
        }
    })

new Vue({
    el: "#app",
    data: {
        tasques: [
            {
                text: 'aprendre x',
                acabada: false
            },
            {
                text: 'aprendre y',
                acabada: false
            },
            {
                text: 'aprendre z',
                acabada: false
            },
        ],
        novaTasca: ''
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
            }
        },
        acabaTasca: function (posicio) {
            if (posicio < this.tasques.length && posicio >= 0) {
                console.log("Acabada " + posicio);
                this.tasques[posicio].acabada = !this.tasques[posicio].acabada;
            }
        },
        esborraTasca: function (posicio) {
            console.log("Esborra la tasca " + posicio);
            this.tasques.splice(posicio, 1)
        }
    }
})