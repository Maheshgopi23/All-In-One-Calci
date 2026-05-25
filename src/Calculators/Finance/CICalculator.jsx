import { useState } from "react";
import "./Finance.css";
import { useNavigate } from "react-router-dom";

function CICalculator() {

  const [mode, setMode] =
    useState("days");

  const navigate = useNavigate();

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [days, setDays] =
    useState("");

  const [principal, setPrincipal] =
    useState("");

  const [rate, setRate] =
    useState("");

  const [compoundType, setCompoundType] =
    useState("1");

  const [result, setResult] =
    useState(null);

  function calculateCI() {

    if (!principal || !rate) {

      setResult("Please fill all fields");

      return;
    }

    let totalDays = 0;

    if (mode === "date") {
      if (!startDate || !endDate) {
        setResult("Please select dates");
        return;
      }

      const start =
        new Date(startDate);

      const end =
        new Date(endDate);

      const difference =
        end.getTime() -
        start.getTime();

      totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
      if (totalDays <= 0) {
        setResult("Invalid date range");
        return;
      }
    }

    else {
      if (!days) {
        setResult("Enter number of days");
        return;
      }
      totalDays = parseFloat(days);
      if (totalDays <= 0) {
        setResult("Invalid days");
        return;
      }
    }

    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const n = parseFloat(compoundType);
    const t = totalDays / 365;
    const totalAmount = p * Math.pow((1 + r / n),n * t);
    const compoundInterest = totalAmount - p;
    setResult({
      days: totalDays,
      interest: compoundInterest.toFixed(2),
      total: totalAmount.toFixed(2)
    });
  }

  function clearFields() {
    setStartDate("");
    setEndDate("");
    setDays("");
    setPrincipal("");
    setRate("");
    setCompoundType("1");
    setResult(null);
  }

  return (
    <div className="finance-wrapper">
      <div className="finance-container">
        <div className="finance-sensor"></div>
        <h1 className="finance-title">Compound Interest Calculator</h1>
        <div className="finance-mode-buttons">
          <button className={mode === "days" ? "active-mode" : "" }
            onClick={() => setMode("days")}>
            Days Mode
          </button>
          <button className={mode === "date" ? "active-mode" : ""}
            onClick={() => setMode("date")}
          >
            Date Mode
          </button>
        </div>
        <div className="finance-inputs">
          {mode === "date" ? (
            <>
              <div className="finance-input-group">
                <label>Start Date</label>
                <input type="date" value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="finance-input-group">
                <label>End Date</label>
                <input type="date" value={endDate} onChange={(e) =>
                    setEndDate(e.target.value)}
                />
              </div>
            </>
          ) : (
            <div className="finance-input-group">
              <label>Number of Days</label>
              <input type="number" placeholder="Enter Days" value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
          )}
          <div className="finance-input-group">
            <label>Principal Amount</label>
            <input type="number" placeholder="Enter Amount" value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div className="finance-input-group">
            <label>Interest Rate (%)</label>
            <input type="number" placeholder="Enter Rate" value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="finance-input-group">
            <label>Compound Frequency</label>
            <select value={compoundType}
              onChange={(e) => setCompoundType(e.target.value)}
            >
              <option value="1">Yearly</option>
              <option value="2">Half Yearly</option>
              <option value="4">Quarterly</option>
              <option value="12">Monthly</option>
            </select>
          </div>
        </div>
        <div className="finance-buttons">
          <button className="finance-calc-btn" onClick={calculateCI}>Calculate</button>
          <button className="finance-clear-btn" onClick={clearFields}>Clear</button>
        </div>
        <div className="finance-result">
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : result ? (
            <>
              <h2>Total Days<span>{result.days}</span></h2>
              <h2>Compound Interest<span>₹{result.interest}</span></h2>
              <h2>Total Amount<span>₹{result.total}</span></h2>
            </>
          ) : (
            <p>Result will appear here</p>
          )}
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
export default CICalculator;