const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginButton = document.getElementById("login-button");
const signupButton = document.getElementById("signup-button");

document.getElementById("signup").addEventListener("click", function () {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
});
document.getElementById("login").addEventListener("click", function () {
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

let users = JSON.parse(localStorage.getItem("users")) || [
  {
    signupName: "Emirhan",
    signupEmail: "emirhan",
    signupPassword: "123456",
    signupRole: "admin",
  },
];

loginButton.addEventListener("click", function () {
  if (loginEmail.value === "" || loginPassword.value === "") {
    alert("Please fill in all fields");
    // return;
  }
  let found = false;
  for (let i = 0; i < users.length; i++) {
    console.log(`Email ${users[i].signupEmail}`);
    console.log(`sifre ${users[i].signupPassword}`);
    if (
      users[i].signupEmail === loginEmail.value &&
      users[i].signupPassword === loginPassword.value
    ) {
      if (users[i].signupRole === "admin") {
        window.location.href = "adminPanel.html";
      } else {
        window.location.href = "./book.html";
      }
      found = true;
      localStorage.setItem("loggedInUser", JSON.stringify(users[i]));

      break;
    }
  }

  if (!found) {
    alert("Incorrect password or email");
  }

  loginEmail.value = "";
  loginPassword.value = "";
});

signupButton.addEventListener("click", function () {
  if (
    signupEmail.value === "" ||
    signupName.value === "" ||
    signupPassword.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  } else if (signupPassword.value.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (users[i].signupEmail === signupEmail.value) {
      alert("User already exists");
      return;
    }
  }
  const newUser = {
    signupName: signupName.value,
    signupEmail: signupEmail.value,
    signupPassword: signupPassword.value,
    signupRole: "user",
    signupId: users.length + 1,
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  signupEmail.value = "";
  signupName.value = "";
  signupPassword.value = "";
});
