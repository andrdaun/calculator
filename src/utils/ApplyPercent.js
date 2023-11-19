export const applyPercent = (setCurrentValue, currentValue) => {
  setCurrentValue(String(parseFloat(currentValue) / 100));
};
