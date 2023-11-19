import React from "react";
import Button from "./Button";
import "../styles/ButtonPanel.css";
import "../styles/Button.css";

function ButtonPanel({ onButtonClick }) {
  const handleClick = (buttonName) => {
    onButtonClick(buttonName);
  };

  return (
    <div className="button-panel">
      <div className="button-row">
        <Button label="AC" onClick={handleClick} />
        <Button label="+/-" onClick={handleClick} />
        <Button label="%" onClick={handleClick} />
        <Button label="/" onClick={handleClick} className="operator" />
      </div>
      <div className="button-row">
        <Button label="7" onClick={handleClick} />
        <Button label="8" onClick={handleClick} />
        <Button label="9" onClick={handleClick} />
        <Button label="x" onClick={handleClick} className="operator" />
      </div>
      <div className="button-row">
        <Button label="4" onClick={handleClick} />
        <Button label="5" onClick={handleClick} />
        <Button label="6" onClick={handleClick} />
        <Button label="-" onClick={handleClick} className="operator" />
      </div>
      <div className="button-row">
        <Button label="1" onClick={handleClick} />
        <Button label="2" onClick={handleClick} />
        <Button label="3" onClick={handleClick} />
        <Button label="+" onClick={handleClick} className="operator" />
      </div>
      <div className="button-row">
        <Button label="0" onClick={handleClick} className="zero" />
        <Button label="," onClick={handleClick} className="button-operator" />
        <Button label="=" onClick={handleClick} className="operator equal" />
      </div>
    </div>
  );
}

export default ButtonPanel;
