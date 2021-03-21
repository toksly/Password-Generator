// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_''.'

  ];

// Array of numeric characters 
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercases
var lowerCasedCharacters = ['a','b','c','d','e','f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

// Array of uppercases
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

// prompt user for password options
function getPasswordOptions() {
  // Variable to store password length 
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );

  // Conditional statement to check if password length is a number. Prompts incorrect password if it evaluates false
  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts incorrect password if it evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts incorrect password if it evaluates false
  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

  // Variable to store boolean for the special characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  // Variable to store boolean for the numeric characters
  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  // Variable to store boolean for lowercases
  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  // Variable to store boolean for  uppercases
  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  // Conditional statement for any of the four characters. Password generator prompts incorrect password if all four variables are false
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  // Variable to store concatenated password
  var result = [];

  // Array to store types of characters to include in password
  var possibleCharacters = [];

  // Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  // Conditional statement for adding array of special characters into array of all possible characters according to the user input
  // Push new random special character to guaranteedCharacters
  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  // Conditional statement for adding array of numeric characters into array of all possible characters according to the user input
  // Push new random special character to guaranteedCharacters
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  // Conditional statement for adding array of lowercase characters into array of possible characters according to the user input
  // Push new random lower-cased character to guaranteedCharacters
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  // Conditional statement for adding array of uppercase characters into array of possible characters according to the user input
  // Push new random upper-cased character to guaranteedCharacters
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  // For loop to iterate over the lenght of password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  // Mix in at least one of each guaranteed character in the result
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  // Transform the result into a string and pass into writePassword
  return result.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
