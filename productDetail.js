import { detailController } from "./detail-product/detailController.js"
import { footerController } from "./footer/footerController.js"
import { sessionController } from "./session/sessionController.js"

document.addEventListener("DOMContentLoaded",()=>{

    const searchParams = new URLSearchParams(window.location.search)
    const prodcutId = searchParams.get("id")
    if (prodcutId) {
        const container = document.querySelector(".products-container")
        const navbar = document.querySelector(".session")
        const footer = document.querySelector('.footer');
        
        detailController(container, prodcutId)
        sessionController(navbar);
        footerController(footer);
      } else {
        window.location = '/'
      }
})