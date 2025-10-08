function updatePhilippineTime() {
  const optionsDate = { timeZone: "Asia/Manila", year: "numeric", month: "2-digit", day: "2-digit" };
  const optionsTime = { timeZone: "Asia/Manila", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true };
  const now = new Date();

  document.getElementById("ph-date").textContent = new Intl.DateTimeFormat("en-US", optionsDate).format(now);
  document.getElementById("ph-time").textContent = new Intl.DateTimeFormat("en-US", optionsTime).format(now);
}

updatePhilippineTime();
setInterval(updatePhilippineTime, 1000);

document.querySelector(".main-content").addEventListener("click", () => {
  window.location.href = "../THomePage/THomePage.html";
});
