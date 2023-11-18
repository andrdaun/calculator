import React, { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  function clear() {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperation(null);
  }

  function toggleSign() {
    setCurrentValue(
      currentValue.charAt(0) === "-"
        ? currentValue.substr(1)
        : `-${currentValue}`,
    );
  }

  function applyPercent() {
    setCurrentValue(String(parseFloat(currentValue) / 100));
  }

  function setOperationValue(op) {
    if (previousValue === null) {
      setPreviousValue(currentValue);
      setCurrentValue("0");
    }
    setOperation(op);
  }

  function calculateResult() {
    if (previousValue === null || operation === null) return;
    setCurrentValue(String(calculate(previousValue, currentValue, operation)));
    setPreviousValue(null);
    setOperation(null);
  }

  function inputNumber(num) {
    setCurrentValue(currentValue === "0" ? String(num) : currentValue + num);
  }

  function calculate(prev, next, operation) {
    const prevNum = parseFloat(prev);
    const nextNum = parseFloat(next);
    switch (operation) {
      case "/":
        return prevNum / nextNum;
      case "*":
        return prevNum * nextNum;
      case "-":
        return prevNum - nextNum;
      case "+":
        return prevNum + nextNum;
      default:
        return nextNum;
    }
  }

  function handleButtonClick(buttonName) {
    switch (buttonName) {
      case "AC":
        clear();
        break;
      case "+/-":
        toggleSign();
        break;
      case "%":
        applyPercent();
        break;
      case "/":
      case "*":
      case "-":
      case "+":
        setOperationValue(buttonName);
        break;
      case "=":
        calculateResult();
        break;
      default:
        inputNumber(buttonName);
        break;
    }
  }

  return (
    <div className="App">
      <div className="calculator">
        <Display value={currentValue} />
        <ButtonPanel onButtonClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
