Vue.component('pais', {
    props: ['nome', 'continente'],
    template: `
    <div>
        <img :src="'paises/' + nome + '.png'">
        <p>
            <strong>
                {{ continente }}
            </strong>
        </p>
    </div>
    `,
})

let app = new Vue({
    el: '#app',
    data: {
        frase: 'olá vue',
    }
})
