const btnMode = document.querySelector(".mode");

localStorage.getItem("mode")
  ? document.body.classList.add("light")
  : document.body.classList.remove("light");

btnMode.addEventListener("click", () => {
  if (!document.body.classList.contains("light")) {
    document.body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.remove("light");
    localStorage.setItem("mode", "");
  }
});
