// Generator functions - http://www.net-comber.com/charset.html

getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

getRandomSpecial = () => {
  const special = '!@#$%^&*=.'
  return symbols[Math.floor(Math.random() * symbols.length)];
};