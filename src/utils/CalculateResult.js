export const calculateResult = (
  previousValue,
  operation,
  setCurrentValue,
  calculate,
  currentValue,
  setPreviousValue,
  setOperation,
) => {
  if (previousValue === null || operation === null) return;
  setCurrentValue(String(calculate(previousValue, currentValue, operation)));
  setPreviousValue(null);
  setOperation(null);
};