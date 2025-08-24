import { createProductController } from "./create-product/createProductController.js"
import { footerController } from "./footer/footerController.js"
import { sessionController } from "./session/sessionController.js"

document.addEventListener('DOMContentLoaded',()=>{
    const token = localStorage.getItem('token')
    
    if (!token){
        window.location = '/login.html'
    }
   const createProductForm = document.querySelector('form')
   const navbar = document.querySelector('.session');
   const footer = document.querySelector('.footer');
    sessionController(navbar);
   createProductController(createProductForm)
   footerController(footer)

})