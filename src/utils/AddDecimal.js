export const addDecimal = (currentValue, setCurrentValue) => {
  if (!currentValue.includes(".")) {
    setCurrentValue(currentValue + ".");
  }
};
