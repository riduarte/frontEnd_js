export function loaderController(loader) {
  const show = () => loader.classList.remove("d-none"); 
  const hide = () => loader.classList.add("d-none");  

  return { show, hide };
}
