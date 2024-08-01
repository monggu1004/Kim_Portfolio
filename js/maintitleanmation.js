document.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector(".titleone");

  function shake() {
    title.classList.add("shake");
  }

  title.addEventListener("animationend", shake);
});
