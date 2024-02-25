let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        contador: 0,
    },
    methods: {
        incrementar() {
            this.contador += 1;
        }
    }
})