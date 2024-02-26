let content = new Vue({
    el: '#content',
    data: {
        frase: 'Olá vue',
        info: {
            nome: 'Fernando',
            sobrenome: 'Silva',
        }
    }
})

Vue.set(content.info, 'pai', 'Fulando')