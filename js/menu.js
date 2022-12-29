(() => {
  const refs = {
    openMenuBtn: document.querySelector(".menu-button"),
    closeMenuBtn: document.querySelector(".menu-cross"),
    menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
