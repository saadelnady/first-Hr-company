let bar = document.getElementById("bar");
let close = document.getElementById("close");
let links = document.getElementById("links");

close.onclick = function () {
  links.classList.remove("active");
};
bar.onclick = function () {
  links.classList.add("active");
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
  "assets/images/jpg/home/bg_landing_1.jpg",
  "assets/images/jpg/home/bg_landing_2.jpg",
  "assets/images/jpg/home/bg_landing_3.jpg",
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

    removeBulletsActivation();
    showSlide();
  };
});

function removeBulletsActivation() {
  sliderBullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });
}

function removeSliderButtonsActivation() {
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

nextBtnslider.onclick = function () {
  if (currentSlide < sliderCount - 1) {
    currentSlide++;
    removeBulletsActivation();
    removeSliderButtonsActivation();
    showSlide();
  } else {
    return false;
  }
};
previousBtnslider.onclick = function () {
  if (currentSlide > 0) {
    currentSlide--;
    removeBulletsActivation();
    removeSliderButtonsActivation();
    showSlide();
  } else {
    return false;
  }
};

// ==========================================================================================
// ==========================================================================================
// portfolio slider
let nextBtnPortfolioSlider = document.getElementById("nextSlider");
let previousBtnPortfolioSlider = document.getElementById("prevSlider");

let porfolioCards = document.querySelectorAll(".portfolio .Cards .Card");
currentCard = 0;

nextBtnPortfolioSlider.onclick = movetoRight;
previousBtnPortfolioSlider.onclick = movetoLeft;
let translatePluse = `translatex(350px)`;
let translateMinus = `translatex(-350px)`;
lastCard = porfolioCards.length - 1;
firstCard = porfolioCards[0];

function movetoRight() {
  if (currentSlide < porfolioCards.length - 1) {
    currentSlide++;
    porfolioCards.forEach((card) => {
      card.style.transform += translatePluse;
    });
  }
  // porfolioCards[currentCard].style.transform = `translatex(350px)`;
}

function movetoLeft() {
  if (currentSlide === 0) {
    currentSlide--;

    porfolioCards.forEach((card) => {
      card.style.transform += translateMinus;
    });
  }
}
