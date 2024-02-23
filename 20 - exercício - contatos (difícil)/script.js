let content = new Vue({
    el: '#content',
    data: {
        pessoas: [
            { name: 'Fernando' },
            { name: 'Joaquim' },
            { name: 'Maria' },
        ],
        fname: '',
        digitando: false,
        timer: null,
    },
    watch: {
        fname: function () {

            if (this.timer) clearTimeout(this.timer);
            if (this.fname.length != 0) this.digitando = true;
            this.timer = setTimeout(() => {
                this.digitando = false;
            }, 1000);

        }
    },
    computed: {
        btnAdicionar() {
            if (!this.digitando && this.fname.length > 3) {
                return true;
            } else {
                return false;
            }
        }
    },

    methods: {
        adicionar() {
            if (this.fname != '') {
                this.pessoas.push({ name: this.fname })
                this.fname = ''
            } else {
                alert('Preencha o campo nome')
            }
        },
        remover(pessoa) {
            let index = this.pessoas.indexOf(pessoa)
            this.pessoas.splice(index, 1)
        }
    },
})