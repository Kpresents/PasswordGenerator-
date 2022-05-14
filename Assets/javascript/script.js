// Assignment Code
var generateBtn = ("generate", "password", "click")

var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "0123456789"
var symbol = "!@#$%^&*()"
var finalpassword = ""
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// adding function pop up !!!
function generatePassword() {
  console.log("Clicked")
  var criteria = alert("Please meet the following criteria:Length of at least 8 characters and no more than 128 character, include lowercase, uppercase, numeric, and/or special characters ");

  criteria = prompt("How Many Characters will you need? Please enter a number between 8-128")
  if (criteria >= 8 && criteria <= 128) {
    var islowercase = confirm("Do you need a lower case letter?")
    var isuppercase = confirm("Do you need an Upper case letter?")
    var isnumberic = confirm("Do you need a number?")
    var issymbol = confirm("Do you need a symbol?")
    for (var i = 0; i < criteria; i++) {

      if (islowercase === true && finalpassword.length <criteria) {
        var index = Math.floor(Math.random() * 26)
        finalpassword = finalpassword + lowercase[index]

      }
      if (isuppercase === true&& finalpassword.length <criteria) {
        var index = Math.floor(Math.random() * 26)
        finalpassword = finalpassword + uppercase[index]
      }
      if (isnumberic === true&& finalpassword.length <criteria) {
        var index = Math.floor(Math.random() * 10)
        finalpassword = finalpassword + number[index]
      }
      if (issymbol === true&& finalpassword.length <criteria) {
        var index = Math.floor(Math.random() * 10)
        finalpassword = finalpassword + symbol[index]
      }
    }
  }
  else {
    alert("Length must be between 8-128 characters");
  }




  return finalpassword
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
