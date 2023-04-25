//Criação de um Array com os usuários e senhas deles -  Qualquer login além desses não será executado e vai dar erro

const usuarios = [
    {
        login: 'victor@gmail.com',
        pass: 'victor123'
    },
    {
        login: 'julio@gmail.com',
        pass: 'julio123'
    },
    {
        login: 'admin@gmail.com',
        pass: 'admin123'
    }
]

//Adiciona um evento de clique no botão login - e traz as informações dele pra cá

let botao = document.getElementById('btnLogar')

botao.addEventListener('click' , function logar(){

    //Pega as informações que o usuário escreveu na página de login

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false
    
    //Verificas se as informações correspondem aos dados armazenados na Array

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            
            validaLogin = true
            break
        }
        
        
    }

    //Se as informações respondidas corresponderem ao que está na Array o usuário é levado para a página inicial
     //Se as informações estiverem incorretas aparece uma janela de erro.
     
     

    if(validaLogin == true){
      window.location.replace('paginaInicial.html');
      

    }
    
    else{
        alert('usuário ou senha incorretos')
    }


})

//Código para API do google


  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }

  function onFailure(error) {
    console.log(error);
  }

  function signIn() {
    var googleUser = gapi.auth2.getAuthInstance().signIn();
    googleUser.then(onSuccess, onFailure);
  }

  function renderButton() {
    gapi.signin2.render('google-signin-button', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }
  gapi.load('auth2', function() {
    gapi.auth2.init({
      client_id: 'YOUR_CLIENT_ID_HERE', //Trocar pelo ID que o google cloud vai fornecer
    });
    renderButton();
  });

  //Código para API do facebook
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      console.log('Logged in as: ' + response.authResponse.name);
    } else {
      console.log('Not logged in.');
    }
  }

  function signIn() {
    FB.login(function(response) {
      statusChangeCallback(response);
    }, {scope: 'public_profile,email'});
  }





