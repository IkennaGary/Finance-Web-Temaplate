"use strict";

function _(x) {
  const _s = (function qS() {
    return document.querySelector(x);
  })();
  return _s;
}
function _All(x) {
  const _sAll = (function qS() {
    return document.querySelector(x);
  })();
  return _sAll;
}

const slides = _(".nimate-cont__bx").children;
const point_left = _(".point_left");
const point_right = _(".point_right");
const indicatorz = _(".indicatorz");

point_left.addEventListener("click", function () {
  nextSlide();
});
point_right.addEventListener("click", prevSlide);

let index = 0;
slides[index].classList.add("active_nmn");
function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  } else {
    index--;
  }
  changeSlide();
  updateCi();
}

function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeSlide();
  updateCi();
}

function changeSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active_nmn");
  }
  slides[index].classList.add("active_nmn");
}

function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const ci = document.createElement("div");
    // ci.textContent = i * 1;
    ci.classList.add("mci");
    ci.id = i;
    if (i == 0) {
      ci.classList.add("active_ci");
    }
    ci.setAttribute("onClick", "indicateCi(this)");
    indicatorz.appendChild(ci);
  }
}
circleIndicator();

const indicateCi = (element) => {
  index = element.id;
  changeSlide();
  updateCi();
};

function updateCi() {
  for (let i = 0; i < indicatorz.children.length; i++) {
    indicatorz.children[i].classList.remove("active_ci");
  }
  indicatorz.children[index].classList.add("active_ci");
  console.log(indicatorz.children[index]);
}

function autoPlay() {
  nextSlide();
}
let timer = setInterval(autoPlay, 8000);

/////////  nav BAR

// const hamburger = _("button.ttb");
// hamburger.addEventListener("click", function () {
//   let showNav = false;
//   if (!showNav) {
//     hamburger.classList.add("button.ttb-open");
//     showNav == true;
//   } else {
//     hamburger.classList.remove("button.ttb-open");
//     showNav == false;
//   }
// });
