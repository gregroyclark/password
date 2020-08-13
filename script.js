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
}