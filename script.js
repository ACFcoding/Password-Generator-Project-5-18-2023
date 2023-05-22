// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Added a function to generate the password being called further down
function generatePassword(lengthRequest, charactersLower, charactersNumeric, charactersUpper, charactersSpecial) {
//Remember the validate input part
//Show the password on the page

//Added variables for the potential characters and prompts for the user to answer to generate the password.
var lengthRequest = prompt("Select a length for your password. It must be between 8 and 128 characters. Please enter the number now.")
if (lengthRequest < 8) {
lengthRequest = prompt("Invalid length. Try again. Length must be between 8 and 128 characters.");
}
else if (lengthRequest > 128) {
  lengthRequest = prompt("Invalid length. Try again. Length must be between 8 and 128 characters.");
}
// used confirm as the method of getting user criteria for password
var characterUpperBool = confirm("Do you want upper case?")
var characterLowerBool = confirm("Do you want lower case?")
var characterNumericBool = confirm("Do want to use numbers?")
var characterSpecialBool = confirm("Do you want to use special characters?")

var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZXYZ".split("")
var charactersLower = "abcdefghijklmnopqrstuvwxyz".split("")
var charactersNumeric = "1234567890".split("")
var charactersSpecial = "!@#$%^&*()".split("")
//added array
var characterArray = [];


// Added if else statements to parse user needs regarding password.
//Adjusted said if else statements to actually work right.
if (characterUpperBool) {
console.log("upper selected")
characterArray += characterArray.concat(charactersUpper);
return characterArray;
}

else if (characterLowerBool) {
  console.log("lower selected")
characterArray += characterArray.concat(charactersLower)
return characterArray;
}

else if (characterNumericBool) {
console.log("numeric selected")
characterArray += characterArray.concat(charactersNumeric)
return characterArray;
}

else if (characterSpecialBool) {
console.log("special selected")
characterArray += characterArray.concat(charactersSpecial)
return characterArray;
}
else {
  window.alert(["Invalid entry. Reload and try again."])
}
return characterArray;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
