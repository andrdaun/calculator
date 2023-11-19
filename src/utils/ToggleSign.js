export const toggleSign = (setCurrentValue, currentValue) => {
  setCurrentValue(
    currentValue.charAt(0) === "-" ? currentValue.slice(1) : `-${currentValue}`,
  );
};
