const smenu1 = document.querySelector(".smenu1");
const smenu2 = document.querySelector(".smenu2");
const smenu3 = document.querySelector(".smenu3");
const smenu4 = document.querySelector(".smenu4");
// const submenu = document.querySelector(".submenu")

function smenuscroll(targetpage) {
  targetpage.scrollIntoView({ behavior: "smooth", block: "start" });
}

smenu1.onclick = function () {
  submenu.classList.add("hidden");
  const aboutPage = document.querySelector(".aboutpage");
  smenuscroll(aboutPage);
};

smenu2.onclick = function () {
  submenu.classList.add("hidden");
  const skillPage = document.querySelector(".skillpage");
  smenuscroll(skillPage);
};
smenu3.onclick = function () {
  submenu.classList.add("hidden");
  const projectPage = document.querySelector(".projectpage");
  smenuscroll(projectPage);
};
smenu4.onclick = function () {
  submenu.classList.add("hidden");
  const aboutContact = document.querySelector(".contactpage");
  smenuscroll(aboutContact);
};
