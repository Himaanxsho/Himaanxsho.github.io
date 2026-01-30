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