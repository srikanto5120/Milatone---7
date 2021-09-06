const promt = () => {
  const userInput = prompt();
  const sum = parseInt(userInput) + 200;
  return sum;
};
const result = promt();
alert(result);
