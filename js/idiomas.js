//Faz as trocas das palavaras para outro idioma //

var arrLang = {
    'en' : {
        'inicio' : 'Home',
        'paravoce' : 'For you',
        'favoritos' : 'Favorites',
        'tdr' : 'All restaurants',
        'conta': 'Create an Account',
        'senha' : 'Password',
        'nome':'Name:',
        'google':"Sign in with Google",
        'facebook':"Sign in with Facebook",
        'email':'Email:',
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
        'pesquisar' : "Search", 
         'cookiespolicy': 'Cookies Policy',
         'What is cookies':"What is cookies?",
         'texto1' : "Cookies are small files downloaded to your computer that enhance your website experience.",
         'disable cookies': "Disable cookies",
          'texto2': "You can prevent cookies by adjusting your browser. Please note that disabling cookies will affect the functionality of other websites you visit. Therefore, it is recommended that you do not disable them.",
          'Ckd': "Cookies we set" , 
          'texto4': "Survey cookies: We offer surveys to serve our users more efficiently. These surveys use cookies to remember who has taken part or to provide accurate results.",
          'texto5':"Forms cookies: When you submit data via a form, such as contact via email (contact), cookies may be set to remember your user details for future correspondence." , 
          'texto6':"Session cookies: We use cookies to ensure that your session on our website is kept active. These cookies are essential to allow you to log in, navigate between pages without having to authenticate repeatedly. Additionally, they help us improve your user experience by remembering your preferences and customizations.",
          'texto7': "Internationalization: We also use cookies to provide the internationalization functionality on our website. These cookies allow us to identify your language preference and display appropriate content based on your choice. That way, we can personalize your experience by presenting relevant information in the correct language." , 
          'CPU':"User Commitment",
          'texto8':"The user agrees to the proper use of the information provided by Michelin. With enunciative character, but not limiting:",
          'texto9':"Not to engage in activities that are contrary to public order;",
          'texto10': "Not to spread racist, xenophobic content, or any type of illegal pornography, against human rights;",
          "texto11":"Not to cause damage to the physical or logical systems of our system, spreading viruses or any other systems that are harmful.",
          'Changes to our policy':"Changes to our policy",
          'texto12':"This Privacy Policy may be updated from time to time. The date of the last update will be indicated at the end of the document. We recommend that you review this policy regularly to stay informed about how we use cookies and protect your personal information.",
          'Mais informações':"More information",
          'texto13':"We only request data when we need it to provide you with a service. Being by legal means, with your consent. We only retain them for as long as necessary, being properly protected. We don't share anything except as required by law.",
          'texto14':"Hopefully that's clear. If you have any questions, please contact us.",
          'texto15':"This policy is effective from",
          'Março':"March",
           'sobre1': "Senior student at the Federal Institute of Education, Science and Technology of São Paulo. ",
           'akemi': "Akemi Alice",
           'rr' : "Quick Meals" ,
           'bp': "Bars and Popular",
           'cf': "Coffee Shops",
           'ham': "Hamburgers", 
           'vv': "Vegans and Vegetarians" , 
           'fm': "Seafood" , 
           'oc' : "Other Cuisine" , 
           'ag' : "Gourmet" , 
           'ecc' : "Contact us" , 
           'men' : "Message:" , 
           'enviar': "Send" , 
           "of": "Other forms of contact:"



          
    },   
    
    'pt' : {
        'inicio' : 'Inicio',
        'paravoce' : 'Para vocês',
        'favoritos' : 'Favoritos',
        'tdr' : 'Todos os restaurantes',
        'conta': 'Criar Conta',
        'senha' : 'Senha',
        'nome':'Nome:',
        'google':"Login com Google",
        'facebook':"Login com Facebook",
        'email':'E-mail:',
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
        'pesquisar' : "Pesquisar",
        'cookiespolicy' : "Política de Cookies",
        'What is cookies':"O que são cookies? ",
        'texto1': "Cookies são pequenos arquivos baixados no seu computador, que melhoram sua experiência no site. ",
        'disable cookies': "Desativar cookies",
        'texto2': "Você pode evitar os cookies ajustando seu navegador. Considere que a desativação de cookies afetará a funcionalidade de outros sites que você visitar. Portanto, é recomendável que você não os desative.",
        'Cookies we set' : "Cookies we set" ,
        'Ckd': "Cookies que definimos" , 
        'texto4': "Cookies de pesquisas: Oferecemos pesquisas para atender nossos usuários com mais eficiência. Essas pesquisas usam cookies para lembrar quem já participou ou para fornecer resultados precisos.",
        'texto5':"Cookies de formulários: Quando você envia dados por meio de um formulário, como os de contato via e-mail (contato), os cookies podem ser configurados para lembrar os detalhes do usuário para correspondência futura." , 
        'texto6': "Cookies de sessão: Utilizamos cookies para garantir que a sua sessão no nosso site seja mantida ativa. Esses cookies são essenciais para permitir que você faça login, navegue entre as páginas sem precisar se autenticar repetidamente. Além disso, eles nos ajudam a melhorar a sua experiência de usuário, lembrando as suas preferências e personalizações." , 
        'texto7': "Internacionalização: Também utilizamos cookies para oferecer a funcionalidade de internacionalização no nosso site. Esses cookies permitem que identifiquemos a sua preferência de idioma e exibamos o conteúdo adequado de acordo com a sua escolha. Dessa forma, podemos personalizar a sua experiência, apresentando informações relevantes no idioma correto. ",
        'CPU': "Compromisso do usuário",
        'texto8':"O usuário se compromete ao uso adequado das informações que o Michelin oferece. Com caráter enunciativo, mas não limitativo:",
        'texto9':"Não se envolver em atividades que sejam contrárias à ordem pública;",
        'texto10': "Não difundir conteúdo racista, xenofóbico, ou qualquer tipo de pornografia ilegal, contra os direitos humanos;",
        "texto11":"Não causar danos aos sistemas físicos ou lógicos do nosso sistema, disseminando vírus ou quaisquer outros sistemas que sejam nocivos.",
        'Changes to our policy':"Alterações em nossa política",
        'texto12':"Esta Política de Privacidade pode ser atualizada periodicamente. A data da última atualização será indicada no final do documento. Recomendamos que você revise esta política regularmente para se manter informado sobre como utilizamos os cookies e protegemos as suas informações pessoais.",
        'Mais informações':"Mais informações",
        'texto13':"Solicitamos dados apenas quando precisamos deles para lhe fornecer um serviço. Sendo por meios legais, com o seu consentimento. Apenas as retemos pelo tempo necessário, sendo devidamente protegido. Não compartilhamos nada, exceto quando exigido por lei. ",
        'texto14':"Esperemos que esteja esclarecido. Se restar dúvidas, entre em contato conosco.",
        'texto15':"Esta política é efetiva a partir de",
        'Março':"Março",
        'sobre1': "Estudante concluinte do Instituto Federal de Educação, Ciência e Tecnologia de São Paulo.",
        'akemi': "Akemi Alice",
        'rr': "Refeições Rápidas" , 
        'bp': "Bares e Populares",
        'cf':"Cafeterias",
        'ham': "Hamburguerias", 
        'vv': "Veganos e Vegetarianos" , 
        'fm': "Frutos do Mar" , 
        'oc' : "Outras Culinárias" , 
        'ag' : "Alta Gastronomia" ,
        'ecc' : "Entre em Contato Conosco" , 
        'men' : "Mensagem:" , 
        'enviar': "Enviar" , 
        "of": "Outras formas de contato:"
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
