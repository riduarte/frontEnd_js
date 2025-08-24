import { createrUser } from "./registerModel.js";
import {REGEXP} from "../utils.js/constants.js";

export const registerController = (form) => {

    form.addEventListener("submit",(event)=>{
        event.preventDefault();

        const nameElement = form.querySelector('#name')
        const name = nameElement.value

        const emailElement = form.querySelector('#email')
        const email = emailElement.value

        const passwordElement = form.querySelector('#password')
        const password = passwordElement.value

        const validedPasswordElement = form.querySelector('#valided-password')
        const validedPassword = validedPasswordElement.value

        const errors = []

        const emailRegExp = new RegExp(REGEXP.email);
        if(!emailRegExp.test(email)){
            errors.push('El formato del email es incorrecto')
        }
        
        if (password !== validedPassword){
            errors.push('Las contraseñas no son iguales')
        }

        if(errors.length === 0){
            form.dispatchEvent(new Event('register-started'));
            handleCreateUser(name, email, password)
        }else{
            errors.forEach(error=>{
                const event = new CustomEvent('register-error',{
                    detail: error
                })
                form.dispatchEvent(event)
            })
        }
    })
const handleCreateUser = async (name, email, password) =>{
    try {
        await createrUser(name,email,password, form)
        const event = new CustomEvent('register-ok',{
            detail: {
                message:'Registrado correctamente, inicia sesion',
                type: 'success'
            }
        })
        form.dispatchEvent(event)
        setTimeout(()=>{
            window.location = '/'
        },5000)

    } catch (error) {
            const event = new CustomEvent('register-error',{
                detail: error.message
            })
            form.dispatchEvent(event)
        } finally {
            form.dispatchEvent(new Event('register-finished'))
        }
    }
}