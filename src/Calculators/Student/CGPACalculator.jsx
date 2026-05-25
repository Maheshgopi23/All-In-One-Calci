import { useState } from "react";
import "./Student.css";
import { useNavigate } from "react-router-dom";

function CGPACalculator() {


  const navigate = useNavigate();
  const [semesterCount, setSemesterCount] =
    useState(1);

  const [semesters, setSemesters] =
    useState([
      {
        semester: "Semester 1",
        gpa: "",
        credits: ""
      }
    ]);

  const [result, setResult] =
    useState(null);

  function handleChange(
    index,
    field,
    value
  ) {

    const updatedSemesters =
      [...semesters];

    updatedSemesters[index][field] =
      value;

    setSemesters(updatedSemesters);
  }

  function addSemester() {

    const nextSemester =
      semesterCount + 1;

    setSemesters([
      ...semesters,
      {
        semester:
          `Semester ${nextSemester}`,
        gpa: "",
        credits: ""
      }
    ]);

    setSemesterCount(nextSemester);
  }

  function removeSemester(index) {

    const updatedSemesters =
      semesters.filter(
        (_, i) => i !== index
      );

    setSemesters(updatedSemesters);
  }

  function calculateCGPA() {

    let totalCredits = 0;

    let totalWeightedGPA = 0;

    for (let semester of semesters) {

      const gpa =
        parseFloat(semester.gpa);

      const credits =
        parseFloat(semester.credits);

      if (
        isNaN(gpa) ||
        isNaN(credits)
      ) {

        setResult(
          "Please fill all fields"
        );

        return;
      }

      totalCredits += credits;

      totalWeightedGPA +=
        gpa * credits;
    }

    const cgpa =
      (
        totalWeightedGPA /
        totalCredits
      ).toFixed(2);

    setResult(cgpa);
  }

  function clearFields() {

    setSemesters([
      {
        semester: "Semester 1",
        gpa: "",
        credits: ""
      }
    ]);

    setSemesterCount(1);

    setResult(null);
  }

  return (

    <div className="student-wrapper">
      <div className="student-container">

        <div className="student-sensor"></div>

        <h1 className="student-title">
          CGPA Calculator
        </h1>

        <div className="student-semesters">

          {semesters.map(
            (
              semester,
              index
            ) => (

              <div
                className="student-semester-row"
                key={index}
              >

                <input
                  type="text"
                  value={semester.semester}
                  readOnly
                />

                <input
                  type="number"
                  placeholder="Semester GPA"
                  value={semester.gpa}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "gpa",
                      e.target.value
                    )
                  }
                />

                <input
                  type="number"
                  placeholder="Semester Credits"
                  value={semester.credits}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "credits",
                      e.target.value
                    )
                  }
                />

                {semesters.length > 1 && (
                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeSemester(index)
                    }
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                )}

              </div>
            )
          )}

        </div>

        <button
          className="add-btn"
          onClick={addSemester}
        >
          + Add Another Semester
        </button>

        <div className="student-buttons">

          <button
            className="student-calc-btn"
            onClick={calculateCGPA}
          >
            Calculate CGPA
          </button>

          <button
            className="student-clear-btn"
            onClick={clearFields}
          >
            Clear
          </button>

        </div>

        <div className="student-result">

          {result ? (
            <h2>
              CGPA
              <span>{result}</span>
            </h2>
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

export default CGPACalculator;