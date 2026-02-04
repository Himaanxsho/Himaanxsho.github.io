// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDvDqkoTDiepCet8cslpniHVMf4LPde-Wo",
  authDomain: "himaanxsho-login.firebaseapp.com",
  projectId: "himaanxsho-login",
  storageBucket: "himaanxsho-login.appspot.com",
  messagingSenderId: "383555026128",
  appId: "1:383555026128:web:b200eb2f661c3fcb6872d5"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Elements
const googleBtn = document.getElementById("googleLogin");
const fbBtn = document.getElementById("facebookLogin");
const logoutBtn = document.getElementById("logoutBtn");
const sidebarLoginBtn = document.getElementById("sidebarLoginBtn");
const sidebarLogoutBtn = document.getElementById("sidebarLogoutBtn");

// ✅ Google Sign In
if (googleBtn) {
  googleBtn.addEventListener("click", async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/home/";
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  });
}

// ❌ Facebook disabled (future use)
if (fbBtn) {
  fbBtn.style.display = "none";
}

// ✅ Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "/home/login/";
  });
}

if (sidebarLogoutBtn) {
  sidebarLogoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "/home/login/";
  });
}

// 🔐 Protect pages + UI control
onAuthStateChanged(auth, (user) => {
  const isLoginPage = window.location.pathname.includes("/login");

  if (!user && !isLoginPage) {
    window.location.href = "/home/login/";
    return;
  }

  // UI handling
  if (user) {
    if (googleBtn) googleBtn.style.display = "none";
    if (fbBtn) fbBtn.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "block";

    if (sidebarLoginBtn) sidebarLoginBtn.style.display = "none";
    if (sidebarLogoutBtn) sidebarLogoutBtn.style.display = "block";
  } else {
    if (googleBtn) googleBtn.style.display = "block";
    if (logoutBtn) logoutBtn.style.display = "none";

    if (sidebarLoginBtn) sidebarLoginBtn.style.display = "block";
    if (sidebarLogoutBtn) sidebarLogoutBtn.style.display = "none";
  }
});
