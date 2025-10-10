function updatePhilippineDateTime() {
  const now = new Date();

  const optionsDate = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'Asia/Manila'
  };

  const optionsTime = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Asia/Manila'
  };

  document.getElementById("ph-date").textContent = new Intl.DateTimeFormat('en-PH', optionsDate).format(now);
  document.getElementById("ph-time").textContent = new Intl.DateTimeFormat('en-PH', optionsTime).format(now);
}

const backBtn = document.querySelector(".back-btn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "../ProfileRegistration/ProfileRegistration.html";
  });
}

updatePhilippineDateTime();
setInterval(updatePhilippineDateTime, 1000);
