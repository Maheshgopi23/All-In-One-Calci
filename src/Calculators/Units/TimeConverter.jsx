import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Converter.css";

function TimeConverter() {

    const navigate = useNavigate();

    const [value, setValue] =
        useState("");

    const [fromUnit, setFromUnit] =
        useState("Seconds");

    const [toUnit, setToUnit] =
        useState("Minutes");

    const [result, setResult] =
        useState("");

    const timeUnits = {

        Seconds: 1,
        Minutes: 1 / 60,
        Hours: 1 / 3600,
        Days: 1 / 86400,
        Weeks: 1 / 604800
    };

    function convertTime() {

        if (!value) {

            setResult(
                "Enter a value"
            );

            return;
        }

        const secondsValue =
            value / timeUnits[fromUnit];

        const converted =
            secondsValue *
            timeUnits[toUnit];

        setResult(
            `${value} ${fromUnit} = ${converted.toFixed(4)} ${toUnit}`
        );
    }

    function clearFields() {

        setValue("");

        setFromUnit("Seconds");

        setToUnit("Minutes");

        setResult("");
    }

    return (

        <div className="converter-wrapper">

            <div className="converter-container">

                <div className="converter-sensor"></div>

                <h1 className="converter-title">
                    Time Converter
                </h1>

                <div className="converter-inputs">

                    <input
                        type="number"
                        placeholder="Enter Value"
                        value={value}
                        onChange={(e) =>
                            setValue(
                                e.target.value
                            )
                        }
                    />

                    <select
                        value={fromUnit}
                        onChange={(e) =>
                            setFromUnit(
                                e.target.value
                            )
                        }
                    >

                        {Object.keys(timeUnits).map((unit) => (

                            <option
                                key={unit}
                                value={unit}
                            >
                                {unit}
                            </option>

                        ))}

                    </select>

                    <select
                        value={toUnit}
                        onChange={(e) =>
                            setToUnit(
                                e.target.value
                            )
                        }
                    >

                        {Object.keys(timeUnits).map((unit) => (

                            <option
                                key={unit}
                                value={unit}
                            >
                                {unit}
                            </option>

                        ))}

                    </select>

                </div>

                <div className="converter-buttons">

                    <button
                        className="convert-btn"
                        onClick={convertTime}
                    >
                        Convert
                    </button>

                    <button
                        className="clear-btn"
                        onClick={clearFields}
                    >
                        Clear
                    </button>

                </div>

                <div className="converter-result">

                    {result ||
                        "Result will appear here"}

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

export default TimeConverter;