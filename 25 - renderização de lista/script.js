let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        lista: [
            { nome: 'Fernando' },
            { nome: 'Paula' },
            { nome: 'Antônio' },
            { nome: 'Fulana' },
        ],
        objeto: {
            nome: 'Fernando',
            idade: 34,
            email: 'fernando@email.com',
            endereco: 'Rua dos bobos, 0',
        }
    }
})