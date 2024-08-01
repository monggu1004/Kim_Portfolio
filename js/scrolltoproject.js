const n3click = document.querySelector(".submenu-n3");

function goProject() {
  const projectPage = document.querySelector(".projectpage");
  projectPage.scrollIntoView({ behavior: "smooth", block: "start" });
}

n3click.addEventListener("click", goProject);
