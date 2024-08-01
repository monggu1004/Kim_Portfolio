const faBars = document.querySelector(".fa-bars")
const submenu = document.querySelector(".submenu")


function secondMenu (){

    submenu.classList.toggle("hidden");
   
}

faBars.addEventListener("click", secondMenu)