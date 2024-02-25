let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        contagem: 0,
    },
    methods: {
        contarMaisUm() {
            this.contagem++
        },
        contarMaisUmComParametro(numero) {
            this.contagem = this.contagem + numero;
        },

    }
})