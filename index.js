import { loaderController } from "./loader/loaderController.js";
import { notificationsController } from "./notifications/notificationsController.js";
import { showProductsController } from "./show-products/showProductsController.js";
import { sessionController } from './session/sessionController.js';
import { footerController } from "./footer/footerController.js";
import { registerController } from "./register/registerController.js"; // <-- nuevo

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#product-list")
  const navbar = document.querySelector('.session');
  const footer = document.querySelector('.footer');
  const loader = document.querySelector(".loader")
  const notifications = document.querySelector(".notifications")
  const { show, hide } = loaderController(loader)
  const { showNotification} = notificationsController(notifications)

  container.addEventListener('load-products-started', () => {
    show()
  })
  container.addEventListener('load-products-finished', () => {
    hide()
  })
  container.addEventListener('load-products-error', (event) => {
    const errorMesage = event.detail;
    showNotification(errorMesage)
  })

  showProductsController(container)
  sessionController(navbar)
  footerController(footer);

  const registerForm = document.querySelector("#register-form");
  if(registerForm){
    registerForm.addEventListener("register-started", () => show());
    registerForm.addEventListener("register-finished", () => hide());
    registerForm.addEventListener("register-error", (event) => showNotification(event.detail));
    registerForm.addEventListener("register-ok", (event) => showNotification(event.detail.message));

    registerController(registerForm);
  }
})

