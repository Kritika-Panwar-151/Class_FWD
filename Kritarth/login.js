const authBox = document.getElementById("authBox");
const goSignup = document.getElementById("goSignup");
const goLogin = document.getElementById("goLogin");

// Toggle with click
goSignup.addEventListener("click", () => {
  authBox.classList.add("signup-mode");
});

goLogin.addEventListener("click", () => {
  authBox.classList.remove("signup-mode");
});

// Scroll to toggle
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    authBox.classList.add("signup-mode");
  } else if (event.deltaY < 0) {
    authBox.classList.remove("signup-mode");
  }
});


// ==============================
// LOGIN HANDLER
// ==============================
const loginForm = document.querySelector(".login-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginEmail = loginForm.querySelector("input[type='email']").value;

    // TEMP username: take name before "@"
    const loginName = loginEmail.split("@")[0];

    // store login data
    localStorage.setItem("unistayLoggedIn", "true");
    localStorage.setItem("unistayUserEmail", loginEmail);
    localStorage.setItem("unistayUserName", loginName);

    // redirect to homepage
    window.location.href = "index.html";
  });
}


// ==============================
// SIGNUP HANDLER
// ==============================
const signupForm = document.querySelector(".signup-form");

if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = signupForm.querySelector("input[type='text']").value;
    const email = signupForm.querySelector("input[type='email']").value;

    // store signup data
    localStorage.setItem("unistayLoggedIn", "true");
    localStorage.setItem("unistayUserName", name);
    localStorage.setItem("unistayUserEmail", email);

    // redirect to homepage
    window.location.href = "index.html";
  });
}

