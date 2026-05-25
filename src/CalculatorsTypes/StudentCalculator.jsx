import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function StudentCalculator() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">

      <h1 className="calculator-type-title">
        Student Calculators
      </h1>

      <p className="calculator-type-subtitle">
        Smart academic calculators for students.
      </p>

      <div className="calculator-cards">

        {/* Attendance */}

        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-journal-check"></i>
            </div>

            <div className="card-content">

              <h2>Attendance Calculator</h2>

              <p>
                Calculate attendance percentage quickly.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate("/student-calculator/attendance")
            }
          >
            Open Calculator
          </button>

        </div>

        {/* CGPA */}

        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-mortarboard"></i>
            </div>

            <div className="card-content">

              <h2>CGPA Calculator</h2>

              <p>
                Calculate cumulative GPA easily.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate("/student-calculator/cgpa")
            }
          >
            Open Calculator
          </button>

        </div>

        {/* GPA */}

        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-book"></i>
            </div>

            <div className="card-content">

              <h2>GPA Calculator</h2>

              <p>
                Calculate semester GPA instantly.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate("/student-calculator/gpa")
            }
          >
            Open Calculator
          </button>

        </div>

        {/*Marks Percentage*/}

        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-bar-chart"></i>
            </div>

            <div className="card-content">

              <h2>Marks Percentage Calculator</h2>

              <p>
                Calculate percentage based on marks obtained.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate("/student-calculator/marks-percentage")
            }
          >
            Open Calculator
          </button>

        </div>

      </div>

    </div>
  );
}

export default StudentCalculator;