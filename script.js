// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min - 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}
function generatePassword (){
//  var userInput = window.prompt("How long will your password be?")
//  var passwordLength = parseInt(userInput)
  
 // if (isNaN(passwordLength)) {
 //   window.alert("Not a Number")
 //   return
 // }

  //if (passwordLength < 8 || passwordLength > 128) {
 // window.alert("Password must be between 8-128 characters")
 // return
//}
while (true) {
  var userInput = window.prompt("How long will your password be?")
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
  window.alert("Not a Number")
  } else if (passwordLength < 8 || passwordLength > 128){
    window.alert("Invalid password length. Needs to be between 8-128.")
  } else {
    break
  }
}
}
var UserNumbers = window.confirm("Do you want to use numbers?")
var UserSymbols = window.confirm("Do you want to use symbols?")
var UserLowercase = window.confirm("Do you want to use lowercase letters?")
var UserUppercase = window.confirm("Do tou want to use uppercase letters?")
var Numbercheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var Symbolcheck = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
var Lowercasecheck = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k,", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var Uppercasecheck = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var optionsCart = []

for (var i = 0; i < Lowercasecheck.length; i++) {
  Uppercasecheck[i] = Lowercasecheck[i].toUpperCase()
}
if (UserNumbers === true) {
  optionsCart.push(Numbercheck)
}
if (UserSymbols === true) {
  optionsCart.push(Symbolcheck)
}
if (UserLowercase === true) {
  optionsCart.push(Lowercasecheck)
}
if (UserUppercase === true){
  optionsCart.push(Uppercasecheck)
}
var generatedPassword = ""
for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomchar = getRandomItem(optionsCart)
  generatedPassword += randomchar
}
return "Generated Password";
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  
}