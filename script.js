// Assignment Code
var generatePassword = function() {
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specCharSet = ['/','[','!','@','#','$','%','^','&','*','(',')','_','+','\\','-','=','{','}',';',':','"','|',',','.','<','>','?','+',']'];
  var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var password = "";
  var options = [];
  var pwLength = 0;

  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // Ask what number length user wants the password to be
  // Add number of characters window prompt
  // Add invalid input alert
  while (!(pwLength >= 8 && pwLength <=128)) {
    pwLength = window.prompt("How many characters do you want your password to have? Please type a number between 8 and 128.");
    if (!(pwLength >=8 && pwLength <= 128)) {
      window.alert("Invalid number. Please type a number between 8-128.");
    }
    else {
      continue
    }
  }

  var criteriaTypes = function() {
    // While loop makes sure the user chooses at least one password criteria
    while (options.length === 0) {
      var criteriaMix = ""
      // Use an alert window to let user know they have to choose at least one of the character types
      window.alert("You must choose AT LEASE ONE Character Type to generate a password. \n Numbers, Special Characters, Uppercase or Lowercase Letters.");

      // Ask the user if they want LOWERCASE Letters
      // Add window prompt for user to select or exclude Lowercase Letters
      if (window.prompt("INCLUDE LOWERCASE LETTERS? Type '1' to select, OR leave blank and press okay to exclude this character type.") === "1") {
        window.alert("You have chosen to include LOWERCASE LETTERS");
        // All lowercase letters will be added to the 'options' array
        options+=lowerCase;
        
        criteriaMix += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      }
      else {
        window.alert("Lowercase letters will NOT be included.");
      }

      // Ask the user if they want UPPERCASE Letters
      // Add window prompt for user to select or exclude Uppercase Letters
      if (window.prompt("INCLUDE UPPERCASE LETTERS? Type '2' to select, OR leave blank and press okay to exclude this character type.") === "2") {
        window.alert("You have chosen to include UPPERCASE LETTERS");
        // All uppercase letters will be added to the 'options' array
        options += upperCase;

        criteriaMix += upperCase[Math.floor(Math.random() * upperCase.length)];        
      }
      else {
        window.alert("Uppercase lettters will NOT be included.");
      }
      
      // Ask the user if they want NUMBERS
      // Add window prompt for user to select or exclude Numbers
      if (window.prompt("INCLUDE NUMBERS? Type '3' to select, OR leave blank and press okay to exclude this character type.") === "3") {
        window.alert("You have chosen to include NUMBERS");
        // All numbers will be added to the 'options' array
        options += numberChar;
        
        criteriaMix += numberChar[Math.floor(Math.random() * numberChar.length)];
      }
      else {
        window.alert("Numbers will NOT be included.");
      }

      // Ask the user if they want SPECIAL CHARACTERS
      // Add window prompt for user to select or exclude Special Characters
      if (window.prompt("INCLUDE SPECIAL CHARACTERS? Type '4' to select, OR leave blank and press okay to exclude this character type.") === "4") {
        window.alert("You have chosen to include SPECIAL CHARACTERS");
        // All special characters will be added to the 'options' array
        options += specCharSet;

        criteriaMix += specCharSet[Math.floor(Math.random() * specCharSet.length)];
      }
      else {
        window.alert("Special characters will NOT be included.");
      }
      } 
    // While loop ENDS

    return criteriaMix;

  } // criteriaTypes function ENDS


  // Password variable now has string concatenation returned by string
  password += criteriaTypes();

  characterOptions = [];
  for (i=0; i<options.length; i++) {
    if (options[i] === ",") {
      continue;
    }
    else {
      characterOptions += options[i];
    }
  }

  // Iterations for the for loop
  // Will create a password using the types of characters the user selected.
  var charCodes = pwLength - password.length;

  for (let i=0; i<charCodes; i++) {
    password += characterOptions[Math.floor(Math.random() * characterOptions.length)];
  }

  return password;

} // generatePassword function ENDS

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
white_check_mark
eyes
raised_hands
React
Reply










