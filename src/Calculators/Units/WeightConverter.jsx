import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Converter.css";

function WeightConverter() {

    const navigate = useNavigate();

    const [value, setValue] = useState("");

    const [fromUnit, setFromUnit] =
        useState("Kilogram");

    const [toUnit, setToUnit] =
        useState("Gram");

    const [result, setResult] =
        useState("");

    const weightUnits = {

        Kilogram: 1,
        Gram: 1000,
        Pound: 2.20462,
        Ounce: 35.274,
        Ton: 0.001
    };

    function convertWeight() {

        if (!value) {

            setResult("Enter a value");

            return;
        }

        const kgValue =
            value / weightUnits[fromUnit];

        const converted =
            kgValue * weightUnits[toUnit];

        setResult(
            `${value} ${fromUnit} = ${converted.toFixed(4)} ${toUnit}`
        );
    }

    function clearFields() {

        setValue("");

        setFromUnit("Kilogram");

        setToUnit("Gram");

        setResult("");
    }

    return (

        <div className="converter-wrapper">

            <div className="converter-container">

                <div className="converter-sensor"></div>

                <h1 className="converter-title">
                    Weight Converter
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

                        {Object.keys(weightUnits).map((unit) => (

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

                        {Object.keys(weightUnits).map((unit) => (

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
                        onClick={convertWeight}
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

export default WeightConverter;