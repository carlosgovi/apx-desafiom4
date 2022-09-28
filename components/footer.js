function addFooter(el) {
  const footer = document.createElement("div");
  footer.innerHTML = `<div class="footer">
    <div class="footer-logo">
      <img class="logo" src="./img/logo.png" alt="" />
    </div>
    <div class="redes_conteiner">
      <div class="footer-inst">
        <a class="inst" href="https://instagram.com/carlosgovi1">Instagram</a>
        <img class="inst-img" src="./img/instagram.png" alt="" />
      </div>
      <div class="footer-link">
        <a class="link" href="https://linkedin.com/in/carlos-govi-desarrollador-fullstack/">Linkedin</a>
        <img class="link-img" src="./img/linkedin.png" alt="" />
      </div>
      <div class="footer-git">
        <a class="git" href="https://github.com/carlosgovi">Github</a>
        <img class="git-img" src="./img/github.png" alt="" />
      </div>
    </div>
  </div>`;

  el.appendChild(footer);
}
