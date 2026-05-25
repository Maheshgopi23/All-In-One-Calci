import { useState } from "react";
import "./Finance.css";
import { useNavigate } from "react-router-dom";

function SICalculator() {

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

  const [result, setResult] =
    useState(null);

  function calculateSI() {

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

      totalDays =
        Math.ceil(
          difference /
          (1000 * 60 * 60 * 24)
        );

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

      totalDays =
        parseFloat(days);

      if (totalDays <= 0) {

        setResult("Invalid days");

        return;
      }
    }

    const p =
      parseFloat(principal);

    const r =
      parseFloat(rate);

    const si =
      (p * r * totalDays) /
      (100 * 365);

    const totalAmount =
      p + si;

    setResult({

      days: totalDays,

      interest:
        si.toFixed(2),

      total:
        totalAmount.toFixed(2)
    });
  }

  function clearFields() {

    setStartDate("");

    setEndDate("");

    setDays("");

    setPrincipal("");

    setRate("");

    setResult(null);
  }

  return (

    <div className="finance-wrapper">

      <div className="finance-container">

        <div className="finance-sensor"></div>

        <h1 className="finance-title">
          Simple Interest Calculator
        </h1>

        <div className="finance-mode-buttons">

          <button
            className={
              mode === "days"
              ? "active-mode"
              : ""
            }

            onClick={() =>
              setMode("days")
            }
          >
            Days Mode
          </button>

          <button
            className={
              mode === "date"
              ? "active-mode"
              : ""
            }

            onClick={() =>
              setMode("date")
            }
          >
            Date Mode
          </button>

        </div>

        <div className="finance-inputs">

          {mode === "date" ? (

            <>

              <div className="finance-input-group">

                <label>
                  Start Date
                </label>

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) =>
                    setStartDate(
                      e.target.value
                    )
                  }
                />

              </div>

              <div className="finance-input-group">

                <label>
                  End Date
                </label>

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) =>
                    setEndDate(
                      e.target.value
                    )
                  }
                />

              </div>

            </>

          ) : (

            <div className="finance-input-group">

              <label>
                Number of Days
              </label>

              <input
                type="number"
                placeholder="Enter Days"
                value={days}
                onChange={(e) =>
                  setDays(
                    e.target.value
                  )
                }
              />

            </div>

          )}

          <div className="finance-input-group">

            <label>
              Principal Amount
            </label>

            <input
              type="number"
              placeholder="Enter Amount"
              value={principal}
              onChange={(e) =>
                setPrincipal(
                  e.target.value
                )
              }
            />

          </div>

          <div className="finance-input-group">

            <label>
              Interest Rate (%)
            </label>

            <input
              type="number"
              placeholder="Enter Rate"
              value={rate}
              onChange={(e) =>
                setRate(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <div className="finance-buttons">

          <button
            className="finance-calc-btn"
            onClick={calculateSI}
          >
            Calculate
          </button>

          <button
            className="finance-clear-btn"
            onClick={clearFields}
          >
            Clear
          </button>

        </div>

        <div className="finance-result">

          {typeof result === "string" ? (

            <p>{result}</p>

          ) : result ? (

            <>

              <h2>
                Total Days

                <span>
                  {result.days}
                </span>
              </h2>

              <h2>
                Interest

                <span>
                  ₹{result.interest}
                </span>
              </h2>

              <h2>
                Total Amount

                <span>
                  ₹{result.total}
                </span>
              </h2>

            </>

          ) : (

            <p>
              Result will appear here
            </p>

          )}

        </div>

      </div>
      <button className="explore-button"
          onClick={() => navigate("/home#calculators-section")}
      >Explore More Calculators</button>
    </div>
  );
}

export default SICalculator;