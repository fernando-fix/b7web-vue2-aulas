let controller = new Vue({
    el: '#controller',
    data: {
        frase: 'Olá vue',
        texto: '',
    },
    methods: {
        adicionar() {
            content.adicionar(this.texto);
        }
    }
})

let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        lista: [
            'Item 1',
            'Item 2',
            'Item 3',
        ],
    },
    methods: {
        adicionar(data) {
            this.lista.push(data);
        }
    }
})