import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function UtilityCalculator() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">

      <h1 className="calculator-type-title">
        Utility Calculators
      </h1>

      <p className="calculator-type-subtitle">
        Smart tools for daily utility and date calculations.
      </p>

      <div className="calculator-cards">

        {/* Days Calculator */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-calendar2-week"></i>
            </div>

            <div className="card-content">

              <h2>
                Days Calculator
              </h2>

              <p>
                Calculate the total number
                of days between two dates.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/utility-calculator/days-calculator"
              )
            }
          >
            Open Calculator
          </button>

        </div>

        {/* Time Difference Calculator */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-clock-history"></i>
            </div>

            <div className="card-content">

              <h2>
                Time Difference Calculator
              </h2>

              <p>
                Find the exact time difference
                between two times instantly.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/utility-calculator/time-difference-calculator"
              )
            }
          >
            Open Calculator
          </button>

        </div>

      </div>

    </div>
  );
}

export default UtilityCalculator;