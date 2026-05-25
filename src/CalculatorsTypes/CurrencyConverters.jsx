import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function CurrencyConverters() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">
      <h1 className="calculator-type-title">Currency Converter</h1>
      <p className="calculator-type-subtitle">Convert currencies instantly with smart exchange calculations.</p>
      <div className="calculator-cards">

        {/* Currency Converter */}
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-currency-exchange"></i>
            </div>
            <div className="card-content">
              <h2>Currency Converter</h2>
              <p>Convert your currency to another currency quickly and accurately.</p>
            </div>
          </div>
          <button className="open-btn" onClick={() => navigate("/currency-converter/converter") }>
            Open Converter
          </button>
        </div>
        <div className="calculator-card-item">
          <div className="card-left">
            <div className="card-icon">
              <i className="bi bi-currency-rupee"></i>
            </div>
            <div className="card-content">
              <h2>INR Calculator</h2>
              <p>Calculate the total amount of Indian Rupees(INR) based on the number of notes and coins.</p>
            </div>
          </div>
          <button className="open-btn" onClick={() => navigate("/currency-converter/inr") }>
            Open Converter
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverters;