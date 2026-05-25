import { useState } from "react";
import "./Student.css";
import { useNavigate } from "react-router-dom";

function AttendanceCalculator() {

  const navigate = useNavigate();

  const [totalClasses, setTotalClasses] =
    useState("");

  const [attendedClasses, setAttendedClasses] =
    useState("");

  const [targetPercentage, setTargetPercentage] =
    useState("");

  const [result, setResult] =
    useState(null);

  function calculateAttendance() {

    if (
      !totalClasses ||
      !attendedClasses
    ) {

      setResult("Please fill all fields");

      return;
    }

    const total =
      parseFloat(totalClasses);

    const attended =
      parseFloat(attendedClasses);

    const target =
      parseFloat(targetPercentage);

    if (
      attended > total
    ) {

      setResult(
        "Attended classes cannot exceed total classes"
      );

      return;
    }

    const percentage =
      (
        (attended / total) * 100
      ).toFixed(2);

    let neededClasses = 0;

    if (targetPercentage) {

      neededClasses =
        Math.ceil(
          (
            (
              target * total
            ) -
            (
              attended * 100
            )
          ) /
          (
            100 - target
          )
        );

      if (neededClasses < 0) {

        neededClasses = 0;
      }
    }

    setResult({

      percentage,

      neededClasses
    });
  }

  function clearFields() {

    setTotalClasses("");

    setAttendedClasses("");

    setTargetPercentage("");

    setResult(null);
  }

  return (

    <div className="student-wrapper">

      <div className="student-container">

        <div className="student-sensor"></div>

        <h1 className="student-title">
          Attendance Calculator
        </h1>

        <div className="student-inputs">

          <div className="student-input-group">

            <label>
              Total Classes
            </label>

            <input
              type="number"
              placeholder="Enter Total Classes"
              value={totalClasses}
              onChange={(e) =>
                setTotalClasses(
                  e.target.value
                )
              }
            />

          </div>

          <div className="student-input-group">

            <label>
              Attended Classes
            </label>

            <input
              type="number"
              placeholder="Enter Attended Classes"
              value={attendedClasses}
              onChange={(e) =>
                setAttendedClasses(
                  e.target.value
                )
              }
            />

          </div>

          <div className="student-input-group">

            <label>
              Target Percentage
            </label>

            <input
              type="number"
              placeholder="Optional"
              value={targetPercentage}
              onChange={(e) =>
                setTargetPercentage(
                  e.target.value
                )
              }
            />

          </div>

        </div>

        <div className="student-buttons">

          <button
            className="student-calc-btn"
            onClick={calculateAttendance}
          >
            Calculate
          </button>

          <button
            className="student-clear-btn"
            onClick={clearFields}
          >
            Clear
          </button>

        </div>

        <div className="student-result">

          {typeof result === "string" ? (

            <p>{result}</p>

          ) : result ? (

            <>

              <h2>
                Attendance

                <span>
                  {result.percentage}%
                </span>
              </h2>

              {targetPercentage && (

                <h2>
                  Classes Needed

                  <span>
                    {result.neededClasses}
                  </span>
                </h2>

              )}

            </>

          ) : (

            <p>
              Result will appear here
            </p>

          )}

        </div>

      </div>

      <button className="explore-button" onClick={() => navigate("/home#calculators-section")} >
        Explore More Calculators
      </button>

    </div>
  );
}

export default AttendanceCalculator;