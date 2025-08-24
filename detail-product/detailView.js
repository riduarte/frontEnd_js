export const buildProductDetailView = (product) => {
    let detailProduct = `
    <div class="card mb-3" style="max-width: 800px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${product.image || 'assets/products/placeholder.jpg'}" class="img-fluid rounded-start" alt="Imagen del producto">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="name" class="form-label fw-bold">Nombre del producto:</label>
                        <span id="name">${product.name}</span>
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label fw-bold">Descripción:</label>
                        <span id="description">${product.description}</span>
                    </div>

                    <div class="mb-3">
                        <label for="price" class="form-label fw-bold">Precio:</label>
                        <span id="price">${product.price} €</span>
                    </div>
                    <div class="mb-3">
                        <label for="createdBy" class="form-label fw-bold">Creado por:</label>
                        <span id="createdBy">${product.user.name}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    return detailProduct;
}

export const buildRemoveProductButton = () =>{
    const removeButton = document.createElement("button");
    removeButton.textContent = 'Borrar producto'
    
    return removeButton
}
