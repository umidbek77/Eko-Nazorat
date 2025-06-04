function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function showRegister() {
  document.getElementById("register-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

// header spa kodi
function showSection(id) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = section.id === id ? "block" : "none";
  });

  // Jadval bo‘lsa, ma’lumotni yuklaymiz
  if (id === "jadval") {
    loadJadval();
  }
}

function loadJadval() {
  const tbody = document.querySelector("#jadval-table tbody");
  if (!tbody) return;

  // Jadvalni bo'shatamiz
  tbody.innerHTML = "";

  fetch("/data/jadval.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.mahalla}</td>
          <td>${item.kocha}</td>
          <td>${item.kun}</td>
          <td>${item.vaqt}</td>
        `;
        tbody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Jadvalni yuklashda xatolik:", error);
    });
}
