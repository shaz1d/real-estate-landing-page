const navMenuBtn = document.getElementById("_nav-menu-btn");
const navList = document.getElementById("nav-list");
const navItems = document.querySelectorAll("._nav-item");
const rentBtns = document.querySelectorAll("._rent-btn");

// Navmenu toggle
navMenuBtn.addEventListener("click", () => {
  navList.classList.toggle("_active");
});
// Navmenu closes when clicked outside navmenu
window.addEventListener("click", (e) => {
  if (e.target.id !== "_nav-menu-btn" && e.target.className !== "_nav-list") {
    navList.classList.remove("_active");
  }
});

// Active link action function
function linkAction(linkItems, activeLink) {
  linkItems.forEach((el) => el.classList.remove("_active"));
  activeLink.classList.add("_active");
}

// Link action on Navbar
navItems.forEach((el) => {
  el.addEventListener("click", () => {
    linkAction(navItems, el);
  });
});

// Link action on Rent buttton
rentBtns.forEach((el) =>
  el.addEventListener("click", () => linkAction(rentBtns, el))
);
