const workEl = document.querySelector(".section-work");
const heroEl = document.querySelector(".section-hero");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const mobileHeaderEl = document.querySelector(".header");
const headerEl = document.querySelector(".header");
const navLinkEl = document.querySelector(".main-nav-link");

// let prevScrollPos = window.scrollY;
navLinkEl.addEventListener("click", function () {
  mobileHeaderEl.classList.remove("mobile");
});

let headerElHeight =
  headerEl.offsetHeight + headerEl.getBoundingClientRect().top;
// console.log("headerElHeight: ", headerElHeight);

let heroElHeight = heroEl.offsetHeight + heroEl.getBoundingClientRect().top;
// console.log("heroElHeight: ", heroElHeight);

let threshold = heroElHeight - headerElHeight;
// console.log(threshold);

window.onscroll = function () {
  mobileHeaderEl.classList.remove("mobile");
  let heroElHeight = heroEl.offsetHeight + heroEl.getBoundingClientRect().top;
  // console.log("heroElHeight: ", heroElHeight);

  threshold = heroElHeight - headerElHeight;

  // console.log(threshold);
  if (threshold < 1) {
    headerEl.classList.add("scroll");
  } else {
    headerEl.classList.remove("scroll");
  }

  // prevScrollPos = currentScrollPos;
};

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

mobileNavBtn.addEventListener("click", function () {
  mobileHeaderEl.classList.toggle("mobile");
});
