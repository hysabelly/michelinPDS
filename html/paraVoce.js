function mostrarProximaPergunta(pergunta) {
    // Exibe a próxima pergunta
    document.getElementById(pergunta).style.display = "block";
  }
  
  function mostrarPergunta(pergunta) {
    // Exibe a pergunta selecionada e esconde as outras
    var perguntas = document.getElementsByClassName("form-group");
    for (var i = 0; i < perguntas.length; i++) {
      perguntas[i].style.display = "none";
    }
    document.getElementById(pergunta).style.display = "block";
  
    // Verifica se é a última pergunta
    if (pergunta === "pergunta-3" || pergunta === "pergunta-8" || pergunta === "pergunta-11" || pergunta === "pergunta-15" || pergunta === "pergunta-17" || pergunta === "pergunta-19" || pergunta === "pergunta-21") {
      // Exibe a resposta final e interrompe o questionário
      var resposta = document.getElementById(pergunta).getElementsByTagName("p")[0].innerText;
      document.getElementById("resposta-final").innerHTML = "Sua resposta: " + resposta;
      document.getElementById("resposta-final").style.display = "block";
      document.getElementById("questionario").style.display = "none";
    }
  }
  
  function mostrarErro() {
    // Exibe uma mensagem de erro caso a resposta seja "Não"
    document.getElementById("erro").style.display = "block";
  }
  
  function mostrarPergunta(id) {
    document.getElementById(id).style.display = "block";
  }

  function mostrarProximaPergunta(id) {
    document.getElementById(id).style.display = "block";
    window.scrollTo(0,document.body.scrollHeight);
  }
