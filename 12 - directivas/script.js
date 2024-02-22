let app = new Vue({
	el: '#app',
	data: {
		aviso: true,
		divid: 'qualquer',
		link: 'https://vuejs.org'
	},
	methods: {
		mostrar: () => {
			alert('Clicou no botão');
		},
		enviou: function () {
			alert('Enviou um formulário');
		}
	}
});