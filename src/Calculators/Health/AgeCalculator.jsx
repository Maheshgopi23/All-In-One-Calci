import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Health.css";

function AgeCalculator() {

  const navigate = useNavigate();

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [result, setResult] =
    useState(null);

  function calculateAge() {

    if (!startDate || !endDate) {
      setResult(
        "Please select both dates"
      );
      return;
    }
    const birthDate =
      new Date(startDate);
    const currentDate =
      new Date(endDate);

    if (birthDate > currentDate) {
      setResult(
        "Please select appropriate dates"
      );
      return;
    }
    let years =
      currentDate.getFullYear() -
      birthDate.getFullYear();
    let months =
      currentDate.getMonth() -
      birthDate.getMonth();
    let days =
      currentDate.getDate() -
      birthDate.getDate();
    if (days < 0) {
      months--;
      const previousMonthDays =
        new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          0
        ).getDate();
      days += previousMonthDays;
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setResult({
      years,
      months,
      days
    });
  }
  function clearFields() {
    setStartDate("");
    setEndDate("");
    setResult(null);
  }
  return (
    <div className="health-wrapper">
      <div className="health-container">
        <div className="health-sensor"></div>
        <h1 className="health-title">Age Calculator</h1>
        <div className="health-inputs">
          <div className="health-input-group">
            <label>From Date</label>
            <input type="date" value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="health-input-group">
            <label>To Date</label>
            <input type="date" value={endDate} onChange={(e) =>
                setEndDate(e.target.value)}
            />
          </div>
        </div>
        <div className="health-buttons">
          <button className="health-calc-btn" onClick={calculateAge}>Calculate Age</button>
          <button className="health-clear-btn" onClick={clearFields}>Clear</button>
        </div>
        <div className="health-result">
          {typeof result === "string" ? (
            <p>{result}</p>
          ) : result ? (
            <>
              <h2><span>{result.years}</span>Years</h2>
              <h2><span>{result.months}</span>Months</h2>
              <h2><span>{result.days}</span>Days</h2>
            </>
          ) : (
            <p>Result will appear here</p>
          )}
        </div>
      </div>
      <button className="explore-button"
        onClick={() => navigate("/home#calculators-section")}>Explore More Calculators
      </button>
    </div>
  );
}
export default AgeCalculator;