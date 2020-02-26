// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower;
var upper;
var number;
var symbol;
var length;

function writePassword() {
  var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
 