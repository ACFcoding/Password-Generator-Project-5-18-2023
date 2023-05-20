// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Added a function to generate the password being called further down
function generatePassword() {
//Remember the validate input part
//Show the password on the page

//Added variables for the potential characters and prompts for the user to answer to generate the password.
var lengthRequest = prompt("Select a length for your password. It must be between 8 and 128 characters. Please enter the number now.")
if (lengthRequest < 8) {
lengthRequest = prompt("Invalid length. Try again. Length must be between 8 and 128 characters.")
}
else if (lengthRequest > 128) {
  lengthRequest = prompt("Invalid length. Try again. Length must be between 8 and 128 characters.");
}
var characterSelection = prompt("You have the options of upper case, lower case, numeric, and/or special characters. Include one example of each that you request.")
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZX"
var charactersLower = "abcdefghijklmnopqrstuvwxyz"
var charactersNumeric = "1234567890"
var charactersSpecial = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
