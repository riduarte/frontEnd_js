import { buildAuthorizationSession, buildUnauthorizationSession } from "./sessionView.js";

export function sessionController(container) {

  const isUserLoggedIn = !!localStorage.getItem("token")

  if(isUserLoggedIn){
    container.innerHTML = buildAuthorizationSession()

    const logoutButton = container.querySelector('#btn-logout')
    logoutButton.addEventListener("click", () =>{
      localStorage.removeItem("token")
      sessionController(container)
      window.location = "/index.html";
    })
  }else{
    container.innerHTML = buildUnauthorizationSession()
  }
}