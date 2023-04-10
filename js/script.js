const workEl = document.querySelector(".section-work");
const heroEl = document.querySelector(".section-hero");
const mobileNavBtn = document.querySelector(".btn-mobile-nav");
const mobileHeaderEl = document.querySelector(".header");
const headerEl = document.querySelector(".header");
const navEl = document.querySelector(".nav");
const allLinks = document.querySelectorAll(".main-nav-link");
const homeLink = navEl.querySelector(`a[href="#home"]`);
const workLink = navEl.querySelector(`a[href="#work"]`);

allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    mobileHeaderEl.classList.remove("mobile");

    const href = link.getAttribute("href");
    console.log(href);
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);

      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // console.log(navEl.querySelector(`a[href="#home"]`));
  navEl.querySelector(`a[href="#home"]`).classList.add("active");
});

// let prevScrollPos = window.scrollY;
// navLinkEl.addEventListener("click", function () {
//   mobileHeaderEl.classList.remove("mobile");
// });

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
    homeLink.classList.remove("active");
    workLink.classList.add("active");
  } else {
    headerEl.classList.remove("scroll");
    homeLink.classList.add("active");
    workLink.classList.remove("active");
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

const projectEls = document.querySelectorAll(".project");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", (e) => {
  e.preventDefault();
  projectEls.forEach((projectEl) => {
    if (isElementInViewport(projectEl)) {
      const id = projectEl.getAttribute("id");
      const imgEl = projectEl.querySelector(".project-img");
      imgEl.classList.add(id);
    }
  });
});
