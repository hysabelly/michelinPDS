//Configuração do primeiro carrossel
const carousel = document.querySelector(".RefeiçõesRápidas .carousel"),
firstImg = carousel.querySelectorAll(".RefeiçõesRápidas img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

//Configuração do segundo carrossel
const newCarousel = document.querySelector('.Alta .carousel');
const newArrowIcons = document.querySelectorAll('.Alta i');
const newFirstImg = document.querySelector('.Alta img');

//Configuração do terceiro carrossel
const newCarousel2 = document.querySelector('.Veganos .carousel');
const newArrowIcons2 = document.querySelectorAll('.Veganos i');
const newFirstImg2 = document.querySelector('.Veganos img');

//Configuração do quarto carrossel
const newCarousel3 = document.querySelector('.Frutos-do-mar .carousel');
const newArrowIcons3 = document.querySelectorAll('.Frutos-do-mar i');
const newFirstImg3 = document.querySelector('.Frutos-do-mar img');

//Configuração do quinto carrossel
const newCarousel4 = document.querySelector('.Hamburguerias .carousel');
const newArrowIcons4 = document.querySelectorAll('.Hamburguerias i');
const newFirstImg4 = document.querySelector('.Hamburguerias img');

//Configuração do sexto carrossel
const newCarousel5 = document.querySelector('.Outras-Culinárias .carousel');
const newArrowIcons5 = document.querySelectorAll('.Outras-Culinárias i');
const newFirstImg5 = document.querySelector('.Outras-Culinárias img');

//Configuração do sétimo carrossel
const newCarousel6 = document.querySelector('.Bares-e-Populares .carousel');
const newArrowIcons6 = document.querySelectorAll('.Bares-e-Populares i');
const newFirstImg6 = document.querySelector('.Bares-e-Populares img');

//Configuração do oitavo carrossel
const newCarousel7 = document.querySelector('.Cafeterias .carousel');
const newArrowIcons7 = document.querySelectorAll('.Cafeterias i');
const newFirstImg7 = document.querySelector('.Cafeterias img');



let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

//Configiração do primeiro carrossel
    const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

//Configuração do segundo carrossel
    const showHideNewIcons = () => {
    let newScrollWidth = newCarousel.scrollWidth - newCarousel.clientWidth;
    newArrowIcons[0].style.display = newCarousel.scrollLeft == 0 ? 'none' : 'block';
    newArrowIcons[1].style.display = newCarousel.scrollLeft == newScrollWidth ? 'none' : 'block';
  };

//Configuração do terceiro carrossel
    const showHideNewIcons2 = () => {
    let newScrollWidth = newCarousel2.scrollWidth - newCarousel2.clientWidth;
    newArrowIcons2[0].style.display = newCarousel2.scrollLeft == 0 ? 'none' : 'block';  
    newArrowIcons2[1].style.dispaly = newCarousel2.scrollLeft == newScrollWidth ? 'none' : 'block';
}

//Configuração do quarto carrossel
    const showHideNewIcons3 = () => {
    let newScrollWidth = newCarousel3.scrollWidth - newCarousel3.clientWidth;
    newArrowIcons3[0].style.display = newCarousel3.scrollLeft == 0 ? 'none' : 'block';
    newArrowIcons3[1].style.display = newCarousel3.scrollLeft == newScrollWidth ? 'none' : 'block';
  };

//Configuração do quinto carrossel
    const showHideNewIcons4 = () => {
    let newScrollWidth = newCarousel4.scrollWidth - newCarousel4.clientWidth;
    newArrowIcons4[0].style.display = newCarousel4.scrollLeft == 0 ? 'none' : 'block';
    newArrowIcons4[1].style.display = newCarousel4.scrollLeft == newScrollWidth ? 'none' : 'block';
  };

//Configuração do sexto carrossel
    const showHideNewIcons5 = () => {
    let newScrollWidth = newCarousel5.scrollWidth - newCarousel5.clientWidth;
    newArrowIcons5[0].style.display = newCarousel5.scrollLeft == 0 ? 'none' : 'block';
    newArrowIcons5[1].style.display = newCarousel5.scrollLeft == newScrollWidth ? 'none' : 'block';
  };

  //Configuração do sétimo carrossel
  const showHideNewIcons6 = () => {
    let newScrollWidth = newCarousel6.scrollWidth - newCarousel6.clientWidth;
    newArrowIcons6[0].style.display = newCarousel6.scrollLeft == 0 ? 'none' : 'block';
    newArrowIcons6[1].style.display = newCarousel6.scrollLeft == newScrollWidth ? 'none' : 'block';
  };

  //Configuração do oitavo carrossel
  const showHideNewIcons7 = () => {
    let newScrollWidth = newCarousel7.scrollWidth - newCarousel7.clientWidth;
    newArrowIcons7[0].style.display = newCarousel7.scrollLeft == 0 ? 'none' : 'block';
    newArrowIcons7[1].style.display = newCarousel7.scrollLeft == newScrollWidth ? 'none' : 'block';
  };


//Configuração do primeiro carrossel
        arrowIcons.forEach(icon => {
        icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

//Configuração do segundo carrossel
      newArrowIcons.forEach(icon => {
      icon.addEventListener('click', () => {
      let newFirstImgWidth = newFirstImg.clientWidth + 14;
      newCarousel.scrollLeft += icon.id == 'new-left' ? -newFirstImgWidth : newFirstImgWidth;
      setTimeout(() => showHideNewIcons(), 60);
    });
  });

//Configuração do terceiro carrossel
        newArrowIcons2.forEach(icon => {
        icon.addEventListener('click', () => {
        let newFirstImgWidth = newFirstImg2.clientWidth + 14;
        newCarousel2.scrollLeft += icon.id == 'new-left2' ? -newFirstImgWidth : newFirstImgWidth;
        setTimeout(() => showHideNewIcons2(), 60);
    })
});

//Configuração do quarto carrossel
        newArrowIcons3.forEach(icon => {
        icon.addEventListener('click', () => {
        let newFirstImgWidth = newFirstImg2.clientWidth + 14;
        newCarousel3.scrollLeft += icon.id == 'new-left3' ? -newFirstImgWidth : newFirstImgWidth;
        setTimeout(() => showHideNewIcons3(), 60);
    })
});

//Configuração do quinto carrossel
        newArrowIcons4.forEach(icon => {
        icon.addEventListener('click', () => {
        let newFirstImgWidth = newFirstImg4.clientWidth + 14;
        newCarousel4.scrollLeft += icon.id == 'new-left4' ? -newFirstImgWidth : newFirstImgWidth;
        setTimeout(() => showHideNewIcons4(), 60);
    })
});

//Configuração do sexto carrossel
        newArrowIcons5.forEach(icon => {
        icon.addEventListener('click', () => {
        let newFirstImgWidth = newFirstImg5.clientWidth + 14;
        newCarousel5.scrollLeft += icon.id == 'new-left5' ? -newFirstImgWidth : newFirstImgWidth;
        setTimeout(() => showHideNewIcons5(), 60);
    })
});

//Configuração do sétimo carrossel
newArrowIcons6.forEach(icon => {
  icon.addEventListener('click', () => {
  let newFirstImgWidth = newFirstImg6.clientWidth + 14;
  newCarousel6.scrollLeft += icon.id == 'new-left6' ? -newFirstImgWidth : newFirstImgWidth;
  setTimeout(() => showHideNewIcons6(), 60);
})
});

//Configuração do oitavo carrossel
newArrowIcons7.forEach(icon => {
  icon.addEventListener('click', () => {
  let newFirstImgWidth = newFirstImg6.clientWidth + 14;
  newCarousel7.scrollLeft += icon.id == 'new-left7' ? -newFirstImgWidth : newFirstImgWidth;
  setTimeout(() => showHideNewIcons7(), 60);
})
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// Janela pop-up configuração

// Seleciona todas as imagens
const images = document.querySelectorAll('img');

// Seleciona a janela pop-up e os elementos de conteúdo
const popup = document.getElementById('popup');
const popupNome = document.getElementById('popup-nome');
const popupEndereco = document.getElementById('popup-endereco');
const popupTelefone = document.getElementById('popup-telefone');
const popupSite = document.getElementById('popup-site');
const popupProximo = document.getElementById('popup-proximo');


// Adiciona um evento de clique a cada imagem
images.forEach(image => {
  image.addEventListener('click', () => {
    // Obtém os dados da imagem clicada
    const nome = image.dataset.nome;
    const endereco = image.dataset.endereco;
    const telefone = image.dataset.telefone;
    const site = image.dataset.site;
    const proximo = image.dataset.proximo;
    

    // Preenche a janela pop-up com os dados da imagem
    popupNome.textContent = nome;
    popupEndereco.textContent = endereco;
    popupTelefone.textContent = telefone;
    popupSite.textContent = site;
    popupProximo.textContent = proximo;

   
    // Exibe a janela pop-up
    popup.style.display = 'block';
  });
})
/* Fecha a janela ao clicar no X */
var closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});
