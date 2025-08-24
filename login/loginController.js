import { REGEXP } from "../utils.js/constants.js";
import { loginUser } from "./loginModel.js";
import { loaderController } from "../loader/loaderController.js";
import { notificationsController } from "../notifications/notificationsController.js";

export const loginController = (form) => {
    const loader = document.querySelector("#loader");
    const notifications = document.querySelector("#notifications");
    const { show, hide } = loaderController(loader);
    const { showNotification } = notificationsController(notifications);

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = form.querySelector('#email').value;
        const password = form.querySelector('#password').value;

        const emailRegExp = new RegExp(REGEXP.email);
        if (!emailRegExp.test(email)) {
            showNotification('El formato del email es incorrecto');
        } else {
            handleLoginUser(email, password);
        }
    });
    async function handleLoginUser(email, password) {
        show(); 
        try {
            const token = await loginUser(email, password); 
            localStorage.setItem("token", token);
            setTimeout(() => {
                window.location = '/createProduct.html';
            }, 500); 
        } catch (err) {
            showNotification(err.message);
        } finally {
            setTimeout(() => hide(), 500); 
        }
    }
}