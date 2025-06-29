const exploreButton = document.querySelector("#explore");
const circleButtonDiv = document.querySelector(".white-circle");
const exploreLink = document.querySelector(".explore-link");
const page = document.querySelector("body");
const header = document.querySelector(".header-right");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerImg = document.querySelector(".hamburger-img");
const headerRight = document.querySelector(".menu-links");
const buttonWrapper = document.querySelector(".explore-btn");
const body = document.querySelector("body");
runEvents();

function runEvents() {
  exploreButtonRun();
  dataPage();
}
function exploreButtonRun() {
  exploreButton.addEventListener("mouseover", () => {
    circleButtonDiv.style.backgroundColor = "rgba(255, 255, 255, 0.35)";
    circleButtonDiv.style.display = "flex";
    circleButtonDiv.style.alignItems = "center";
    circleButtonDiv.style.width = "400px";
    circleButtonDiv.style.height = "400px";
    circleButtonDiv.style.justifyContent = "center";
    circleButtonDiv.style.borderRadius = "999px";
  });

  exploreButton.addEventListener("mouseout", () => {
    circleButtonDiv.style.backgroundColor = "";
    circleButtonDiv.style.display = "";
    circleButtonDiv.style.alignItems = "";
    circleButtonDiv.style.width = "";
    circleButtonDiv.style.height = "";
    circleButtonDiv.style.justifyContent = "";
    circleButtonDiv.style.borderRadius = "";
  });
  if (exploreLink) {
    exploreLink.addEventListener("click", (e) => {
      e.preventDefault();
      const href = exploreLink.getAttribute("href");
      console.log(href);
      page.classList.add(".ext-page");
      setTimeout(() => {
        window.location.href = href;
      }, 200);
    });
  }
}
let toggle = false;

hamburgerImg.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    headerRight.style.display = "flex";
    buttonWrapper.style.zIndex = "-1";
    hamburgerImg.src = "assets/shared/icon-close.svg";
  } else {
    headerRight.style.display = "none";
    buttonWrapper.style.zIndex = "0";
    hamburgerImg.src = "assets/shared/icon-hamburger.svg";
  }
});


document.addEventListener("click", (e) => {
  if (
    toggle &&
    !headerRight.contains(e.target) &&
    !hamburgerImg.contains(e.target)
  ) {
    headerRight.style.display = "none";
    hamburgerImg.src = "assets/shared/icon-hamburger.svg";
    buttonWrapper.style.zIndex = "0";
    toggle = false;
  }
});
