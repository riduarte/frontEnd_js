import { footerController } from "./footer/footerController.js";
import {loginController} from "./login/loginController.js"
import { sessionController } from "./session/sessionController.js";

document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('form')
    const navbar = document.querySelector('.session');
    const footer = document.querySelector('.footer');
    loginController(form)
    sessionController(navbar);
    footerController(footer)
})