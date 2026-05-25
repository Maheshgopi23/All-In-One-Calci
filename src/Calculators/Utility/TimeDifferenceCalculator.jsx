import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Utility.css";

function TimeDifferenceCalculator(){

    const navigate = useNavigate();

    const [startTime, setStartTime] =
        useState("");

    const [endTime, setEndTime] =
        useState("");

    const [result, setResult] =
        useState("");

    function calculateTimeDifference(){

        if(!startTime || !endTime){

            setResult(
                "Please select both times"
            );

            return;
        }

        const start =
            new Date(
                `2000-01-01T${startTime}`
            );

        const end =
            new Date(
                `2000-01-01T${endTime}`
            );

        let difference =
            end - start;

        if(difference < 0){

            difference +=
                24 * 60 * 60 * 1000;
        }

        const hours =
            Math.floor(
                difference /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (
                    difference %
                    (1000 * 60 * 60)
                ) /
                (1000 * 60)
            );

        setResult(
            `${hours} Hours ${minutes} Minutes`
        );
    }

    function clearFields(){

        setStartTime("");

        setEndTime("");

        setResult("");
    }

    return(

        <div className="utility-wrapper">

            <div className="utility-container">

                <div className="utility-sensor"></div>

                <h1 className="utility-title">
                    Time Difference Calculator
                </h1>

                <div className="utility-inputs">

                    <div className="utility-input-group">

                        <label>
                            Start Time
                        </label>

                        <input
                            type="time"
                            value={startTime}
                            onChange={(e) =>
                                setStartTime(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                    <div className="utility-input-group">

                        <label>
                            End Time
                        </label>

                        <input
                            type="time"
                            value={endTime}
                            onChange={(e) =>
                                setEndTime(
                                    e.target.value
                                )
                            }
                        />

                    </div>

                </div>

                <div className="utility-buttons">

                    <button
                        className="utility-calc-btn"
                        onClick={
                            calculateTimeDifference
                        }
                    >
                        Calculate
                    </button>

                    <button
                        className="utility-clear-btn"
                        onClick={clearFields}
                    >
                        Clear
                    </button>

                </div>

                <div className="utility-result">

                    {
                        result ||
                        "Result will appear here"
                    }

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
    )
}

export default TimeDifferenceCalculator;