function saveEntry() {
    const entryText = document.getElementById("entry").value;
    if (!entryText) return;
  
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries.unshift(entryText);
    localStorage.setItem("journalEntries", JSON.stringify(entries));
    document.getElementById("entry").value = "";
    renderEntries();
  }
  
  function renderEntries() {
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    const list = document.getElementById("entriesList");
    list.innerHTML = "";
    entries.forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      list.appendChild(li);
    });
  }
  
  renderEntries();
  
  function clearEntries() {
    localStorage.removeItem("journalEntries");
    renderEntries();
  }

  // Handle dark mode toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', toggle.checked);
});

// Save theme preference (optional)
if (localStorage.getItem("darkMode") === "true") {
  toggle.checked = true;
  document.body.classList.add("dark");
}

toggle.addEventListener("change", () => {
  localStorage.setItem("darkMode", toggle.checked);
});

