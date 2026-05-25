import { useState } from "react";
import "./BasicStyles.css";
import { useNavigate } from "react-router-dom";

function ScientificCalculator() {

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


  function clearInput() {

    setInput("");
  }


  function backspace() {

    setInput(input.slice(0, -1));
  }

  function calculateResult() {

    if (input.trim() === "") {

      setInput("Error");
      return;
    }

    try {

      let expression = input;


      expression = expression
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/sqrt/g, "Math.sqrt")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/\^/g, "**");

      const result = eval(expression);

      setInput(result.toString());
    }

    catch {

      setInput("Error");
    }
  }

  return (

    <div className="calculator-wrapper">

      <div className="calculator-container scientific-container">

        {/* Sensor */}
        <div className="sensor"></div>

        {/* Title */}
        <h1>Scientific Calculator</h1>

        {/* Screen */}
        <input type="text" className="calculator-screen" value={input} readOnly />

        {/* Keypad */}
        <div className="keypad">

          {/* Row 1 */}
          <div className="calc-row">
            <button className="fun-key" onClick={clearInput} > C </button>
            <button className="operator" onClick={backspace} >
              <i className="bi bi-backspace"></i>
            </button>
            <button className="operator" onClick={() => handleClick("(")}>(</button>
            <button className="operator" onClick={() => handleClick(")")}>)</button>
            <button className="operator" onClick={() => handleClick("/")}>/</button>
          </div>

          {/* Row 2 */}
          <div className="calc-row">
            <button className="scientific-btn" onClick={() => handleClick("sin(")}>
              sin
            </button>
            <button className="scientific-btn" onClick={() => handleClick("cos(")}>
              cos
            </button>
            <button className="scientific-btn" onClick={() => handleClick("tan(")}>
              tan
            </button>
            <button className="scientific-btn" onClick={() => handleClick("sqrt(")}>
              √
            </button>
            <button className="operator" onClick={() => handleClick("*")}>
              ×
            </button>
          </div>

          {/* Row 3 */}
          <div className="calc-row">
            <button className="scientific-btn" onClick={() => handleClick("log(")}>
              log
            </button>
            <button className="scientific-btn" onClick={() => handleClick("ln(")}>
              ln
            </button>
            <button className="scientific-btn" onClick={() => handleClick("π")}>
              π
            </button>
            <button className="scientific-btn" onClick={() => handleClick("^")}>
              x²
            </button>
            <button className="operator" onClick={() => handleClick("-")}>
              -
            </button>
          </div>

          {/* Row 4 */}
          <div className="calc-row">
            <button className="digit" onClick={() => handleClick("7")}>7</button>
            <button className="digit" onClick={() => handleClick("8")}>8</button>
            <button className="digit" onClick={() => handleClick("9")}>9</button>
            <button className="scientific-btn" onClick={() => handleClick("%")}>%</button>
            <button className="operator" onClick={() => handleClick("+")}>+</button>
          </div>

          {/* Row 5 */}
          <div className="calc-row">
            <button className="digit" onClick={() => handleClick("4")}>4</button>
            <button className="digit" onClick={() => handleClick("5")}>5</button>
            <button className="digit" onClick={() => handleClick("6")}>6</button>
            <button className="scientific-btn" onClick={() => handleClick("e")}>e</button>
            <button className="fun-key" onClick={calculateResult}>=</button>
          </div>

          {/* Row 6 */}
          <div className="calc-row">
            <button className="digit" onClick={() => handleClick("1")}>1</button>
            <button className="digit" onClick={() => handleClick("2")}>2</button>
            <button className="digit" onClick={() => handleClick("3")}>3</button>
            <button className="digit" onClick={() => handleClick("0")}>0</button>
            <button className="digit" onClick={() => handleClick(".")}>.</button>
          </div>

        </div>
      </div>
      <button className="explore-button"
        onClick={() => navigate("/home#calculators-section")}
      >
        Explore More Calculators
      </button>
    </div>
  );
}

export default ScientificCalculator;