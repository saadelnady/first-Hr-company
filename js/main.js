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
let nextBtn = document.querySelector(".hero .arrows #next");
let previousBtn = document.querySelector(".hero .arrows #previous");

let heroDiv = document.querySelector(".hero");

nextBtn.onclick = nextSlide;
previousBtn.onclick = previousSlide;
heroDiv.style.background = `url(${sliderImages[0]})`;

function nextSlide() {
  if (i < sliderImages) {
    i++;
  } else {
    return false;
  }
}

function previousSlide() {
  if (i !== 0) {
    i--;
  } else {
    return false;
  }
}
