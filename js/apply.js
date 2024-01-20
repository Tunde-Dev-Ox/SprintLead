const routeApply = document.querySelectorAll(".apply-route");
const registerBtn = document.querySelector("#register");

export function apply() {
    routeApply.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "/apply.html";
    });
    });
}