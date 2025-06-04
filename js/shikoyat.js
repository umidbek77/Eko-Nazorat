document
  .getElementById("shikoyatForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (!name || !phone || !message) {
      alert("Iltimos, barcha maydonlarni to‘ldiring.");
      return;
    }

    // Serverga yuboriladigan ma'lumotlar
    const data = { name, phone, message };

    // Hozircha console.log qilamiz, keyinchalik backendga POST so‘rov bo‘ladi
    console.log("Yuborilgan ma'lumotlar:", data);

    // KEYINGI: fetch('/api/shikoyat', { method: "POST", body: JSON.stringify(data) ... })

    // Formani tozalash va xabar ko‘rsatish
    document.getElementById("shikoyatForm").reset();
    formMessage.classList.remove("hidden");

    setTimeout(() => formMessage.classList.add("hidden"), 4000);
  });
