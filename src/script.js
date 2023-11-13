//getting our elements by ID's
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("Number");
const emailInput = document.getElementById("email");
const urlInput = document.getElementById("url");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// btn and must change text
const registerBtn = document.getElementsByClassName("register-btn")[0];
const registerText = document.getElementById("register-text");

// check pass func
function checkPassword(e) {
  e.preventDefault();
  let passwordVal = passwordInput.value;
  let comfirmPassVal = confirmPasswordInput.value;

  // checking and validating our passwords values
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;

  // our if else logic
  if (!passwordRegex.test(passwordVal)) {
    console.log("first password didnt make it");
  }
  if (!passwordRegex.test(comfirmPassVal)) {
    console.log("second password didnt make it");
  } else {
    if (passwordVal != comfirmPassVal) {
      console.log("password do not mach");
    } else {
      console.log("info sent to database");
    }
  }
}

// event lisnters
registerBtn.addEventListener("click", checkPassword);
