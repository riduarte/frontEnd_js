export const bulidProduct = (product) => {

  const imageSrc = product.image || "assets/products/placeholder.jpg";

  return `
    <div class="card h-100" style="width: 12rem; min-width: 160px;">
      <img src="${imageSrc}" class="card-img-top" alt="${product.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text"><strong>Descripción:</strong> ${product.description}</p>
        <p class="card-text"><strong>Precio:</strong> ${product.price} €</p>
        <div class="mt-auto text-center">
          <a href="./product-detail.html?id=${product.id}" class="text-primary text-decoration-underline" style="font-size: 0.85rem;">Ver más</a>
        </div>
      </div>
    </div>
  `;
}

export const buildNoProductsAdvice = () => {
  return '<h3>Lo siento, no hay productos disponibles!</h3>'
}
