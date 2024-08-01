const clickContact = document.querySelector(".submenu-n4");

function goContact() {
  const aboutContact = document.querySelector(".contactpage");
  aboutContact.scrollIntoView({ behavior: "smooth", block: "start" });
}

clickContact.addEventListener("click", goContact);
