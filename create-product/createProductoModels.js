export const createProduct = async (name, description, price, type, imageFileName) => {
  const token = localStorage.getItem("token");

  const image = imageFileName || "assets/products/placeholder.jpg";

  const response = await fetch("http://localhost:8000/api/products", {
    method: "POST",
    body: JSON.stringify({
      name,
      description,
      price,
      type,
      image
    }),
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.message || "No se ha podido crear el producto");
  }
};
