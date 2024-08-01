const aboutMeNav = document.querySelector(".submenu-n1");

function goAbout() {
  const aboutPage = document.querySelector(".aboutpage");
  aboutPage.scrollIntoView({ behavior: "smooth", block: "start" });
}

aboutMeNav.addEventListener("click", goAbout);
