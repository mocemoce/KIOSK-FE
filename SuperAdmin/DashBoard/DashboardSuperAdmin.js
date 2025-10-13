
  const dateElem = document.getElementById("ph-date");
  const timeElem = document.getElementById("ph-time");

  function updatePhilippineTime() {
    const now = new Date();
    const date = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
    const time = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Manila", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }).format(now);

    dateElem.textContent = date;
    timeElem.textContent = time;
  }

  updatePhilippineTime();
  setInterval(updatePhilippineTime, 1000);