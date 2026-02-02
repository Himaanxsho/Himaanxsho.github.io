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
const loginBtn = document.getElementById("googleLogin");
const logoutBtn = document.getElementById("logout");

// Login
loginBtn.addEventListener("click", () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "/home/";
    })
    .catch(err => alert(err.message));
});

// Logout
logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    location.reload();
  });
});

// Auth state
onAuthStateChanged(auth, (user) => {
  if (user) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "block";
  } else {
    loginBtn.style.display = "block";
    logoutBtn.style.display = "none";
  }
});
