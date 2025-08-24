export const buildUnauthorizationSession = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-info px-4 py-2">
      <a class="navbar-brand text-white" href="/">
        <i class="fas fa-home"></i> <!-- Ícono de casa -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto"></ul>
        <div class="d-flex gap-3">
          <a href="./login.html" class="nav-link text-white" style="text-decoration: none;">
            <i class="fas fa-sign-in-alt"></i> Iniciar sesión
          </a>
          <a href="./register.html" class="nav-link text-white" style="text-decoration: none;">
            <i class="fas fa-user-plus"></i> Registrarse
          </a>
        </div>
      </div>
    </nav>
  `;
};

export const buildAuthorizationSession = () => {
  return `
    <nav class="navbar navbar-expand-lg navbar-light bg-info px-4 py-2">
      <a class="navbar-brand text-white" href="/">
        <i class="fas fa-home"></i> <!-- Ícono de casa -->
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav me-auto"></ul>
        <div class="d-flex gap-3">
          <a href="./createProduct.html" class="nav-link text-white" style="text-decoration: none;">
            <i class="fas fa-plus-circle"></i> Crear producto
          </a>
          <button class="nav-link text-white border-0 bg-transparent" id="btn-logout" style="text-decoration: none;">
            <i class="fas fa-sign-out-alt"></i> Cerrar sesión
          </button>
        </div>
      </div>
    </nav>
  `;
};


