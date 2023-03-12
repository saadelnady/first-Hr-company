let bar = document.getElementById("bar");
let close = document.getElementById("close");
let links = document.getElementById("links");

close.onclick = function () {
  links.classList.add("hide");
};
bar.onclick = function () {
  links.classList.remove("hide");
};
// change page language

let mySelect = document.getElementById("lang");
let myhtml = document.getElementsByTagName("html")[0];

mySelect.onclick = () => {
  let lang = "ar";
  if (mySelect.value === lang) {
    myhtml.setAttribute("lang", "ar");
    myhtml.setAttribute("dir", "rtl");
  } else {
    myhtml.setAttribute("lang", "eng");
    myhtml.setAttribute("dir", "ltr");
  }
};

// making slider

// get our items
let sliderImages = document.querySelectorAll(".images img");
let nextbtn = document.getElementById("next");
let previousbtn = document.getElementById("previous");
let sliderBullets = document.getElementById("bullets");
let slidesCount = sliderImages.length;
let currentSlide = 1;

// make bullets count by numbers of images

for (let i = 1; i <= slidesCount; i++) {
  let sliderBullet = document.createElement("li");
  sliderBullet.setAttribute("class", "bullet");
  sliderBullet.setAttribute("data-index", i);
  sliderBullets.appendChild(sliderBullet);
}
let sliderBullet = document.querySelectorAll("#bullets li");

for (let i = 0; i < sliderBullet.length; i++) {
  sliderBullet[i].onclick = () => {
    currentSlide = +sliderBullet[i].getAttribute("data-index");
    checker();
  };
}
//  function remove All active class

function removeAllactive() {
  // حذف ative class من جميع الصور
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  // حذف ative class من جميع bullets
  sliderBullet.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
  if (currentSlide == 1) {
    previousbtn.classList.add("disabled");
  } else {
    previousbtn.classList.remove("disabled");
  }

  if (currentSlide == slidesCount) {
    nextbtn.classList.add("disabled");
  } else {
    nextbtn.classList.remove("disabled");
  }
}
function checker() {
  removeAllactive();
  sliderImages[currentSlide - 1].classList.add("active");
  sliderBullet[currentSlide - 1].classList.add("active");
}
checker();

nextbtn.onclick = () => {
  if (nextbtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
};
previousbtn.onclick = () => {
  if (previousbtn.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
};
  