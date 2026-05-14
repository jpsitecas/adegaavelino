const menuOverlay = document.getElementById("menuOverlay");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".overlay-nav a");

function openMenu() {
  if (!menuOverlay) return;

  menuOverlay.classList.add("is-open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  if (!menuOverlay) return;

  menuOverlay.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle) {
  menuToggle.addEventListener("click", openMenu);
}

if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

if (menuOverlay) {
  menuOverlay.addEventListener("click", (event) => {
    if (event.target === menuOverlay) {
      closeMenu();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
