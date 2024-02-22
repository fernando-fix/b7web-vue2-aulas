Vue.component('msg-component', {
    template: '<h3>Olá eu sou um componente do VUE</h3>'
})

let app = new Vue({
    el: '#app',
    data: {
        n: 0,
        pessoas: [
            { nome: 'Fernando de Lima Rodrigues', email: 'fernando@email.com', idade: 34 },
            { nome: 'Joquim da Silva Pedroso', email: 'joaquim@email.com', idade: 56 },
            { nome: 'Mariana Golçalves da Cunha', email: 'mariana@email.com', idade: 45 },
            { nome: 'Stella Golçalves da Cunha', email: 'stella@email.com', idade: 59 },
        ]
    },
    methods: {
        increment: function () {
            if (this.n < 10) {
                this.n++;
            }
        },
        decrement: function () {
            if (this.n > 0) {
                this.n--;
            }
        }
    }
})