let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        busca: '',
        nomes: ['Fernando', 'Joaquim', 'Maria', 'Stella'],
    },
    computed: {
        nomesFiltrados() {
            return this.nomes.filter(nome => {
                // Atribuindo o nome e a busca para minúsculo
                nome = nome.toLowerCase();
                busca = this.busca.toLowerCase();
                // Verificando se o nome contém a busca
                return nome.indexOf(busca) > -1;
            })
        }
    }
})