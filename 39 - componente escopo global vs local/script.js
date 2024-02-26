Vue.component('componente-global', {
    template: `
        <div>
            <h2>Eu sou um componente global</h2>
        </div>
    `,
})

let componenteHeader = {
    template: `<span>Sou um componente somente do header</span>`
}
let componenteContent = {
    template: `<span>Sou um componente somente do conteúdo</span>`
}

// headertitle
let header = new Vue({
    el: '#header',
    data: {
        frase: 'Olá vue',
    },
    components: {
        'component-header': componenteHeader,
    }
})

// main content
let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    },
    components: {
        'component-conteudo': componenteContent,
    }
})