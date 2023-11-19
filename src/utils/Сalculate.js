export const calculate = (prev, next, operation) => {
  const prevNum = parseFloat(prev);
  const nextNum = parseFloat(next);
  let result;

  switch (operation) {
    case "/":
      result = prevNum / nextNum;
      break;
    case "x":
      result = prevNum * nextNum;
      break;
    case "-":
      result = prevNum - nextNum;
      break;
    case "+":
      result = prevNum + nextNum;
      break;
    default:
      return String(nextNum);
  }

  return String(parseFloat(result.toFixed(10)));
};
