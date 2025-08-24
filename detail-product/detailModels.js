export async function detailProductModel(productId) {

  const response = await fetch(`http://localhost:8000/api/products/${productId}?_expand=user`)

  if(!response.ok){

      throw new Error("Producto no disponible")

    }
    const detailProduct = await response.json();

    return detailProduct;
  }

  export async function removeProduct(productId) {

    const token = localStorage.getItem('token')

    const response = await fetch(`http://localhost:8000/api/products/${productId}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
    })
  
    if(!response.ok){
  
        throw new Error("Producto no disponible")
      }
    }
  

  export async function getLoggedInUserInfo() {

  const token = localStorage.getItem('token')


  const response = await fetch(`http://localhost:8000/auth/me`,{
    headers: {
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    }
    });

    if (!response.ok) {
      throw new Error("Usuario no existe"); 
    }

    const user = await response.json()

    return user
   }
