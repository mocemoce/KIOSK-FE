// Update Philippine Time & Date
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

// Run immediately and update every second
updatePhilippineTime();
setInterval(updatePhilippineTime, 1000);

// Go Back Button (make sure your div has id="back-btn")
document.getElementById("back-btn").addEventListener("click", () => {
  window.location.href = "TapToStart.html";
});
