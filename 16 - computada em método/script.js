let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    },
    computed: {
        aleatorio: function () {
            return Math.random();
        }
    },
    methods: {
        aleatorioFuncao: function () {
            return Math.random();
        }
    }
})