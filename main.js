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

      // active class remove
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projects.forEach(project => {
        if (filterValue === "all" || project.classList.contains(filterValue)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });

    });
  });

});
