Vue.component('aviso', {
    template: `
        <div>
            <h2>
                <slot name="titulo"></slot>
            </h2>
            <slot></slot>
        </div>
    `
});

let postagem = {
    props: ['titulo', 'subtitulo'],
    template: `
        <div>
            <h2><slot name='subtitulo'></slot></h2>
            <h3>{{ subtitulo }}</h3>
            <p>
                <slot></slot>
            <p>
            <hr>
        </div>
    `
};

let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    },
    components: {
        postagem
    }
})