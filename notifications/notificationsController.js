import { buildNotification } from "../notifications/notificationsView.js";

export function notificationsController(notifications) {

  const showNotification = (message, type = 'error') => {

    const newNotification = document.createElement('div');
    newNotification.classList.add(
      'notification', 
      'alert', 
      type === 'error' ? 'alert-danger' : 'alert-success', 
      'd-flex', 
      'justify-content-between', 
      'align-items-center', 
      'mb-2'
    );

    newNotification.innerHTML = buildNotification(message);
    notifications.appendChild(newNotification);

    const closeNotification = () => {
      newNotification.remove();
    }

    const button = newNotification.querySelector("button");
    button.addEventListener("click", closeNotification);
    
    setTimeout(closeNotification, 10000);
  }

  return { showNotification };
}


