import { useState } from "react";
import "./Student.css";
import { useNavigate } from "react-router-dom";

function MarksPercentageCalculator() {

    const navigate = useNavigate();

    const [obtainedMarks, setObtainedMarks] =
        useState("");

    const [totalMarks, setTotalMarks] =
        useState("");

    const [result, setResult] =
        useState("");

    function calculatePercentage() {

        const obtained =
            parseFloat(obtainedMarks);

        const total =
            parseFloat(totalMarks);

        if (
            isNaN(obtained) ||
            isNaN(total)
        ) {

            setResult(
                "Enter valid marks"
            );

            return;
        }

        if (total === 0) {

            setResult(
                "Total marks cannot be 0"
            );

            return;
        }

        const percentage =
            (
                (obtained / total) * 100
            ).toFixed(2);

        setResult(`${percentage}%`);
    }

    function clearFields() {

        setObtainedMarks("");

        setTotalMarks("");

        setResult("");
    }

    return(

        <div className="student-wrapper">

            <div className="student-container">

                <div className="student-sensor"></div>

                <h1 className="student-title">
                    Marks Percentage Calculator
                </h1>

                <div className="student-inputs">

                    <div className="student-input-group">

                        <label>
                            Marks Obtained
                        </label>

                        <input
                            type="number"
                            placeholder="Enter marks obtained"
                            value={obtainedMarks}
                            onChange={(e) =>
                                setObtainedMarks(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="student-input-group">

                        <label>
                            Total Marks
                        </label>

                        <input
                            type="number"
                            placeholder="Enter total marks"
                            value={totalMarks}
                            onChange={(e) =>
                                setTotalMarks(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                </div>

                <div className="student-result">

                    {result || "Result will appear here"}

                </div>

                <div className="student-buttons">

                    <button
                        className="student-calc-btn"
                        onClick={calculatePercentage}
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

            </div>

            <button
                className="explore-button"
                onClick={() =>
                    navigate(
                        "/home#calculators-section"
                    )
                }
            >
                Explore More Calculators
            </button>

        </div>
    );
}

export default MarksPercentageCalculator;