const body = document.body;
const slider = document.getElementById("slider")
const burger = document.getElementById("burger")
const sidebar = document.getElementById("sidebar")
const page = document.getElementById("page")

function themeSwitch(){
  body.classList.toggle("dark");
}

function menuOpen(){
  sidebar.style.display = "block";
  sidebar.style.width = "240px";
  burger.style.display = "none";
  page.style.display = "block";
  sidebar.style.position = "absolute"
}

function menuLock(){
  sidebar.removeAttribute("style");
  burger.removeAttribute("style");
  page.removeAttribute("style")
}

slider.addEventListener("click", themeSwitch);

burger.addEventListener("click", menuOpen);
page.addEventListener("click", menuLock);

