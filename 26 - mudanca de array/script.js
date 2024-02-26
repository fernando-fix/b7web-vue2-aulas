let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        lista: ['Fernando', 'Joaquim', 'Maria', 'Stella'],
    }
})

Vue.set(content.lista, 0, 'Joaquim')
Vue.set(content.lista, 1, 'Maria')
Vue.set(content.lista, 2, 'Stella')
Vue.set(content.lista, 3, 'Fernando')
