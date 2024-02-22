function bandeira(pais) {
    return '<img src="paises/' + pais + '.png" />';
}

let app = new Vue({
    el: '#app',
    data: {
        argentina: bandeira('argentina'),
        brazil: bandeira('brazil'),
        china: bandeira('china'),
        ul: bandeira('uk'),
        usa: bandeira('usa'),
    },
    methods: {
        paises: function () {
            return [
                { bandeira: this.argentina, continente: 'América do sul' },
                { bandeira: this.brazil, continente: 'América do sul' },
                { bandeira: this.china, continente: 'Ásia' },
                { bandeira: this.uk, continente: 'Europe' },
                { bandeira: this.usa, continente: 'América do Norte' },
            ];
        }
    }
})