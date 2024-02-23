let content = new Vue({
    el: '#content',
    data: {
        primeiroNome: ' ',
        segundoNome: '',
        nomeCompleto: ' ',
    },
    watch: {
        primeiroNome: function () {
            this.nomeCompleto = this.primeiroNome + ' ' + this.segundoNome;
        },
        segundoNome: function () {
            this.nomeCompleto = this.primeiroNome + ' ' + this.segundoNome;
        },
    },
    computed: {
        fullName: function () {
            return this.primeiroNome + ' ' + this.segundoNome;
        }
    }
})