import { useState } from "react";
import "./Student.css";
import { useNavigate } from "react-router-dom";

function GPACalculator() {

  const navigate = useNavigate();
  const [subjects, setSubjects] =
    useState([
      {
        subject: "",
        grade: "",
        credits: ""
      }
    ]);

  const [result, setResult] =
    useState(null);

  const gradePoints = {

    O: 10,
    A: 9,
    B: 8,
    C: 7,
    D: 6,
    E: 5,
    F: 0
  };

  function handleChange(
    index,
    field,
    value
  ) {

    const updatedSubjects =
      [...subjects];

    updatedSubjects[index][field] =
      value;

    setSubjects(updatedSubjects);
  }

  function addSubject() {

    setSubjects([
      ...subjects,
      {
        subject: "",
        grade: "",
        credits: ""
      }
    ]);
  }

  function removeSubject(index) {

    const updatedSubjects =
      subjects.filter(
        (_, i) => i !== index
      );

    setSubjects(updatedSubjects);
  }

  function calculateGPA() {

    let totalCredits = 0;

    let totalGradePoints = 0;

    for (let subject of subjects) {

      const credits =
        parseFloat(subject.credits);

      const grade =
        subject.grade;

      if (
        !credits ||
        !grade
      ) {

        setResult(
          "Please fill all fields"
        );

        return;
      }

      totalCredits += credits;

      totalGradePoints +=
        gradePoints[grade] *
        credits;
    }

    const gpa =
      (
        totalGradePoints /
        totalCredits
      ).toFixed(2);

    setResult(gpa);
  }

  function clearFields() {

    setSubjects([
      {
        subject: "",
        grade: "",
        credits: ""
      }
    ]);

    setResult(null);
  }

  return (

    <div className="student-wrapper">

      <div className="student-container">

        <div className="student-sensor"></div>

        <h1 className="student-title">
          GPA Calculator
        </h1>

        <div className="student-subjects">

          {subjects.map(
            (
              subject,
              index
            ) => (

              <div
                className="student-subject-row"
                key={index}
              >

                <input
                  type="text"
                  placeholder="Subject Name"
                  value={subject.subject}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "subject",
                      e.target.value
                    )
                  }
                />

                <select
                  value={subject.grade}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "grade",
                      e.target.value
                    )
                  }
                >

                  <option value="">
                    Grade
                  </option>

                  <option value="O">
                    O
                  </option>

                  <option value="A">
                    A
                  </option>

                  <option value="B">
                    B
                  </option>

                  <option value="C">
                    C
                  </option>

                  <option value="D">
                    D
                  </option>

                  <option value="E">
                    E
                  </option>

                  <option value="F">
                    F
                  </option>

                </select>

                <input
                  type="number"
                  placeholder="Credits"
                  value={subject.credits}
                  onChange={(e) =>
                    handleChange(
                      index,
                      "credits",
                      e.target.value
                    )
                  }
                />

                {subjects.length > 1 && (

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeSubject(index)
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
          onClick={addSubject}
        >
          + Add Subject
        </button>

        <div className="student-buttons">

          <button
            className="student-calc-btn"
            onClick={calculateGPA}
          >
            Calculate GPA
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
              GPA

              <span>
                {result}
              </span>
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

export default GPACalculator;