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
        location.href = 'paginaInicial.html'
    }else{
        alert('usuário ou senha incorretos')
    }


})



