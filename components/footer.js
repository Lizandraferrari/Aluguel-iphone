class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" style="padding:3%;">
      <p class="col-md-4 mb-0 text-muted">© 2024 Iluga, Inc</p>
  
      <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img src="image/iluga.png" width="20%">
      </a>
  
      <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Sobre o Iluga</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQ</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Encontre um ponto Iluga</a></li>
      </ul>
    </footer>
      `
    }
}
  
customElements.define('footer-component', Footer);