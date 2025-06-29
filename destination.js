const planetsImg = document.querySelector(".planet-img");
const planetsTextHeader = document.querySelector(".text-header");
const planetsTextContent = document.querySelector(".text-context");
const avg = document.querySelector(".avg");
const travelTime = document.querySelector(".travel-time");
const PlanetsLinks = document.querySelectorAll(".planets-links a ");
const planetsName = document.querySelector(".planet-name");
const avgText = document.querySelector(".avg-text");
const travels = document.querySelector(".infos.travels");
const planetsInfo = document.querySelector(".planets-info");
const menuLinkss = document.querySelectorAll(".menu-links a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerImg = document.querySelector(".hamburger-img");
const headerRight = document.querySelector(".header-right");
const menuLink = document.querySelector(".menuLinks");
dataPage().then((res) => {
  PlanetsLinks.forEach((link, i) => {
    const links = link.textContent.trim().toLowerCase();
    const planetName = res.destinations[i].name.trim().toLowerCase();
    const planet = res.destinations[i];
    link.addEventListener("click", () => {
      if (planetName === links) {
        planetsImg.classList.add("fade-out");
        planetsInfo.classList.add("fade-out");
        PlanetsLinks.forEach((b) => {
          b.classList.remove("planets-active");
        });
        link.classList.add("planets-active");
        setTimeout(() => {
          planetsName.textContent = planetName.toUpperCase();
          planetsTextContent.textContent = res.destinations[i].description;
          planetsImg.src = planet.images.png;
          avgText.textContent = planet.distance;

          travels.textContent = planet.travel;
          planetsImg.onload = () => {
            planetsImg.classList.remove("fade-out");
          };
          planetsInfo.classList.remove("fade-out");
        }, 300);
      }
    });
  });
});
HamburgerMenu();

function HamburgerMenu() {
  let toggle = false;
  hamburgerMenu.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      hamburgerImg.src = "assets/shared/icon-close.svg";
      headerRight.style.display = "block";
    } else {
      hamburgerImg.src = "assets/shared/icon-hamburger.svg";
      headerRight.style.display = "none";
    }
    closeHamburgerMenu();
    function closeHamburgerMenu() {
      document.addEventListener("click", (e) => {
        if (
          !headerRight.contains(e.target) &&
          !hamburgerMenu.contains(e.target)
        ) {
          headerRight.style.display = "none";
          hamburgerImg.src = "assets/shared/icon-hamburger.svg";
          toggle = false;
        }
      });
    }
  });
}
