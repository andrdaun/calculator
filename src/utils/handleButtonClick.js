import { inputNumber } from "./InputNumber";
import { addDecimal } from "./AddDecimal";
import { clear } from "./Clear";
import { toggleSign } from "./ToggleSign";
import { applyPercent } from "./ApplyPercent";
import { setOperationValue } from "./SetOperationValue";
import { calculateResult } from "./CalculateResult";
import { calculate } from "./Сalculate";

export const handleButtonClick = (
  buttonName,
  {
    currentValue,
    setCurrentValue,
    previousValue,
    setPreviousValue,
    operation,
    setOperation,
  },
) => {
  switch (buttonName) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      inputNumber(setCurrentValue, currentValue, buttonName);
      break;
    case ",":
      addDecimal(currentValue, setCurrentValue);
      break;
    case "AC":
      clear(setCurrentValue, setPreviousValue, setOperation);
      break;
    case "+/-":
      toggleSign(setCurrentValue, currentValue);
      break;
    case "%":
      applyPercent(setCurrentValue, currentValue);
      break;
    case "/":
    case "x":
    case "-":
    case "+":
      setOperationValue(
        previousValue,
        setPreviousValue,
        currentValue,
        setCurrentValue,
        setOperation,
        buttonName,
      );
      break;
    case "=":
      calculateResult(
        previousValue,
        operation,
        setCurrentValue,
        calculate,
        currentValue,
        setPreviousValue,
        setOperation,
      );
      break;
    default:
      break;
  }
};
