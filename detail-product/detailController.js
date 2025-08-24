import { detailProductModel, getLoggedInUserInfo, removeProduct } from "./detailModels.js"
import { buildProductDetailView, buildRemoveProductButton } from "./detailView.js"
import { loaderController } from "../loader/loaderController.js";

export const detailController = async (container, id) => {
    const loader = document.querySelector(".loader");
    const { show, hide } = loaderController(loader);

    const showRemoveProductButton = (id) =>{
        const removeButton = buildRemoveProductButton()
        const btnBox= document.querySelector('.btn-box')
        btnBox.appendChild(removeButton)
        removeButton.classList.add('btn', 'btn-danger', 'text-white');

removeButton.addEventListener("click", async ()=>{
    if(confirm("¿Estas seguro que quierer borrar el producto?")){
        show();
        try {
            await removeProduct(id)
            setTimeout(() => {
                hide();
                window.location = '/'; 
            }, 3000);

        } catch (error) {
            hide()
            alert(error.message || "Error al eliminar el producto", "error");
        }
    }
});
    }

    try {
        const productDetail = await detailProductModel(id)
        container.innerHTML = buildProductDetailView(productDetail)

        const user = await getLoggedInUserInfo();

        if(user.id === productDetail.userId){
            showRemoveProductButton(id)
        }

    } catch (error) {
        alert(error.message || "No se pudo cargar el producto")
    }
}
