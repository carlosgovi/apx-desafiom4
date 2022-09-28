function agregarHeader() {
  const headerContacto = document.querySelector(".header-component");
  addHeader(headerContacto);
}
function agregarMail() {
  const formulario = document.querySelector(".form__conteiner");
  contacto(formulario);
}
function agregarFooter() {
  const footer = document.querySelector(".footer__conteiner");
  addFooter(footer);
}
function main() {
  agregarHeader();
  agregarMail();
  agregarFooter();
}
main();
