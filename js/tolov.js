const prices = [
  { name: "Chiqindi olib ketish", price: 15000 },
  { name: "Shikoyat ko‘rib chiqish", price: 0 },
  { name: "Qo‘shimcha xizmatlar", price: 20000 },
];

const paymentsHistory = [
  {
    date: "2025-05-01",
    service: "Chiqindi olib ketish",
    amount: 15000,
    status: "To‘langan",
  },
  {
    date: "2025-04-15",
    service: "Qo‘shimcha xizmatlar",
    amount: 20000,
    status: "To‘langan",
  },
  {
    date: "2025-03-20",
    service: "Chiqindi olib ketish",
    amount: 15000,
    status: "To‘lanmagan",
  },
];

function renderPrices() {
  const tbody = document.querySelector("#price-table tbody");
  tbody.innerHTML = "";
  prices.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border border-gray-300 px-4 py-2">${item.name}</td>
      <td class="border border-gray-300 px-4 py-2">${item.price.toLocaleString()}</td>
    `;
    tbody.appendChild(row);
  });
}

function renderPaymentsHistory() {
  const tbody = document.querySelector("#payment-history-table tbody");
  tbody.innerHTML = "";
  paymentsHistory.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="border border-gray-300 px-4 py-2">${item.date}</td>
      <td class="border border-gray-300 px-4 py-2">${item.service}</td>
      <td class="border border-gray-300 px-4 py-2">${item.amount.toLocaleString()}</td>
      <td class="border border-gray-300 px-4 py-2">${item.status}</td>
    `;
    tbody.appendChild(row);
  });
}

// Sahifa yuklanganda chaqirish
document.addEventListener("DOMContentLoaded", () => {
  renderPrices();
  renderPaymentsHistory();
});
