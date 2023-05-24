

//Faz as trocas das palavaras para outro idioma //

var arrLang = {
    'en' : {
        'inicio' : 'Home',
        'paravoce' : 'For you',
        'favoritos' : 'Favorites',
        'tdr' : 'All restaurants',
        'conta': 'Create an Account',
        'senha' : 'Password',
        'nome':'Name',
        'google':"Sign in with Google",
        'facebook':"Sign in with Facebook",
        'email':'Email',
        'todos os restaurantes - Michelin': 'All Restaurants - Michelin',
        'cadastre-se!-michelin': 'Register! - Michelin',
        'seus favoritos - Michelin': 'Your favorites - Michelin',
        'primeiro acesso' :'First access ?',
        'cadastre-se':'Register',
        'faça seu login': 'Login ! - Michelin',
        'logar': "Log on",
        'conecte-se':'login',
        'Sair': 'Exit',
        'editarcad': "Edit",
        'Politica': "Privacy Policy",
        'Sobre': "About Us",
        'Contato' : "Contact",
        
         
    },
    'pt' : {
        'inicio' : 'Inicio',
        'paravoce' : 'Para vocês',
        'favoritos' : 'Favoritos',
        'tdr' : 'Todos os restaurantes',
        'conta': 'Criar Conta',
        'senha' : 'Senha',
        'nome':'Nome',
        'google':"Login com Google",
        'facebook':"Login com Facebook",
        'email':'E-mail',
        'todos os restaurantes - Michelin': 'Todos os Restaurantes - Michelin',
        'cadastre-se!-michelin': 'Cadastre-se! - Michelin',
        'seus favoritos - Michelin': 'Seus favoritos - Michelin',
        'primeiro acesso' :'Primeiro acesso ?',
        'cadastre-se':'Cadastre-se',
        'faça seu login': 'Faça seu login! - Michelin',
        'logar': "Logar",
        'conecte-se':'Conecte-se',
        'Sair':'Sair',
        'editarcad': "Editar",
        'Politica': "Política de Privacidade",
        'Sobre': "Sobre Nós",
        'Contato' : "Contato",
        
    }
  };



  $(function(){
  $('#year').change(function(){
      var lang = $(this).val();

      $('.lang').each(function(index, element){
          $(this).text(arrLang[lang][$(this).attr('key')]);
      });
  });
});


  // Função para obter o valor de um cookie pelo nome
  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.indexOf(name + '=') === 0) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }
  
  // Função para definir o valor de um cookie
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  
  // Função para obter o idioma do cookie ou do navegador (padrão)
  function getLanguage() {
    var lang = getCookie('lang');
    if (lang && arrLang[lang]) {
      return lang;
    } else {
      return navigator.language.substring(0, 2);
    }
  }
  
  // Função para definir o idioma atual na página e no cookie
  function setLanguage(lang) {
    if (arrLang[lang]) {
      $('.lang').each(function(index, element) { 
        $(this).text(arrLang[lang][$(this).attr('key')]); 
      });
      setCookie('lang', lang, 365);
    }
  }
  
  // Atualiza o idioma quando a página carrega
  $(function() {
    var lang = getLanguage();
    setLanguage(lang);
    $('#year').val(lang); // Atualiza o seletor de idioma
  });
  
  // Atualiza o idioma quando o usuário seleciona uma opção
  $('#year').change(function() {
    var lang = $(this).val();
    setLanguage(lang);
  });
  



