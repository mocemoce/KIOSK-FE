const userIcon = document.getElementById("userIcon");
const dropdownMenu = document.getElementById("dropdownMenu");

userIcon.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

window.addEventListener("click", (event) => {
  if (!event.target.closest(".user-menu")) {
    dropdownMenu.classList.remove("active");
  }
});
