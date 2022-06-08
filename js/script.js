document.getElementById("portrait").onclick = function () {
  alert("this is me swimming with a manta ray in Coral Bay, WA");
};

const themeToggle = document.getElementById("toggle-theme");
const navItems = document.querySelectorAll("navigation-items");
let lightMode = true;

themeToggle.onclick = function () {
  if (lightMode) {
    document.body.style.backgroundColor = "#010812";
    document.body.style.color = "#e3e9fc";
    navItems.forEach((item) => {
      item.style.color = "#e3e9fc";
    });
  } else {
    document.body.style.backgroundColor = "#f7f9ff";
    document.body.style.color = "#010812";
    navItems.forEach((item) => {
      item.style.color = "#010812";
    });
  }
  lightMode = !lightMode;
  themeToggle.innerHTML = `Switch to ${lightMode ? "Dark" : "Light"} Mode!`;
};
