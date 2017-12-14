var app = new Vue({
    el: '.main',
    data: {
        missatge: 'Hola món',
        missatges: [ 'Hola', 'Adéu'],
        src: "xavier.jpg",
        numero: 1
    },
    created: function() {
        this.missatge = "Iniciat!";
    },
    methods: {
        mostrarMissatge: function() {
            return 'Hola món mundial';
        },
        mostrarMissatge2: function() {
            return this.missatges[this.numero];
        },
        canviaMissatge: function() {
            this.numero = (this.numero + 1) %2;
            console.log(this.numero);
            // return this.missatges[this.numero];
        },
        destruir: function() {
            this.missatge = "Programa acabat!"
            this.$destroy();
        }
    }
})