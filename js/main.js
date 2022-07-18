const navMenuBtn = document.getElementById("_nav-menu-btn");
const navList = document.getElementById("nav-list");
const navItems = document.querySelectorAll("._nav-item");

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

// Active link action
function linkAction() {
  navItems.forEach((el) => el.classList.remove("_active"));
  this.classList.add("_active");
}
navItems.forEach((el) => el.addEventListener("click", linkAction));
