document.addEventListener("DOMContentLoaded", () => {
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

  const deptButtons = document.querySelectorAll(".dept-btn");
  const selectionInfo = document.querySelector(".selection-info");

  function numberToWords(num) {
    const words = ["ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN"];
    return words[num] || num;
  }

  function updateSelectionCount() {
    const selectedCount = document.querySelectorAll(".dept-btn.selected").length;
    if (selectedCount === 0) {
      selectionInfo.textContent = "NO DEPARTMENT SELECTED";
    } else if (selectedCount === 1) {
      selectionInfo.textContent = "ONE (1) SELECTED DEPARTMENT";
    } else {
      const word = numberToWords(selectedCount);
      selectionInfo.textContent = `${word} (${selectedCount}) SELECTED DEPARTMENTS`;
    }
  }

  deptButtons.forEach(btn => {
    btn.dataset.value = btn.textContent.trim();
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-pressed", "false");

    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");
      btn.setAttribute("aria-pressed", String(btn.classList.contains("selected")));
      updateSelectionCount();
    });
  });

  const proceedBtn = document.querySelector(".proceed-btn");
  if (proceedBtn) {
    proceedBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const selected = Array.from(document.querySelectorAll(".dept-btn.selected")).map(b => b.dataset.value);

      if (selected.length === 0) {
        alert("Please select at least one department before proceeding.");
        return;
      }

      localStorage.setItem("selectedDepartment", JSON.stringify(selected)); 
      window.location.href = "../ProfileRegistration/ProfileRegistration.html";
    });
  }

  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.location.href = "../TapToStart/TapToStart.html";
    });
  }

  updateSelectionCount();
});
