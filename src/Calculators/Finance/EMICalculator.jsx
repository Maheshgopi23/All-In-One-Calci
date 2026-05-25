import { useState } from "react";
import "./Finance.css";
import { useNavigate } from "react-router-dom";


function EMICalculator() {

  const navigate = useNavigate();

  const [loanAmount, setLoanAmount] =
    useState("");

  const [interestRate, setInterestRate] =
    useState("");

  const [loanTenure, setLoanTenure] =
    useState("");

  const [result, setResult] =
    useState(null);

  function calculateEMI() {

    if (
      !loanAmount ||
      !interestRate ||
      !loanTenure
    ) {
      setResult("Please fill all fields");
      return;
    }

    const principal = parseFloat(loanAmount);
    const monthlyRate = (interestRate) / 12 / 100;
    const months = parseFloat(loanTenure);
    const emi =
      (
        principal * monthlyRate * Math.pow(1 + monthlyRate,months)
      ) /
      (
        Math.pow(1 + monthlyRate,months) - 1
      );

    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;
    setResult({
      emi: emi.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      totalInterest: totalInterest.toFixed(2)
    });
  }

  function clearFields() {
    setLoanAmount("");
    setInterestRate("");
    setLoanTenure("");
    setResult(null);
  }

  return (
    <div className="finance-wrapper">
      <div className="finance-container">
        <div className="finance-sensor"></div>
        <h1 className="finance-title">EMI Calculator</h1>
        <div className="finance-inputs">
          <div className="finance-input-group">
            <label>Loan Amount</label>
            <input type="number" placeholder="Enter Loan Amount" value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
          </div>
          <div className="finance-input-group">
            <label>Interest Rate (%)</label>
            <input type="number" placeholder="Enter Interest Rate" value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div className="finance-input-group">
            <label>Loan Tenure (Months)</label>
            <input type="number" placeholder="Enter Loan Tenure" value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
            />
          </div>
        </div>
        <div className="finance-buttons">
          <button className="finance-calc-btn" onClick={calculateEMI}>Calculate</button>
          <button className="finance-clear-btn" onClick={clearFields}>Clear</button>
        </div>
        <div className="finance-result">
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : result ? (
            <>
              <h2>Monthly EMI<span>₹{result.emi}</span></h2>
              <h2>Total Interest<span>₹{result.totalInterest}</span></h2>
              <h2>Total Amount<span>₹{result.totalAmount}</span></h2>
            </>
          ) : (
            <p>Result will appear here</p>
          )}
        </div>
      </div>
      <button className="explore-button" onClick={() => navigate("/home#calculators-section")}
        >Explore More Calculators
      </button>
    </div>
  );
}

export default EMICalculator;