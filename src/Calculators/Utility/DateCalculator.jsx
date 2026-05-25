import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Utility.css";

function DateCalculator() {

    const navigate = useNavigate();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [result, setResult] = useState("");

    function calculateDays() {

        if (!startDate || !endDate) {

            setResult("Please select both dates");

            return;
        }

        const start = new Date(startDate);
        const end = new Date(endDate);

        if (start > end) {

            setResult("Start date cannot be greater than end date");

            return;
        }

        const difference = end - start;

        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        setResult(`${days} Days`);
    }

    function clearFields() {

        setStartDate("");
        setEndDate("");
        setResult("");
    }

    return (

        <div className="utility-wrapper">

            <div className="utility-container">

                <div className="utility-sensor"></div>

                <h1 className="utility-title">
                    Date Calculator
                </h1>

                <div className="utility-inputs">

                    <div className="utility-input-group">

                        <label>
                            Start Date
                        </label>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) =>
                                setStartDate(e.target.value)
                            }
                        />

                    </div>

                    <div className="utility-input-group">

                        <label>
                            End Date
                        </label>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) =>
                                setEndDate(e.target.value)
                            }
                        />

                    </div>

                </div>

                <div className="utility-buttons">

                    <button
                        className="convert-btn"
                        onClick={calculateDays}
                    >
                        Calculate
                    </button>

                    <button
                        className="clear-btn"
                        onClick={clearFields}
                    >
                        Clear
                    </button>

                </div>

                <div className="utility-result">

                    {result || "Result will appear here"}

                </div>

            </div>

            <button
                className="explore-button"
                onClick={() =>
                    navigate("/home#calculators-section")
                }
            >
                Explore More Calculators
            </button>

        </div>
    );
}

export default DateCalculator;