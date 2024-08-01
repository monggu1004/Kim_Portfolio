const homeDiv = document.querySelector(".home");

function homeClick() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

homeDiv.addEventListener("click", homeClick);
