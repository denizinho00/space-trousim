const button = document.querySelectorAll(".buttons button");
let imgDiv = document.querySelector(".img-tecnology");
const description = document.querySelector(".description");
const names = document.querySelector(".vehicle");
const context = document.querySelector(".text-content");
let mobileMediaQuery = window.matchMedia("(max-width: 768px)");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const headerRight = document.querySelector(".header-right");
const tabletMediaQuery = window.matchMedia(
  "(min-width: 769px) and (max-width: 988px)"
);
// dataPage();

dataPage().then((data) => {
  const technology = data.technology;

  let initialImgSrc;
  if (tabletMediaQuery.matches) {
    initialImgSrc = technology[0].images.landscape;
  } else if (mobileMediaQuery.matches) {
    initialImgSrc = technology[0].images.landscape;
  } else {
    initialImgSrc = technology[0].images.portrait;
  }
  imgDiv.src = initialImgSrc;
  description.textContent = technology[0].description;
  names.textContent = technology[0].name;
  button[0].classList.add("active-btn");

  button.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      context.classList.add("fade-out");
      imgDiv.classList.add("fade-out");
      setTimeout(() => {
        let imagesSrc;
        if (tabletMediaQuery.matches) {
          imagesSrc = technology[i].images.landscape;
        } else if (mobileMediaQuery.matches) {
          imagesSrc = technology[i].images.landscape;
        } else {
          imagesSrc = technology[i].images.portrait;
        }

        const name = technology[i].name;
        const text = technology[i].description;
        console.log(text);
        console.log(data);

        description.textContent = text;
        names.textContent = name;
        imgDiv.src = imagesSrc;
        button.forEach((b) => {
          b.classList.remove("active-btn");
        });

        btn.classList.add("active-btn");
        context.classList.remove("fade-out");
        imgDiv.classList.remove("fade-out");
        context.classList.add("fade-in");
        imgDiv.classList.add("fade-in");
        setTimeout(() => {
          context.classList.remove("fade-in");
          imgDiv.classList.remove("fade-in");
        }, 600);
      }, 300);
    });
  });
});
hamburgrMenu();
function hamburgrMenu() {
  if (mobileMediaQuery.matches) {
    headerRight.style.display = "none";
  }

  let toggle = false;
  hamburgerMenu.style.paddingRight = "10px";
  hamburgerMenu.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      hamburgerMenu.style.cursor = "pointer";
      hamburgerMenu.children[0].src = "assets/shared/icon-close.svg";
      headerRight.style.display = "block";
    } else {
      headerRight.style.display = "none";
      hamburgerMenu.children[0].src = "assets/shared/icon-hamburger.svg";
    }
  });

  mobileMediaQuery.addEventListener("change", (e) => {
    if (!e.matches) {
      // Ekran genişlediğinde (mobil değilse) menüyü otomatik kapat
      headerRight.style.display = "flex";
      hamburgerMenu.children[0].src = "assets/shared/icon-hamburger.svg";
    } else {
      headerRight.style.display = "none";
    }
  });

  document.addEventListener("click", (e) => {
    if (
      toggle &&
      !headerRight.contains(e.target) &&
      !hamburgerMenu.contains(e.target)
    ) {
      headerRight.style.display = "none";
      hamburgerMenu.children[0].src = "assets/shared/icon-hamburger.svg";
      toggle = false;
    }
  });
}
