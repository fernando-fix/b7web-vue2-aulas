let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    },
    computed: {
        fraseInvertida: function () {
            return this.frase.split('').reverse().join('');
        }
    },
})