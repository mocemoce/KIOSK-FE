function updatePhilippineDateTime() {
  const now = new Date();
  const optionsDate = { year:'numeric', month:'2-digit', day:'2-digit', timeZone:'Asia/Manila' };
  const optionsTime = { hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true, timeZone:'Asia/Manila' };

  document.getElementById("ph-date").textContent = new Intl.DateTimeFormat('en-PH', optionsDate).format(now);
  document.getElementById("ph-time").textContent = new Intl.DateTimeFormat('en-PH', optionsTime).format(now);
}
updatePhilippineDateTime();
setInterval(updatePhilippineDateTime, 1000);

const backBtn = document.querySelector(".back-btn");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    window.location.href = "../THomePage/THomePage.html";
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const selectedDepartments = JSON.parse(localStorage.getItem("selectedDepartment") || "[]");
  const displayElement = document.getElementById("department");

  if (displayElement) {
    displayElement.value = selectedDepartments.length > 0 
      ? selectedDepartments.join(", ") 
      : "No department selected";
  }

  const proceedBtn = document.querySelector(".proceed-btn");
  const popup = document.getElementById("confirmation-popup");
  const popupOkBtn = document.getElementById("popup-ok-btn");

  let popupShown = false; 

  proceedBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!popupShown) {
      popup.style.display = "flex";
      popupShown = true;
    } else {
      window.location.href = "../Reciept/Reciept.html"; 
    }
  });

  popupOkBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
