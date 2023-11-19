import React, { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";
import { handleButtonClick } from "./utils/handleButtonClick";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const buttonClick = (buttonName) => {
    handleButtonClick(buttonName, {
      currentValue,
      setCurrentValue,
      previousValue,
      setPreviousValue,
      operation,
      setOperation,
    });
  };

  return (
    <div className="App">
      <div className="calculator">
        <Display value={currentValue} />
        <ButtonPanel onButtonClick={buttonClick} />
      </div>
    </div>
  );
}

export default App;
