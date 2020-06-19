// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower;
var upper;
var number;
var symbol;
var length;

  //password criteria
  function generatePassword() {
    var pswdLength = prompt("Choose a password length between 8-128 characters.");
     var passwordGen = [];

     if (pswdLength >= 8 && pswdLength <= 128) {
      LengthValue = parseInt(pswdLength);
  var upperCase = confirm("Uppercase letters?");
      var lowerCase = confirm("LowerCase letters?");
      var numbers = confirm("Numbers?");
      var special = confirm("Special characters?");
    }
    else {
      alert("Please choose between 8 and 128");
    }

  //grabs an uppercase letter.
    if (upperCase===true) {
      upperValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (i = 0; i < upperValue.length; i++) {
          passwordGen.push(upperValue[i]);
      }
    }
    
    //grabs a lowercase letter.
    if (lowerCase === true) {
      lowerValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (i = 0; i < lowerValue.length; i++) {
          passwordGen.push(lowerValue[i]);
        }
    }

    //grabs a number.
    if (numbers === true) {
      numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (i = 0; i < numberValue.length; i++) {
        passwordGen.push(numberValue[i]);
      }
    }

    //grabs a symbol.
    if (special === true) {
      specialValue = ["!", "@", "#", "$", "%", ":", ";", "-", "?", ];
      for (i = 0; i < specialValue.length; i++) {
        passwordGen.push(specialValue[i]);
      }
    }
  }

  function writePassword() {
    var password = generatePassword();
      var passwordText = document.querySelector("#password");
      passwordText.value = password;
    }

  generatePassword();
  writePassword();