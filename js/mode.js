const btnMode = document.querySelector(".mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

if (localStorage.getItem("mode")) {
  document.body.classList.add("light");
  light.classList.remove("show");
  dark.classList.add("show");
} else {
  document.body.classList.remove("light");
  light.classList.add("show");
  dark.classList.remove("show");
}

btnMode.addEventListener("click", () => {
  if (!document.body.classList.contains("light")) {
    document.body.classList.add("light");
    localStorage.setItem("mode", "light");
    light.classList.remove("show");
    dark.classList.add("show");
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("mode", "");
    light.classList.add("show");
    dark.classList.remove("show");
  }
});
