Vue.config.keyCodes.f2 = 113;

let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        contagem: 0,
    },
    methods: {
        teclouEvento(e) {
            console.log(e.keyCode);
            if (e.keyCode == 13) {
                this.contagem++;
            }
        },
        teclouPonto13() {
            this.contagem++;
        },
        teclouPontoEnter() {
            this.contagem++;
        }
    }
})