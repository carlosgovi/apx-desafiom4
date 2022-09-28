function agregarHeader() {
  const headerBienvenida = document.querySelector(".header-component");
  addHeader(headerBienvenida);
  const headerServicios = document.querySelector(".header__servicios");
  addHeader(headerServicios);
}
function agregarMail() {
  const formulario = document.querySelector(".form__conteiner");
  contacto(formulario);
}
function agregarFooter() {
  const footer = document.querySelector(".footer__conteiner");
  addFooter(footer);
}

function contenfulFetch() {
  const promesa = fetch(
    `
      https://cdn.contentful.com/spaces/sira3rgjcuk8/environments/master/entries/?access_token=_90XOUJILpmOL958dCQI0xTSsX_-kGlXQiSQ6AFG3oI`
  );
  promesa.then((res) => {
    res.json().then((dato) => {
      //envio datos a procesDATO -para servicios
      procesDataServicios(dato);
    });
  });
}

function main() {
  agregarHeader();
  contenfulFetch();

  agregarFooter();
}
main();
