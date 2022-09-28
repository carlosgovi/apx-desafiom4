function addHeader(el) {
  const headerEl = document.createElement(`div`);
  headerEl.innerHTML = `      <div class="menu-hamburguesa__conteiner">
  <div class="menu-x-cerrar">
    <img class="menu-x-img-cerrar" src="./img/x.svg" alt="" />
  </div>
  <div class="menu-portafolio">
    <a href="./portfolio.html"> Portafolio </a>
  </div>
  <div class="menu-servicios">
    <a href="./servicios.html"> Servicios </a>
  </div>

  <div class="menu-contacto">
    <a href="./contacto.html"> Contacto </a>
  </div>
</div>
<div class="header-components">

  <div class="header__conteiner-logo">
  <a href="./index.html"> 
  <img class="header-logo"  src="./img/logo.png" alt="" />
  </a>
  </div>

  <div class="header__conteiner-menu">
  <img class="header-menu " src="./img/burger.png" alt="" />
  </div>
  <div class="menu__desktop" >
  
  <a class="menu__desktop-portafolio" href="./portfolio.html">Portafolio</a>
  <a class="menu__desktop-servicios" href="./servicios.html" >Servicios</a>
  <a class="menu__desktop-contacto" href="./contacto.html">Contacto</a>
  </div>
</div>`;
  el.appendChild(headerEl);
  abrirMenu();
  cerrarMenu();
}

function cerrarMenu() {
  const cerrarMenu = document.querySelectorAll(".menu-x-img-cerrar");

  for (let i = 0; i < cerrarMenu.length; i++) {
    cerrarMenu[i].addEventListener("click", () => {
      const conteinerMenu = document.querySelectorAll(
        ".menu-hamburguesa__conteiner"
      );
      for (let i = 0; i < conteinerMenu.length; i++) {
        conteinerMenu[i].style.transform = "translateY(-2000px)";
      }
    });
  }
}

function abrirMenu() {
  const abrirMenu = document.querySelectorAll(".header-menu");

  for (let i = 0; i < abrirMenu.length; i++) {
    abrirMenu[i].addEventListener("click", function () {
      const conteinerMenu = document.querySelectorAll(
        ".menu-hamburguesa__conteiner"
      );
      for (let i = 0; i < conteinerMenu.length; i++) {
        conteinerMenu[i].style.transform = "translateY(0)";
      }
    });
  }
}
