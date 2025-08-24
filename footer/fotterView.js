export function footerView(container) {
    return `
      <footer class="bg-dark text-white mt-5 py-4">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
              <p class="text-white fw-bold">Creado por Richard Duarte</p>
            </div>
            <div class="col-12 text-center">
              <a href="https://facebook.com" class="text-white mx-2" target="_blank">
                <i class="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" class="text-white mx-2" target="_blank">
                <i class="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://github.com" class="text-white mx-2" target="_blank">
                <i class="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
  