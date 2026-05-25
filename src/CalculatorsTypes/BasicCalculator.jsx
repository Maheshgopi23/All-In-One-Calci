import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function BasicCalculator() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">
      <h1 className="calculator-type-title">
        Basic Calculators
      </h1>
      <p className="calculator-type-subtitle">
        Perform quick and smart everyday calculations.
      </p>
      <div className="calculator-cards">

        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-calculator"></i>
            </div>
            <div className="card-content">
              <h2>Standard Calculator</h2>
              <p>Perform basic arithmetic operations easily.</p>
            </div>
          </div>
          <button
            className="open-btn"
            onClick={() =>
              navigate("/basic-calculator/standard")
            }
          >
            Open Calculator
          </button>
        </div>

        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-percent"></i>
            </div>
            <div className="card-content">
              <h2>Percentage Calculator</h2>
              <p>Calculate percentages instantly and accurately.</p>
            </div>
          </div>
          <button className="open-btn" onClick={() =>
              navigate("/basic-calculator/percentage")
            }
          >
            Open Calculator
          </button>
        </div>

        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-calculator"></i>
            </div>
            <div className="card-content">
              <h2>Scientific Calculator</h2>
              <p>Perform advanced mathematical calculations with ease.</p>
            </div>
          </div>
          <button className="open-btn" onClick={() =>
              navigate("/basic-calculator/scientific")
            }
          >
            Open Calculator
          </button>
        </div>

      </div>

    </div>
  );
}

export default BasicCalculator;