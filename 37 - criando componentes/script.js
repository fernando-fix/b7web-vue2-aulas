Vue.component('menu-do-topo', {
    data: function () {
        return {
            texto: 'menu do topo'
        }
    },
    template: '<h3>Olá eu sou um componente do VUE com um {{ texto }}</h3>'
})



let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
    }
})