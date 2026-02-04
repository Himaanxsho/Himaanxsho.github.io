// SAY HELLO BUTTON
function sayHello() {
  alert("Thanks for reaching out! I’ll get back to you soon 🚀");
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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

        project.style.display =
          filterValue === "all" || category === filterValue
            ? "block"
            : "none";
      });

    });
  });

});


// ===== SIDEBAR SYSTEM (ONLY ONE CLEAN VERSION) =====
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

if (hamburger && sidebar) {

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sidebar.classList.toggle("active");

    if (overlay) overlay.classList.toggle("active");

    document.body.classList.toggle("no-scroll");
  });

}

if (overlay) {
  overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
}
