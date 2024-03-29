function mostrarPergunta(id) {
  // Exibe a pergunta selecionada e esconde as outras
  var perguntas = document.getElementsByClassName("form-group");
  for (var i = 0; i < perguntas.length; i++) {
    perguntas[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";

  // Verifica se é a última pergunta
  if (
    id === "pergunta-3" ||
    id === "pergunta-5" ||
    id === "pergunta-7" ||
    id === "pergunta-8" ||
    id === "pergunta-10" ||
    id === "pergunta-11" ||
    id === "pergunta-13" ||
    id === "pergunta-15" ||
    id === "pergunta-17" ||
    id === "pergunta-19" ||
    id === "pergunta-20"
  ) {
    // Exibe a resposta final e interrompe o questionário
    var resposta = document.getElementById(id).getElementsByTagName("p")[0].innerText;
    document.getElementById("resposta").innerHTML = "Sua resposta: " + resposta;
    document.getElementById("resposta-final").style.display = "block";
  }
}

function mostrarProximaPergunta(idProximaPergunta) {
  mostrarPergunta(idProximaPergunta);
}
