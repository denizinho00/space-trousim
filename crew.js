const sliderBtn = document.querySelectorAll(".slider-btn button");
const imgCrew = document.querySelector(".img-crew");
const job = document.querySelector(".job");
const names = document.querySelector(".name");
const context = document.querySelector(".info-context");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerImg = document.querySelector(".hamburger-img");
const headerRight = document.querySelector(".header-right");
const media = window.matchMedia("(max-width: 768px)");
dataPage();
mediaquery();
hamburgerMenus();
dataPage().then((data) => {
  sliderBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      context.classList.add("fade-out");
      imgCrew.classList.add("fade-out");
      setTimeout(() => {
        let crew = data.crew[i];
        imgCrew.src = crew.images.png;
        job.textContent = crew.role;
        names.lastChild.textContent = crew.name;
        sliderBtn.forEach((b) => b.classList.remove("act"));
        btn.classList.add("act");
        context.classList.remove("fade-out");
        imgCrew.classList.remove("fade-out");
        context.classList.add("fade-in");
        imgCrew.classList.add("fade-in");
        setTimeout(() => {
          context.classList.remove("fade-in");
          imgCrew.classList.remove("fade-in");
        }, 400);
      }, 400);
    });
  });
});

function hamburgerMenus() {
  let toggle = false;

  hamburgerMenu.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      headerRight.style.display = "flex";
      hamburgerImg.src = "assets/shared/icon-close.svg";
    } else {
      hamburgerImg.src = "assets/shared/icon-hamburger.svg";
      headerRight.style.display = "none";
    }
  });
  closeHamburgerMenu();
  function closeHamburgerMenu() {
    document.addEventListener("click", (e) => {
      if (media.matches) {
        if (!headerRight.contains(e.target) && !hamburgerImg.contains(e.target)) {
          headerRight.style.display = "none";
          hamburgerImg.src = "assets/shared/icon-hamburger.svg";
          toggle = false;
        }
      }
    });
  }
}
if (media.matches) {
  headerRight.style.display = "none";
}

function mediaquery() {
  media.addEventListener("change", (e) => {
    toggle = true;
    if (e.matches) {
      headerRight.style.display = "none";
      hamburgerImg.src = "assets/shared/icon-hamburger.svg";
      toggle = false;
    } else {
      headerRight.style.display = "flex";
      hamburgerImg.src = "assets/shared/icon-hamburger.svg";
      toggle = false;
    }
  });
}
