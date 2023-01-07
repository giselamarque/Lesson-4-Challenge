// Assignment Code
var generateBtn = document.querySelector("#generate");





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;':,.<>/?";

  let allChars = lowerCase + upperCase + numbers + symbols;
  let password = "";

  for (let i = 0; i < 16; i++) {
    let index = Math.floor(Math.random() * allChars.length);
    password += allChars[index];
  }

  return password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);