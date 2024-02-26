let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        isError: false,
        isInfo: false,
    },
    computed: {
        alertClass() {
            return {
                'text-danger': this.isError,
                'text-info': this.isInfo,
                'text-success': !this.isError
            }
        }
    },
    methods: {
        alertMsg(msg, type) {
            this.frase = msg;
            this.isError = type === 'error';
            this.isInfo = type === 'info';
        }
    }
    // Usar isso no console do navegador para dar certo
})