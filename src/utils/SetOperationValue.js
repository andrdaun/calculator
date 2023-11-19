export const setOperationValue = (
  previousValue,
  setPreviousValue,
  currentValue,
  setCurrentValue,
  setOperation,
  op,
) => {
  if (previousValue === null) {
    setPreviousValue(currentValue);
    setCurrentValue("0");
  }
  setOperation(op);
};
