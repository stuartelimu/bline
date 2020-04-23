// select all dark background with '.bg-dark'
// replace them with '.bg-light'

const icon = document.querySelector(".theme-toggler-icon");
const elements = document.querySelectorAll(".bg-dark");
const w_elements = document.querySelectorAll(".text-white");
let theme = "dark";

icon.addEventListener("click", e => {
  e.preventDefault();
  elements.forEach(element => {
    element.classList.toggle("bg-dark")
  });
  w_elements.forEach(element => {
    element.classList.toggle("text-white")
  });
});

console.log(elements);
