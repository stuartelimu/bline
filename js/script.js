const icon = document.querySelector(".theme-toggler-icon");
const all_elements = document.querySelectorAll("*");

icon.addEventListener("click", e => {
  e.preventDefault();

  all_elements.forEach(element => {
    if (element.classList.contains("bg-light")) {
      element.classList.remove("bg-light");
      element.classList.add("bg-dark");
    } else if (element.classList.contains("bg-dark")) {
      element.classList.remove("bg-dark");
      element.classList.add("bg-light");
    } else if (element.classList.contains("text-white")) {
      element.classList.remove("text-white");
      element.classList.add("text-dark");
    } else if (element.classList.contains("text-dark")) {
      element.classList.remove("text-dark");
      element.classList.add("text-white");
    }
  });
});
