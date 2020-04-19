// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialSymbol = ["!","@","#","$","%","^","&","*","(",")","<",">","{","}","[","]","/","?"];
var numberCharacter = ["1","2","3","4","5","6","7","8","9"];
var questions = [
    {Q1: "Would you like your secure password to contain an Uppercase character?"},
    {Q2: "Would you like your secure password to contain a Lowercase character?"},
    {Q3: "Would you like your secure password to contain a symbol character?"},
    {Q4: "Would you like your secure password to contain a number character?"},
    {Q5: "How many characters would you like your password to be between 8-128 characters?"}
];

var passOptions = [upperCase, lowerCase, specialSymbol, numberCharacter];

// Write password to the #password input
function writePassword() {
    var length = parseInt(prompt("How many characters would you like your password to be between 8-128 characters?"));
    
    var passwordFinalChoice = []


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

// User questions password preference
    var upperCaseChoice = confirm("Would you like your secure password to contain Uppercase characters?");

// For loops to push preferences to new variable, passOptions
    if (upperCaseChoice) {
            var randomUpper = Math.floor(Math.random() * 26) + 1;
            passwordFinalChoice.push(upperCase[randomUpper]);
    for (i = 0; i < randomUpper.length; i++) {
            }
        
        console.log("This is where the Upper's added", passwordFinalChoice);
    }

    var lowerCaseChoice = confirm("Would you like your secure password to contain Lowercase characters?");

    if (lowerCaseChoice) {
            var randomLower = Math.floor(Math.random() * 26) + 1;
            passwordFinalChoice.push(lowerCase[randomLower]);

        console.log("This is where the Lower's added", passwordFinalChoice);
        
    }

    var specialSymbolChoice = confirm("Would you like your secure password to contain special characters?");

    if (specialSymbolChoice) {
            var randomSymbol = Math.floor(Math.random() * 18) + 1;
            passwordFinalChoice.push(specialSymbol[randomSymbol]);

        console.log("This is where the Symbol's added", passwordFinalChoice);
    }

    var numberCharacterChoice = confirm("Would you like your secure password to contain numbers?");

    if (numberCharacterChoice) {
            var randomNum = Math.floor(Math.random() * 10) + 1;
            passwordFinalChoice.push(numberCharacter[randomNum]);

        console.log("This is where the Numbers's added", passwordFinalChoice);
    }

  for (i = 0; i < length; i++) {
  }



// Create password based on user criteria
  var passwordText = document.querySelector('#password');
  passwordText.value = passwordFinalChoice;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
