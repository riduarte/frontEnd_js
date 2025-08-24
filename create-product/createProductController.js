import { createProduct } from "./createProductoModels.js";
import { loaderController } from "../loader/loaderController.js";

export const createProductController = (form) => {
  const loader = document.querySelector("#loader");
  const { show, hide } = loaderController(loader);

  const randomImages = [
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4"
  ];

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = form.querySelector("#nombreProducto").value;
    const description = form.querySelector("#descripcion").value;
    const price = form.querySelector("#precio").value;
    const type = form.querySelector('input[name="type"]:checked')?.value;
    const imageInput = form.querySelector("#image");
    const imageFile = imageInput?.files[0];

    let imageFileName;
    if (imageFile) {
      const randomIndex = Math.floor(Math.random() * randomImages.length);
      imageFileName = randomImages[randomIndex];
    } else {
      imageFileName = "assets/products/placeholder.jpg";
    }

    show();

    try {
      await createProduct(name, description, price, type, imageFileName);
      form.reset();

      setTimeout(() => (window.location = "/"), 2000);
    } catch (error) {
      alert(error.message);
    } finally {
      setTimeout(() => hide(), 5000);
    }
  });
};
