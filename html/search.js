//Obtendo os elementos
var searchIcon = document.getElementById("search-icon"); 
var searchContainer = document.querySelector(".inline-search-component"); 
var navbarNav = document.querySelector(".navbar-nav"); 
//Adiciona ou remove as classes, à navbar e a ao search
searchIcon.addEventListener("click", function() {
  searchContainer.classList.toggle("active");
  navbarNav.classList.toggle("expanded"); 
//Define a margem direita quando search está ativo, se não restaura a margem direita pro padrão quando search é fechado
  if (searchContainer.classList.contains("active")) {
    navbarNav.style.marginRight = "150px"; 
  } else {
    navbarNav.style.marginRight = ""; 
  }
});
//Remove a classe active e expanded do search ao clicar fora dele
document.addEventListener("click", function(event) {
  if (!searchIcon.contains(event.target) && !searchContainer.contains(event.target)) {
    searchContainer.classList.remove("active"); 
    navbarNav.classList.remove("expanded");
    //Restaura a margem direita pra padrão quando o search é fechado
    navbarNav.style.marginRight = ""; 
  }
});