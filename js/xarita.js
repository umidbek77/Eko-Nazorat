// Xarita yaratamiz va boshlang'ich markerni qo'yamiz (masalan, Toshkent markazi)
const map = L.map("map").setView([41.2995, 69.2401], 12);

// OpenStreetMap qatlami
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Chiqindi mashinalari uchun markerlar ma'lumotlari (simulyatsiya)
const trucks = [
  { id: 1, lat: 41.305, lon: 69.28, name: "Mashina 1" },
  { id: 2, lat: 41.29, lon: 69.25, name: "Mashina 2" },
  { id: 3, lat: 41.31, lon: 69.22, name: "Mashina 3" },
];

// Markerlarni xaritaga qo'shamiz
const markers = trucks.map((truck) => {
  return L.marker([truck.lat, truck.lon]).addTo(map).bindPopup(truck.name);
});

// Real vaqt uchun joylashuvni yangilash (har 5 soniyada)
// Bu yerda simulyatsiya uchun markerlarni biroz harakatlantiramiz
setInterval(() => {
  markers.forEach((marker, idx) => {
    const truck = trucks[idx];
    // Random kichik o'zgarishlar
    truck.lat += (Math.random() - 0.5) * 0.001;
    truck.lon += (Math.random() - 0.5) * 0.001;
    marker.setLatLng([truck.lat, truck.lon]);
  });
}, 5000);
