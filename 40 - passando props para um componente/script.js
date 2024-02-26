let postagem = {
    props: ['titulo', 'corpo'],
    data: function () {
        return {
            exemplo: 'algum'
        }
    },
    template: `
        <div>
            <h2>
                {{ titulo }}
            </h2>
            <p>
                {{ corpo }}
            </p>
            <span>
                {{ exemplo }}
            </span>
            <hr>
        </div>
`}
let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    }, components: {
        postagem,
    }
})