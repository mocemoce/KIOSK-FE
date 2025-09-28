function updatePhilippineTime() {
  const optionsDate = { 
    timeZone: "Asia/Manila", 
    year: "numeric", 
    month: "2-digit", 
    day: "2-digit" 
  };

  const optionsTime = { 
    timeZone: "Asia/Manila", 
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit", 
    hour12: true 
  };

  const now = new Date();

  // Format date and time
  const date = new Intl.DateTimeFormat("en-US", optionsDate).format(now);
  const time = new Intl.DateTimeFormat("en-US", optionsTime).format(now);

  // Update DOM
  document.getElementById("ph-date").textContent = date;
  document.getElementById("ph-time").textContent = time;
}

updatePhilippineTime();
setInterval(updatePhilippineTime, 1000);


document.querySelector(".container").addEventListener("click", () => {
  window.location.href = "THomePage.html";

});
