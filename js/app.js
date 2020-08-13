/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sectionsElements = document.querySelectorAll("main section");
const navList = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let navListHTML = "";
sectionsElements.forEach((section) => {
  const id = section.id;
  const content = section.dataset.nav;

  navListHTML += `<li><a href="#${id}" class="menu__link">${content}<a><li>`;
});

navList.innerHTML = navListHTML;
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// get the main nav links
const navLinks = document.querySelectorAll("#navbar__list .menu__link");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  navLinks.forEach((link) => {
    // get the section of the link
    const section = document.querySelector(link.hash);

    // check if the section is in the viewport
    if (
      section.offsetTop <= fromTop + 20 &&
      section.offsetTop + section.offsetHeight > fromTop + 20
    ) {
      section.classList.add("active");
      link.classList.add("active");
    } else {
      section.classList.remove("active");
      link.classList.remove("active");
    }
  });
});
