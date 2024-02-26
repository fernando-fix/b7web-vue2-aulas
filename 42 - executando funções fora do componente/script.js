let postagem = {
    props: ['titulo'],
    methods: {
        responder() {
            this.$emit('responder', this.titulo);
        }
    },
    template: `
        <div>
            <h2>{{ titulo }} </h2>
            <p><slot></slot></p>
            <button v-on:click="responder">Responder</button>
        </div>
    `
};

let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        responderAberto: false,
        respostaTitulo: '',
    },
    methods:{
        abrirResposta(titulo) {
            this.responderAberto = true;
            this.respostaTitulo = titulo;
        }
    },
    components: {
        postagem,
    }
})