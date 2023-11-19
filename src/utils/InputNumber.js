export const inputNumber = (setCurrentValue, currentValue, num) => {
  if (currentValue === "0" && num === "0") {
    return;
  } else if (currentValue === "0" && num !== "0" && num !== ".") {
    setCurrentValue(num);
  } else if (!currentValue.includes(".") || (num !== "." && num !== "0")) {
    setCurrentValue(currentValue + num);
  }
};
