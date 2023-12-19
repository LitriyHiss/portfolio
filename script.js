const body = document.body;
const slider = document.getElementById("slider")

function themeSwitch(){
  body.classList.toggle("dark");
}

slider.addEventListener("click", themeSwitch);
