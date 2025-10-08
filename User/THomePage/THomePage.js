document.addEventListener("DOMContentLoaded", () => {
  // Find date/time targets in your existing HTML.
  const dateElem = document.getElementById("ph-date") || document.querySelector(".datetime p:nth-child(1)");
  const timeElem = document.getElementById("ph-time") || document.querySelector(".datetime p:nth-child(2)");

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

    if (dateElem) dateElem.textContent = date;
    if (timeElem) timeElem.textContent = time;
  }

  // Initialize time and keep it updated every second
  updatePhilippineTime();
  setInterval(updatePhilippineTime, 1000);

  // Make department buttons toggleable (multi-select)
  const deptButtons = document.querySelectorAll(".dept-btn");
  const selectionInfo = document.querySelector(".selection-info");

  function updateSelectionCount() {
  const selectedCount = document.querySelectorAll(".dept-btn.selected").length;
  const selectionInfo = document.querySelector(".selection-info");

  // helper function to convert numbers to words
  function numberToWords(num) {
    const words = [
      "ZERO", "ONE", "TWO", "THREE", "FOUR",
      "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"
    ];
    return words[num] || num; // if more than 10, just return the number
  }

  if (selectionInfo) {
    if (selectedCount === 0) {
      selectionInfo.textContent = "NO DEPARTMENT SELECTED";
    } else if (selectedCount === 1) {
      selectionInfo.textContent = "ONE (1) SELECTED DEPARTMENT";
    } else {
      const word = numberToWords(selectedCount);
      selectionInfo.textContent = `${word} (${selectedCount}) SELECTED DEPARTMENTS`;
    }
  }
}


  deptButtons.forEach(btn => {
    // store display text as data-value for saving later
    btn.dataset.value = btn.textContent.trim();

    // aria attribute for accessibility
    btn.setAttribute("role", "button");
    btn.setAttribute("aria-pressed", "false");

    btn.addEventListener("click", () => {
      btn.classList.toggle("selected");
      btn.setAttribute("aria-pressed", String(btn.classList.contains("selected")));
      updateSelectionCount();
    });
  });

  // Proceed button behaviour
  const proceedBtn = document.querySelector(".proceed-btn");
  if (proceedBtn) {
    proceedBtn.addEventListener("click", (e) => {
      e.preventDefault();

      const selected = Array.from(document.querySelectorAll(".dept-btn.selected"))
                            .map(b => b.dataset.value);

      if (selected.length === 0) {
        alert("Please select at least one department before proceeding.");
        return;
      }

      localStorage.setItem("selectedDepartments", JSON.stringify(selected));
      window.location.href = "../ProfileRegistration/ProfileRegistration.html";
    });
  }

  // Back button (your HTML uses class "back-btn")
  const backBtn = document.querySelector(".back-btn");
  if (backBtn) {
    backBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "../TapToStart/TapToStart.html";
    });
  }

  // Initialize count display on load
  updateSelectionCount();
});
