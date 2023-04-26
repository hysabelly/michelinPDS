

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
        'conecte-se':'login'
         
    },
    'pt' : {
        'inicio' : 'Inicio',
        'paravoce' : 'Para vocês',
        'favoritos' : 'Favoritos',
        'tdr' : 'Todos os restaurantes',
        'conta': 'Criar Conta',
        'senha' : 'Senha',
        'nome':'Nome',
        'google':"Faça login no Google",
        'facebook':"Faça login com o Facebook",
        'email':'E-mail',
        'todos os restaurantes - Michelin': 'Todos os Restaurantes - Michelin',
        'cadastre-se!-michelin': 'Cadastre-se! - Michelin',
        'seus favoritos - Michelin': 'Seus favoritos - Michelin',
        'primeiro acesso' :'Primeiro acesso ?',
        'cadastre-se':'Cadastre-se',
        'faça seu login': 'Faça seu login! - Michelin',
        'logar': "Logar",
        'conecte-se':'Conecte-se'
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



