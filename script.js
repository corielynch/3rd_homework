// Assignment Code
var generateBtn = document.querySelector("#generate");
var userPassword 
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase
var symbols
var numbers
var questions = [
    {Q1: "Would you like your secure password to contain an Uppercase character?"},
    {Q2: "Would you like your secure password to contain a Lowercase character?"},
    {Q3: "Would you like your secure password to contain a symbol character?"},
    {Q4: "Would you like your secure password to contain a number character?"},
    {Q5: "How many characters would you like your password to be between 8-128 characters?"}
];

var passOptions = [];

// Write password to the #password input
function writePassword() {
    var length = parseInt(prompt("How many characters would you like your password to be between 8-128 characters?"));
    
    if (isNaN(length) === true){
        alert("Password must be between 8-128 characters.");
        return
    }

    if (length < 8){
        alert("Password has to be at least 8 characters.");
    }

    if (length > 128){
        alert("Password has to be less than 128 characters.");
    }

    var upperCase = confirm("Would you like your secure password to contain an Uppercase character?");

    if (upperCase) {
        for (var i = 0; i < upperCase.length; i++){
            passOptions.push(upperCase);
        }
    }

    var lowerCase = confirm("Would you like your secure password to contain a Lowercase character?");

    var specialSymbol = confirm("Would you like your secure password to contain a special character?");

    var numberCharacter = confirm("Would you like your secure password to contain a number?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
