import { registerController } from "./register/registerController.js"
import { notificationsController } from "./notifications/notificationsController.js";
import { sessionController } from "./session/sessionController.js";
import { footerController } from "./footer/footerController.js";


document.addEventListener('DOMContentLoaded',()=>{
    const navbar = document.querySelector('.session');
    const footer = document.querySelector('.footer');
    const registerForm = document.querySelector('form')
    const notifications = document.querySelector('.notifications')

    const { showNotification} = notificationsController(notifications)

    registerForm.addEventListener('register-error', (event) => {
        const errorMesage = event.detail;
        showNotification(errorMesage)
      })
    
    registerForm.addEventListener('register-ok', (event) => {
        const errorMesage = event.detail.message;
        const type = event.detail.type
        showNotification(errorMesage, type)
    })

      registerController(registerForm)
      sessionController(navbar);
      footerController(footer);
})