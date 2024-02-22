let app = new Vue({
    el: '#app',
    data: {
        frase: 'Olá Mundo! usando variável',
        frase2: 'Olá Mundo! usando v-text (sem html) <strong>Negrito</strong>',
        frase3: 'Olá Mundo! usando v-html (com html) <strong>Negrito</strong>',
    }
})