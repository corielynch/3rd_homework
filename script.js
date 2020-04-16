// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var symbols = ["!","@","#","$","%","^","&","*","(",")","<",">","{","}","[","]","/","?"];
var numbers = ["1","2","3","4","5","6","7","8","9"];
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

// If statements to ensure password is within parameters.
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

// Questions about password preference
    var upperCase = confirm("Would you like your secure password to contain Uppercase characters?");

// For loops to push preferences to new variable, passOptions
    if (upperCase) {
        for (var i = 0; i < upperCase.length; i++){
            passOptions.push(upperCase);
        }
    }

    var lowerCase = confirm("Would you like your secure password to contain Lowercase characters?");

    if (lowerCase) {
        for (var i = 0; i < lowerCase.length; i++){
            passOptions.push(lowerCase);
        }
    }

    var specialSymbol = confirm("Would you like your secure password to contain special characters?");

    if (specialSymbol) {
        for (var i = 0; i < specialSymbol.length; i++){
            passOptions.push(specialSymbol);
        }
    }

    var numberCharacter = confirm("Would you like your secure password to contain numbers?");

    if (numberCharacter) {
        for (var i = 0; i < numberCharacter.length; i++){
            passOptions.push(numberCharacter);
        }
    }


// Create password based on user criteria
  var password = generatePassword();
  var passOptions = document.querySelector("#password");

  passOptions.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
