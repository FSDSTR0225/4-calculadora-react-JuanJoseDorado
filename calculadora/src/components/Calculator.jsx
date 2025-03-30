import React, { useState } from "react";
import Display from "./Display.jsx";
import Keypad from "./Keypad.jsx";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  // Maneja clics en los botones de números
  const handleNumberClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Maneja clics en +, -, *, /
  const handleOperationClick = (op) => {
    if (input === "") return;
    setPreviousValue(input);
    setOperation(op);
    setInput("");
  };

  // Maneja el botón "="
  const handleEqualsClick = () => {
    if (!operation || input === "" || previousValue === null) return;

    const current = parseFloat(input);
    const previous = parseFloat(previousValue);
    let result = 0;

    switch (operation) {
      case "+":
        result = previous + current;
        break;
      case "-":
        result = previous - current;
        break;
      case "*":
        result = previous * current;
        break;
      case "/":
        result = current === 0 ? "Error" : previous / current;
        break;
      default:
        break;
    }

    // Mostrar resultado en la "pantalla"
    setInput(String(result));
    setPreviousValue(null);
    setOperation(null);
  };

  // Maneja el botón de "borrar" (AC)
  const handleClearClick = () => {
    setInput("");
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <div className="calculator">
      <Display value={input || "0"} />
      <Keypad
        handleNumberClick={handleNumberClick}
        handleOperationClick={handleOperationClick}
        handleEqualsClick={handleEqualsClick}
        handleClearClick={handleClearClick}
      />
    </div>
  );
}

export default Calculator;
