const workEl = document.querySelector(".section-work");

workEl.addEventListener("mouseover", function (e) {
  e.preventDefault();

  // console.log(e.target.closest(".project"));
  if (e.target.closest(".project")) {
    const project = e.target.closest(".project");
    const id = project.getAttribute("id");
    const imgEl = project.querySelector(".project-img");
    const linkEl = project.querySelector(".work-link");

    imgEl.classList.add(id);
    // console.log(e.target);
  }
});

// const sectionHeroEl = document.querySelector(".section-hero");
// const headerEl = document.querySelector(".header");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.intersectionRatio > 0) {
//       console.log(ent);
//       headerEl.classList.add("sticky");
//     } else {
//       console.log("now");
//       headerEl.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//   }
// );

// obs.observe(sectionHeroEl);

// const headerEl = document.querySelector(".header");

// const heroSectionEl = document.querySelector(".section-hero");

// const obs = new IntersectionObserver(handleIntersect);

// obs.observe(heroSectionEl);

// function handleIntersect(entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       headerEl.classList.add("sticky");
//     } else {
//       headerEl.classList.remove("sticky");
//     }
//   });
// }
