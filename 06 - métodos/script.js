let app = new Vue({
    el: '#app',
    data: {
        nome: "Fernando",
        idade: 34
    },
    methods: {
        mostrar: (nome) => {
            let txt = 'Olá, ' + nome;
            return txt;
        },
        testar: function() {
            return "testando 123..."
        }
    }
})