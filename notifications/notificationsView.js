export const buildNotification = (message) => {
  return `
    <span>${message}</span>
    <button type="button" class="btn-close" aria-label="Close"></button>
  `;
}
