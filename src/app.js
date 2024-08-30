(() => {

const 
openNav = document.querySelector (".open-menu"),
  closeNav = document.querySelector (".close-menu"),
  navMenu = document.querySelector (".nav-links-container");

  openNav.addEventListener("click", toggleMenu);
  closeNav.addEventListener("click", toggleMenu);

  function toggleMenu () {
    navMenu.classList.toggle("open");
    
  }

})();