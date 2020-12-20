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

function generatePassword() {
	var lowerchar = "abcdefghijklmnopqrstuvwxyz";
	var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var num = "0123456789";
	var sym = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

	var optionsPW = "";

	var q1 = prompt("What is the length of the password? Please choose numbers between 8 and 128");
	var q2l = confirm("Do you want lower case characters?");
	var q2u = confirm("Do you want upper case characters?");
	var q3 = confirm("Do you want number?");
	var q4 = confirm("Do you want symbols?");

	if (q2l == true) {
		optionsPW += lowerchar;
	}

	if (q2u == true) {
		optionsPW += upperchar;
	}

	if (q3 == true) {
		optionsPW += num;
	}

	if (q4 == true) {
		optionsPW += sym;
	}
	console.log(optionsPW);

	function generator(length, characters) {
		var pwd = "";
		for (var l = 0; l < length; l++) {
			pwd += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		return pwd;
	}

	return generator(q1, optionsPW);
}
