import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function FinanceCalculator() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">

      <h1 className="calculator-type-title">
        Financial Calculators
      </h1>

      <p className="calculator-type-subtitle">
        Powerful tools for finance and investment planning.
      </p>

      <div className="calculator-cards">

        {/* EMI */}
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-cash-stack"></i>
            </div>
            <div className="card-content">
              <h2>EMI Calculator</h2>
              <p>Calculate monthly loan EMI instantly.</p>
            </div>
          </div>
          <button
            className="open-btn"
            onClick={() =>
              navigate("/financial-calculator/emi")
            }
          >
            Open Calculator
          </button>
        </div>
        
        {/* Simple Interest */}
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-graph-up"></i>
            </div>
            <div className="card-content">
              <h2>Simple Interest Calculator</h2>
              <p>Calculate simple interest on your investments.</p>
            </div>
          </div>
          <button
            className="open-btn"
            onClick={() =>
              navigate("/financial-calculator/simple-interest")
            }
          >
            Open Calculator
          </button>
        </div>

        {/* Compound Interest */}
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-graph-down"></i>
            </div>
            <div className="card-content">
              <h2>Compound Interest Calculator</h2>
              <p>Calculate compound interest on your investments.</p>
            </div>
          </div>
          <button
            className="open-btn"
            onClick={() =>
              navigate("/financial-calculator/compound-interest")
            }
          >
            Open Calculator
          </button>
        </div>

      </div>

    </div>
  );
}

export default FinanceCalculator;