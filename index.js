const form = document.getElementById("form");



function isValidEmail (email) {

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

return emailRegex.test(String(email).toLocaleLowerCase());

}

form.addEventListener('submit', function (e) {

e.preventDefault();

const emailInput = document.getElementById("email-input")
const errorIcon = document.getElementById("error-icon")
const errorMsg = document.getElementById("error-msg")
const successMsg = document.getElementById("succes-msg")


if(emailInput.value === '') {
  emailInput.style.borderColor = "#F96464"
  errorIcon.style.display = "block"
  errorMsg.style.display = "block"
} else if(!isValidEmail(emailInput.value)) {
  emailInput.style.borderColor = "#F96464";
  errorIcon.style.display = "block"
  errorMsg.style.display = "block"
} else {
    successMsg.style.display = "block"

}


})
