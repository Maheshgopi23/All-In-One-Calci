import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Converter.css";

function SpeedConverter() {

    const navigate = useNavigate();

    const [value, setValue] =
        useState("");

    const [fromUnit, setFromUnit] =
        useState("km/h");

    const [toUnit, setToUnit] =
        useState("m/s");

    const [result, setResult] =
        useState("");

    function convertSpeed() {

        if (!value) {

            setResult("Enter a value");

            return;
        }

        let speed =
            parseFloat(value);

        let converted = speed;

        /* Convert to m/s first */

        if (fromUnit === "km/h") {

            speed = speed / 3.6;
        }

        else if (fromUnit === "mph") {

            speed = speed * 0.44704;
        }

        else if (fromUnit === "m/s") {

            speed = speed;
        }

        /* Convert from m/s to target */

        if (toUnit === "km/h") {

            converted = speed * 3.6;
        }

        else if (toUnit === "mph") {

            converted = speed / 0.44704;
        }

        else if (toUnit === "m/s") {

            converted = speed;
        }

        setResult(
            `${value} ${fromUnit} = ${converted.toFixed(2)} ${toUnit}`
        );
    }

    function clearFields() {

        setValue("");

        setFromUnit("km/h");

        setToUnit("m/s");

        setResult("");
    }

    return (

        <div className="converter-wrapper">

            <div className="converter-container">

                <div className="converter-sensor"></div>

                <h1 className="converter-title">
                    Speed Converter
                </h1>

                <div className="converter-inputs">

                    <input
                        type="number"
                        placeholder="Enter Speed"
                        value={value}
                        onChange={(e) =>
                            setValue(e.target.value)
                        }
                    />

                    <select
                        value={fromUnit}
                        onChange={(e) =>
                            setFromUnit(e.target.value)
                        }
                    >

                        <option value="km/h">
                            Kilometer/Hour
                        </option>

                        <option value="m/s">
                            Meter/Second
                        </option>

                        <option value="mph">
                            Miles/Hour
                        </option>

                    </select>

                    <select
                        value={toUnit}
                        onChange={(e) =>
                            setToUnit(e.target.value)
                        }
                    >

                        <option value="km/h">
                            Kilometer/Hour
                        </option>

                        <option value="m/s">
                            Meter/Second
                        </option>

                        <option value="mph">
                            Miles/Hour
                        </option>

                    </select>

                </div>

                <div className="converter-buttons">

                    <button
                        className="convert-btn"
                        onClick={convertSpeed}
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

export default SpeedConverter;