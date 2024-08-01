const aboutSkill = document.querySelector(".submenu-n2");

function skilEvent() {
  const skillPage = document.querySelector(".skillpage");
  skillPage.scrollIntoView({ behavior: "smooth", block: "start" });
}

aboutSkill.addEventListener("click", skilEvent);
