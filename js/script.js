const workEl = document.querySelector(".section-work");

workEl.addEventListener("mouseover", function (e) {
  e.preventDefault();

  // console.log(e.target.closest(".project"));
  if (e.target.closest(".project")) {
    const project = e.target.closest(".project");
    const id = project.getAttribute("id");
    const img = project.querySelector(".project-img");

    img.classList.add(id);
    // console.log(e.target);
  }
});
