// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config (apna paste kar)
const firebaseConfig = {
  apiKey: "AIzaSyDvDqkoTDiepCet8cslpniHVMf4LPde-Wo",
  authDomain: "himaanxsho-login.firebaseapp.com",
  projectId: "himaanxsho-login",
  storageBucket: "himaanxsho-login.firebasestorage.app",
  messagingSenderId: "383555026128",
  appId: "1:383555026128:web:b200eb2f661c3fcb6872d5",
  measurementId: "G-HB9XEM1R8J"
};
// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Buttons
const googleBtn = document.getElementById("googleLogin");
const fbBtn = document.getElementById("facebookLogin");
const logoutBtn = document.getElementById("logoutBtn");

// Sidebar login button
const sidebarLoginBtn = document.getElementById("sidebarLoginBtn"); // assume sidebar m login ka button id ye hai

// Check login state on page load
function checkLoginState() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  // Login page par buttons show/hide
  if (googleBtn && fbBtn) {
    if (isLoggedIn) {
      googleBtn.style.display = "none";
      fbBtn.style.display = "none";
      if (logoutBtn) logoutBtn.style.display = "block";
    } else {
      googleBtn.style.display = "inline-block";
      fbBtn.style.display = "inline-block";
      if (logoutBtn) logoutBtn.style.display = "none";
    }
  }

  // Sidebar button handling
  if (sidebarLoginBtn) {
    sidebarLoginBtn.style.display = isLoggedIn ? "none" : "block";
  }

  // Logout button in sidebar (if exists)
  const sidebarLogoutBtn = document.getElementById("sidebarLogoutBtn");
  if (sidebarLogoutBtn) {
    sidebarLogoutBtn.style.display = isLoggedIn ? "block" : "none";
  }
}

// Redirect to login if not logged in (except on login page)
function protectPage() {
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  if (!isLoggedIn && !window.location.pathname.includes("/login/")) {
    window.location.href = "/home/login/";
  }
}

// Event listeners
if (googleBtn) {
  googleBtn.onclick = () => {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "/home/";
  };
}

if (fbBtn) {
  fbBtn.onclick = () => {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "/home/";
  };
}

if (logoutBtn) {
  logoutBtn.onclick = () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "/home/login/";
  };
}

// Run on page load
checkLoginState();
protectPage();


