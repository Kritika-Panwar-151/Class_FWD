/* ============================================
   INITIALIZE ICONS
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});


/* ============================================
   LOGIN PROTECTION (NO MORE REDIRECT LOOP)
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("unistayLoggedIn") === "true";
  const onLoginPage = window.location.pathname.includes("login.html");

  // If user is not logged in → send to login page
  if (!isLoggedIn && !onLoginPage) {
    window.location.href = "login.html";
  }
});


/* ============================================
   UPDATE PROFILE DROPDOWN WITH USER INFO
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.querySelector(".profile-menu-name");
  const emailEl = document.querySelector(".profile-menu-email");

  const savedName = localStorage.getItem("unistayUserName");
  const savedEmail = localStorage.getItem("unistayUserEmail");

  if (savedName && nameEl) nameEl.textContent = savedName;
  if (savedEmail && emailEl) emailEl.textContent = savedEmail;
});


/* ============================================
   PROFILE DROPDOWN LOGIC
============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const profileBtn = document.getElementById("profileBtn");
  const profileMenu = document.getElementById("profileMenu");

  if (!profileBtn || !profileMenu) return;

  // Toggle dropdown
  profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle("is-open");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      profileMenu.classList.contains("is-open") &&
      !profileMenu.contains(e.target) &&
      !profileBtn.contains(e.target)
    ) {
      profileMenu.classList.remove("is-open");
    }
  });

  // Close dropdown with Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") profileMenu.classList.remove("is-open");
  });
});


/* ============================================
   SEARCH SCROLL ACTIONS
============================================ */
function scrollToId(id) {
  const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const searchBtn = document.getElementById("searchHostelBtn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    scrollToId("chooseHostel");
  });
}

const headerSearchBtn = document.getElementById("headerSearchBtn");
if (headerSearchBtn) {
  headerSearchBtn.addEventListener("click", () => {
    scrollToId("chooseHostel");
  });
}

const topSearchBtn = document.querySelector(".search-box");
if (topSearchBtn) {
  topSearchBtn.addEventListener("click", () => {
    scrollToId("chooseHostel");
  });
}


/* ============================================
   LOGOUT FUNCTION
============================================ */
function logoutUser() {
  localStorage.removeItem("unistayLoggedIn");
  localStorage.removeItem("unistayUserName");
  localStorage.removeItem("unistayUserEmail");

  window.location.href = "login.html";
}
