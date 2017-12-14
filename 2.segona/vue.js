new Vue({
    el: '#vm',
    data: {
        primer: 0,
        segon: 0,
        tercer: 0,
        quart: 0
    },
    computed: {
        suma: function() {
            return this.primer + this.segon + this.tercer + this.quart;
        }
    }
})
