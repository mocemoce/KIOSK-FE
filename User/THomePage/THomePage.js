function updatePhilippineTime() {
  const now = new Date();

  const date = new Intl.DateTimeFormat("en-US", { 
    timeZone: "Asia/Manila", 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit" 
  }).format(now);

  const time = new Intl.DateTimeFormat("en-US", { 
    timeZone: "Asia/Manila", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: true 
  }).format(now);

  document.getElementById("ph-date").textContent = date;
  document.getElementById("ph-time").textContent = time;
}

document.querySelector(".proceed-btn").addEventListener("click", () => {

  const selected = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                       .map(checkbox => checkbox.value);

  localStorage.setItem("selectedDepartments", JSON.stringify(selected));

  window.location.href = "../ProfileRegistration/ProfileRegistration.html";
});


updatePhilippineTime();
setInterval(updatePhilippineTime, 1000);

document.querySelector(".proceed-btn").addEventListener("click", () => {
  window.location.href = "../ProfileRegistration/ProfileRegistration.html"; 
});


document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "../TapToStart/TapToStart.html";
});

