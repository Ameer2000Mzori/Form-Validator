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
  // getting our values from or elements
  let numberVal = numberInput.value;
  let emailVal = emailInput.value;
  let passwordVal = passwordInput.value;
  let comfirmPassVal = confirmPasswordInput.value;

  // checking and validating our input values
  const numberRegex = /^(?=.*[0-9])(.{8,})$/;
  const emailRegex = /^(?=.*[@])/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(.{8,})$/;

  if (!numberRegex.test(numberVal)) {
    console.log("Number didnt make it");
  } else if (!emailRegex.test(emailVal)) {
    console.log("Email didnt make it");
  } else if (!passwordRegex.test(passwordVal)) {
    console.log("first password didnt make it");
  } else if (!passwordRegex.test(comfirmPassVal)) {
    console.log("confirm password didnt make it");
  } else if (passwordVal != comfirmPassVal) {
    console.log("passwords do not mach");
  } else {
  }
}

// event lisnters
registerBtn.addEventListener("click", checkPassword);
