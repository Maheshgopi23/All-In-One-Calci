import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Converter.css";

function LengthConverter() {

    const navigate = useNavigate();

    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState("meter");
    const [toUnit, setToUnit] = useState("kilometer");

    const [result, setResult] = useState("");

    const units = {

        meter: 1,
        kilometer: 0.001,
        centimeter: 100,
        millimeter: 1000,
        mile: 0.000621371,
        foot: 3.28084
    };

    function convertLength() {

        if (!value) {

            setResult("Enter a value");

            return;
        }

        const meters =
            value / units[fromUnit];

        const converted =
            meters * units[toUnit];

        setResult(
            `${value} ${fromUnit} = ${converted.toFixed(4)} ${toUnit}`
        );
    }

    function clearFields() {

        setValue("");

        setResult("");
    }

    return (

        <div className="converter-wrapper">

            <div className="converter-container">

                <div className="converter-sensor"></div>

                <h1 className="converter-title">
                    Length Converter
                </h1>

                <div className="converter-inputs">

                    <input
                        type="number"
                        placeholder="Enter Value"
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

                        {Object.keys(units).map((unit) => (

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
                            setToUnit(e.target.value)
                        }
                    >

                        {Object.keys(units).map((unit) => (

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
                        onClick={convertLength}
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

export default LengthConverter;