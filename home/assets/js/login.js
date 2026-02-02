import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  // yahan apna copied config paste kar
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔐 Firebase config (apna paste karna)
const firebaseConfig = {
  apiKey: "XXXX",
  authDomain: "XXXX",
  projectId: "XXXX",
  appId: "XXXX"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Successful");
      window.location.href = "/home/";
    })
    .catch((error) => {
      alert(error.message);
    });
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "/home/";
    })
    .catch(error => {
      alert(error.message);
    });
});

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "/home/login.html";
  }
});
function loginUser() {
  localStorage.setItem("loggedIn", "true");
  window.location.href = "/home/";
}
function logoutUser() {
  localStorage.removeItem("loggedIn");
  window.location.href = "/home/login";
}


