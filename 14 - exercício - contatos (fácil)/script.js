let app = new Vue({
    el: '#app',
    data: {
        fnome: '',
        pessoas: [],
    },
    methods: {
        adicionar() {
            if (this.fnome != '') {
                this.pessoas.push({ nome: this.fnome })
                this.fnome = ''
            } else {
                alert('Preencha o campo nome')
            }
        },
        remover: function (pessoa) {
            let index = this.pessoas.indexOf(pessoa)
            this.pessoas.splice(index, 1)
        }
    }
})