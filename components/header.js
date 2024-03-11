class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
      <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html" >
        <img src = "image/iluga.png" style="width: 12%">
        </a>
        <a class = "navbar-item linkdiv" href="cadastro.html">Cadastro</a>
        <a class = "navbar-item linkdiv" href="login.html">Login</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h2 " id="offcanvasDarkNavbarLabel" >Produtos</h2>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
                <a class="hvr" href="#" >Todas opções</a>
              </li><br>
              <li class="nav-item">
                <a class="hvr"  href="#" >Aluguel em estúdio sem fotográfo</a>
              </li><br>
              <li class="nav-item">
                <a class="hvr"  href="#">Aluguel em estúdio com fotográfo</a>
              </li><br>
              <li class="nav-item">
                <a class="hvr"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Aluguel com retirada do aparelho
                </a>
                </li><br><br><br>
                <li class="nav-item position-absolute bottom-0 ">
                <a class="hvr"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false ">
                  Locais de retirada/estudios
                </a><br><br>
                </li>
            </header>
            <br><br>
      `;
    }
  }
  
  customElements.define('header-component', Header);