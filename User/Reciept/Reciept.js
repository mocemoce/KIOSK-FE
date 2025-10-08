// 🕒 Philippine Date and Time
function updatePhilippineDateTime() {
  const now = new Date();

  // Options for Philippine date format
  const optionsDate = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Manila'
  };

  // Options for Philippine time format
  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila'
  };

  // Set the text content of the date and time elements
  document.getElementById("ph-date").textContent = new Intl.DateTimeFormat('en-PH', optionsDate).format(now);
  document.getElementById("ph-time").textContent = new Intl.DateTimeFormat('en-PH', optionsTime).format(now);
}

// Update immediately
updatePhilippineDateTime();

// Update every second
setInterval(updatePhilippineDateTime, 1000);
