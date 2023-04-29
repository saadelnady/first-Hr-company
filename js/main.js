let bar = document.getElementById("bar");
let close = document.getElementById("close");
let links = document.getElementById("links");

close.onclick = function () {
  links.classList.add("hide");
};
bar.onclick = function () {
  links.classList.remove("hide");
};

// ==========================================================================================
// ==========================================================================================
// change page language
let selectedLanguage = document.getElementById("selected_language");
let selectedLanguageImage = document.querySelector(".selected_language img");
let selectedLanguageButton = document.querySelector(
  ".selected_language button"
);

let languageUl = document.querySelector(".select_language");

let languages = document.querySelectorAll(".select_language li");
let myHtml = document.getElementsByTagName("html")[0];

selectedLanguage.onclick = function () {
  languageUl.classList.toggle("active");
};

languages.forEach((language) => {
  language.onclick = function () {
    let selectImage = this.children[0].src;
    selectedLanguageImage.src = selectImage;

    let selectLang = this.children[1];
    selectedLanguageButton.innerHTML = selectLang.innerHTML;
    if (selectLang.getAttribute("data-src") === "ar") {
      myHtml.setAttribute("lang", "ar");
      myHtml.setAttribute("dir", "rtl");
    } else {
      myHtml.setAttribute("lang", "en");
      myHtml.setAttribute("dir", "ltr");
    }
  };
});

// ==========================================================================================
// ==========================================================================================
// making slider

let sliderImages = [
  "../assets/images/jpg/home/bg_landing_1.jpg",
  "../assets/images/jpg/home/bg_landing_2.jpg",
  "../assets/images/jpg/home/bg_landing_3.jpg",
];
let sliderCount = sliderImages.length;
let currentSlide = 0;
let nextBtnslider = document.querySelector(".hero .arrows #next");
let previousBtnslider = document.querySelector(".hero .arrows #previous");
let bulletsDiv = document.getElementById("bullets");
let heroDiv = document.querySelector(".hero");

sliderImages.forEach((img, index) => {
  if (index < sliderCount) {
    let bullet = document.createElement("li");
    bulletsDiv.appendChild(bullet);
    bullet.setAttribute("data-index", index);
  }
});

let sliderBullets = document.querySelectorAll("#bullets li");

function showSlide() {
  heroDiv.style.background = `url(${sliderImages[currentSlide]})`;

  sliderBullets[currentSlide].classList.add("active");
}
showSlide();
sliderBullets.forEach((bullet) => {
  bullet.onclick = function () {
    currentSlide = this.getAttribute("data-index");
    removeActive();
    showSlide();
  };
});

function removeActive() {
  sliderBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
  if (currentSlide === 0) {
    previousBtnslider.classList.add("disabled");
  } else {
    previousBtnslider.classList.remove("disabled");
  }
  if (currentSlide === sliderCount - 1) {
    nextBtnslider.classList.add("disabled");
  } else {
    nextBtnslider.classList.remove("disabled");
  }
}
removeActive();
nextBtnslider.onclick = function () {
  if (currentSlide < sliderCount - 1) {
    currentSlide++;
    removeActive();
    showSlide();
  } else {
    return false;
  }
};
previousBtnslider.onclick = function () {
  if (currentSlide > 0) {
    currentSlide--;
    removeActive();
    showSlide();
  } else {
    return false;
  }
};
