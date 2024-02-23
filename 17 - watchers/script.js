let content = new Vue({
    el: '#content',
    data: {
        conta: '',
        aviso: '',
        resultado: '',
        timer: null
    },
    methods: {
        fazerConta: function () {
            this.aviso = '';
            this.resultado = eval(this.conta);
        }
    },
    watch: {
        conta: function () {
            this.aviso = 'Digitando...';
            this.resultado = '';

            if (this.timer != null) {
                clearTimeout(this.timer);
            }

            setTimeout(() => {
                this.fazerConta()
            }, 1000);
        }
    }
})