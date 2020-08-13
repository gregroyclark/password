const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxys";
const number = "1234567890";
const symbol = "!@#$%^&*.";

passwordParams = () => {
  const length = parseInt(
    prompt("Choose a number between 11-77.")
  );
  if (isNaN(length) === true) {
    alert("Please type a number between 11-77.");
    return;
  }

  if (length < 11) {
    alert("Password must be at least 11 characters.");
    return;
  }

  if (length > 77) {
    alert("Password is too long.");
    return;
  }

  const useSymbols = confirm(
    "Click OK to use special characters."
  );

  const useNumbers = confirm(
    "Click OK to use numbers."
  );

  const useUppercase = confirm(
    "Click OK to use uppercase letters."
  );

  const useLowercase = confirm(
    "Click OK to use lowercase letters."
  );

  if (
    useSymbols === false &&
    useNumbers === false &&
    useUppercase === false &&
    useLowercase === false
  ) {
    alert("Your password has to use at least one character type.");
    return;
  }

  const passwordOptions = {
    length: length,
    useSymbols: useSymbols,
    useNumbers: useNumbers,
    useUppercase: useUppercase,
    useLowercase: useLowercase
  };

  return passwordOptions;
};

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomElement = arr[randomIndex];

  return randomElement;
};

generatePassword = () => {
  const options = getPasswordOptions();

  let result = [];
  let possibleCharacters = [];
  let guaranteedCharacters = [];

  if (options.useSymbols) {
    possibleCharacters = possibleCharacters.concat(symbol);
    guaranteedCharacters.push(getRandom(symbol));
  }

  if (options.useNumbers) {
    possibleCharacters = possibleCharacters.concat(number);
    guaranteedCharacters.push(getRandom(number));
  }

  if (options.useUppercase) {
    possibleCharacters = possibleCharacters.concat(useUppercase);
    guaranteedCharacters.push(getRandom(upper));
  }

  if (options.useLowercase) {
    possibleCharacters = possibleCharacters.concat(useLowercase);
    guaranteedCharacters.push(getRandom(lower));
  }

  for (let i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
};

const generateBtn = document.querySelector('#generate');

writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
};

generateBtn.addEventListener('click', writePassword);