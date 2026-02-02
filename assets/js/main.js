// SAY HELLO BUTTON
function sayHello() {
  alert("Thanks for reaching out! I’ll get back to you soon 🚀");
}

// SMOOTH SCROLL (future proof)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// LOAD CHECK

console.log("Himaanxsho portfolio loaded successfully 🔥");

// PROJECT FILTER
document.addEventListener("DOMContentLoaded", function () {

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {

      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projects.forEach(project => {
        const category = project.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });

    });
  });

});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", () => {
  hamburger.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

function isLoggedIn() {
  return localStorage.getItem("loggedIn") === "true";
}

function protectedRoute(path) {
  if (!isLoggedIn()) {
    window.location.href = "/home/login";
  } else {
    window.location.href = path;
  }
}

function goHome() {
  window.location.href = "/home/";
}

