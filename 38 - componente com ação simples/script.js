Vue.component('contador', {
    template: `
        <div>
            <button v-on:click='decrementar'>-</button>
            <span>{{ numero }}</span>
            <button v-on:click='incrementar'>+</button>
        </div>
    `,
    data: function () {
        return {
            numero: 0
        }
    },
    methods: {
        incrementar() {
            this.numero++;
        },
        decrementar() {
            this.numero--;
        }
    }
});

let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    }
})