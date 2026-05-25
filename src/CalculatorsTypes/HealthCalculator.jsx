import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function HealthCalculator() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">
      <h1 className="calculator-type-title"> Health Calculators</h1>
      <p className="calculator-type-subtitle">Monitor your health with smart calculations.</p>
      <div className="calculator-cards">
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-heart-pulse"></i>
            </div>
            <div className="card-content">
              <h2>BMI Calculator</h2>
              <p>Calculate body mass index accurately.</p>
            </div>
          </div>
          <button className="open-btn" onClick={() => navigate("/health-calculator/bmi")}>
            Open Calculator
          </button>
        </div>
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-people"></i>
            </div>
            <div className="card-content">
              <h2>Age Calculator</h2>
              <p>Calculate your age in different time units.</p>
            </div>
          </div>
          <button className="open-btn" onClick={() => navigate("/health-calculator/age")}>
            Open Calculator
          </button>
        </div>
      </div>
    </div>
  );
}

export default HealthCalculator;