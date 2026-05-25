import { useState } from "react";
import "./BasicStyles.css";
import { useNavigate } from "react-router-dom";

function StandardCalculator() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  function handleClick(value) {
    if (input === "Error") {
      setInput(value);
    } 
    else {
      setInput(input + value);
    }
  }

  function calculateResult() {
    if (input.trim() === "") {
      setInput("Error");
      return;
    }
    try {
      const result = eval(input);
      setInput(result.toString());
    } 
    catch {
      setInput("Error");
    }
  }


  function backspace() {
    setInput(input.slice(0, -1));
  }

  function clearInput() {
    setInput("");
  }

  return (
    <>
    <div className="calculator-wrapper">
      <div className="calculator-container">
        <div className="sensor"></div>
        <h1>Calculator</h1>
        <input type="text" className="standard-calculator-screen" value={input} readOnly />
        <div className="standard-keypad">
          <div className="standard-calc-row">
            <button className="fun-key" onClick={clearInput}>C</button>
            <button className="operator" onClick={backspace}>
              <i className="bi bi-backspace"></i>
            </button>
            <button className="operator" onClick={() => handleClick("%")}>%</button>
            <button className="operator" onClick={() => handleClick("/")}>/</button>
          </div>

          {/* Row 2 */}
          <div className="standard-calc-row">
            <button className="digit" onClick={() => handleClick("7")}>7</button>
            <button className="digit" onClick={() => handleClick("8")}>8</button>
            <button className="digit" onClick={() => handleClick("9")}>9</button>
            <button className="operator" onClick={() => handleClick("*")}>*</button>
          </div>

          {/* Row 3 */}
          <div className="standard-calc-row">
            <button className="digit" onClick={() => handleClick("4")}>4</button>
            <button className="digit" onClick={() => handleClick("5")}>5</button>
            <button className="digit" onClick={() => handleClick("6")}>6</button>
            <button className="operator" onClick={() => handleClick("-")}>-</button>
          </div>

          {/* Row 4 */}
          <div className="standard-calc-row">
            <button className="digit" onClick={() => handleClick("1")}>1</button>
            <button className="digit" onClick={() => handleClick("2")}>2</button>
            <button className="digit" onClick={() => handleClick("3")}>3</button>
            <button className="operator" onClick={() => handleClick("+")}>+</button>
          </div>

          {/* Row 5 */}
          <div className="standard-calc-row">
            <button className="digit" onClick={() => handleClick(".")}>.</button>
            <button className="digit" onClick={() => handleClick("0")}>0</button>
            <button className="digit" onClick={() => handleClick("00")}>00</button>
            <button className="fun-key" onClick={calculateResult}>=</button>
          </div>

        </div>

      </div>
      <button className="explore-button"
        onClick={() => navigate("/home#calculators-section")}
      >
        Explore More Calculators
      </button>
    </div>
    
    </>
  );
}

export default StandardCalculator;