let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        contagem: 0,
    },
    methods: {
        algo() {
            this.contagem++;
        }
    }
})