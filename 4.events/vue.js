new Vue({
    el: "#events",
    data: {
        x: 0,
        y: 0,
        comptador: 0,
        clicat: false
    },
    methods: {
        mostrarPosicio: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        sumar: function() {
            this.comptador++;
        },
        mostraClics: function() {
            this.clicat = true;
        }
    }
})