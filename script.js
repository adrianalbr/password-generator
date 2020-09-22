//Define arrays of the possible characters that could be included in the password

// Array of special characters
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

//function to ask for length of password and return alerts if password is too long or too short
function generateOptions() {
  var length = prompt(
    "The length of your password must be more than 8 but less then 128. Please select a number between 8 and 128"
  );

  if (length < 8) {
    alert("Length is to short");
    return;
  }
  if (length >= 128) {
    alert("Length is to long");
    return;
  }

 // Variables to store letter numbers and symbols to be included in the password
  var lowerCase = confirm("Would you like to include lower case letters?");
  var upperCase = confirm("Would you like to include upper case letters?");
  var numberCase = confirm("Would you like to include numbers?");
  var symbolCase = confirm("Would you like to include symbols");

  console.log(length, lowerCase, upperCase, numberCase, symbolCase);

  var userOptions = {
    length: length,
    lower: lowerCase,
    upper: upperCase,
    number: numberCase,
    symbol: symbolCase,
  };

  return userOptions;
}

//function to generate a random letter
function random(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var letter = arr[index];
  console.log("ind random", arr, letter);
  return letter;
}


function generatePassword() {
  
  var options = generateOptions();
  

  var result = [];
  var possibleChar = [];
  var guaranteeChar = [];

  if (options.lower) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);
    guaranteeChar.push(random(lowerCasedCharacters));
  }

  if (options.number) {
    possibleChar = possibleChar.concat(numericCharacters);
    guaranteeChar.push(random(numericCharacters));
  }

  console.log("possible", possibleChar, "guarantee", guaranteeChar);

  for (let i = 0; i < options.length; i++) {
    var characters = random(possibleChar);
    result.push(characters);
  }

  for (let i = 0; i < guaranteeChar.length; i++) {
    result[i] = guaranteeChar[i];
  }
  console.log("before, join", result);
  return result.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
