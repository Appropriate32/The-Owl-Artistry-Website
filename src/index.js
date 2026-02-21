import "./styles.css";
import logoImg from "./images/logo.png";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
const logoElement = document.querySelector("#nav-logo");
const faviconLink = document.querySelector("#favicon");
const homeOwl = document.querySelector(".hero-owl");
const filterButtonsContainer = document.querySelector(
  ".products-btn-container",
);
const productCards = document.querySelectorAll(".product-card");

if (logoElement) {
  logoElement.src = logoImg;
}

if (faviconLink) {
  faviconLink.href = logoImg;
}

if (homeOwl) {
  homeOwl.src = logoImg;
}

if (hamburger && menu) {
  const icon = hamburger.querySelector("i");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  menu.addEventListener("click", (e) => {
    if (e.target instanceof HTMLAnchorElement) {
      if (!e.target.classList.contains("active-nav")) {
        const activeNav = menu.querySelector(".active-nav");
        activeNav.classList.remove("active-nav");
        e.target.classList.add("active-nav");
      }
    }
  });
}

if (filterButtonsContainer) {
  filterButtonsContainer.addEventListener("click", (e) => {
    if (e.target instanceof HTMLButtonElement) {
      if (!e.target.classList.contains("active-btn")) {
        const activeBtn = filterButtonsContainer.querySelector(".active-btn");
        activeBtn.classList.remove("active-btn");
        e.target.classList.add("active-btn");
      }

      const filterValue = e.target.getAttribute("data-filter");

      productCards.forEach((card) => {
        if (
          filterValue === "all" ||
          filterValue === card.getAttribute("data-category")
        ) {
          card.classList.remove("hidden-card");
        } else {
          card.classList.add("hidden-card");
        }
      });
    }
  });
}
