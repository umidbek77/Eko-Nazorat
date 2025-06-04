// // jadval kodi
// document.addEventListener("DOMContentLoaded", () => {
//   showSection("jadval");

//   fetch("/data/jadval.json") // Fayl yo'li
//     .then((response) => response.json())
//     .then((data) => {
//       const tbody = document.querySelector("#jadval-table tbody");
//       data.forEach((item) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//           <td>${item.mahalla}</td>
//           <td>${item.kocha}</td>
//           <td>${item.kun}</td>
//           <td>${item.vaqt}</td>
//         `;
//         tbody.appendChild(row);
//       });
//     })
//     .catch((error) => {
//       console.error("Jadvalni yuklashda xatolik:", error);
//     });
// });
