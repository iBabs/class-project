const menu = document.querySelector(".menu")
const sidebar = document.querySelector(".side-bar")
const hideMenu = document.querySelector(".hide-menu")

menu.addEventListener("click", ()=>{
  // sidebar.style.display = "flex"
  sidebar.classList.add("show")
})



hideMenu.addEventListener("click", ()=>{
  // sidebar.style.display = "flex"
  sidebar.classList.remove("show")
})