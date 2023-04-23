
/*
    // verifica se o usuário está logado
if (!sessionStorage.getItem('usuario') || !sessionStorage.getItem('senha')) {
    location.href = 'paginaLogin.html'; // redireciona o usuário para a página de login se ele não estiver logado
}

// adiciona um listener para o evento popstate
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.from === 'paginaInicial') {
        history.go(-1); // volta para a página anterior
        setTimeout(function() {
            history.replaceState({from: 'paginaInicial'}, '', ''); // substitui a entrada atual no histórico de navegação
        }, 0);
    }
});

//Adiciona um evento de clique no botão "Sair"
let btnSair = document.getElementById('btnSair');

btnSair.addEventListener('click', function() {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    history.replaceState({from: 'paginaInicial'}, '', 'index.html'); // substitui a entrada atual no histórico de navegação
    location.href = 'paginaLogin.html'; // redireciona o usuário para a página de login
});

*/