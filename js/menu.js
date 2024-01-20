const menuBtn = document.querySelector(".hamburger-menuWrapper");
const mobileMenu = document.querySelector(".nav-mobile-block");
const body = document.querySelector("body");

// export function menu() {
//     menuBtn.addEventListener("click", function () {
//      mobileMenu.classList.toggle("mobile-menu-active");
//      body.classList.toggle("mobile-menu-body");
//     });
// }


export function menu() {
 // Check if elements are found before attaching event listener
 if (menuBtn && mobileMenu && body) {
  menuBtn.addEventListener("click", function () {
   mobileMenu.classList.toggle("mobile-menu-active");
   body.classList.toggle("mobile-menu-body");
  });
 } else {
  console.error("One or more elements not found. Event listener not attached.");
 }
}