let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        numero: 0,
        nome: 'Fernando',
    },
    computed: {
        type() {
            return typeof this.numero
        }
    }
})