document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Har bir nav tugmasi bosilganda bo'limga silliq o'tish uchun
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 70, // header balandligi
        behavior: "smooth",
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // 1 marta animatsiya
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));
});

// Counter animatsiyasi
const counters = document.querySelectorAll(".stat-number");
const speed = 100; // pastroq bo'lsa, tezroq sanaydi

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
};

// Statistika blokiga kelganda faollashtirish
let statsVisible = false;
window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  const sectionTop = statsSection.getBoundingClientRect().top;

  if (!statsVisible && sectionTop < window.innerHeight - 100) {
    animateCounters();
    statsVisible = true;
  }
});

// Burger menyuni ochish/yopish
const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
