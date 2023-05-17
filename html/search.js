// Pega referências para os elementos do DOM
var searchIcon = document.getElementById("search-icon");
var searchClose = document.getElementById("search-close");
var searchContainer = document.querySelector(".inline-search-component");

// Adiciona um evento de clique ao ícone de pesquisa
searchIcon.addEventListener("click", function() {
// Alterna a classe "active" do contêiner de pesquisa quando o ícone é clicado
  searchContainer.classList.toggle("active");
});

// Adicionando um evento de clique ao botão de fechar
searchClose.addEventListener("click", function() {
// Removendo a classe "active" do contêiner de pesquisa quando o botão de fechar é clicado
  searchContainer.classList.remove("active");
});
