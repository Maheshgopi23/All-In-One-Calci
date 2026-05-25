import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Converter.css";

function TemperatureConverter() {

    const navigate = useNavigate();

    const [value, setValue] = useState("");
    const [fromUnit, setFromUnit] = useState("Celsius");
    const [toUnit, setToUnit] = useState("Fahrenheit");

    const [result, setResult] = useState("");

    function convertTemperature() {

        if (!value) {

            setResult("Enter a value");

            return;
        }

        let temp =
            parseFloat(value);

        let converted = temp;

        if (
            fromUnit === "Celsius" &&
            toUnit === "Fahrenheit"
        ) {

            converted =
                (temp * 9/5) + 32;
        }

        else if (
            fromUnit === "Fahrenheit" &&
            toUnit === "Celsius"
        ) {

            converted =
                (temp - 32) * 5/9;
        }

        else if (
            fromUnit === "Celsius" &&
            toUnit === "Kelvin"
        ) {

            converted =
                temp + 273.15;
        }

        else if (
            fromUnit === "Kelvin" &&
            toUnit === "Celsius"
        ) {

            converted =
                temp - 273.15;
        }

        else if (
            fromUnit === "Fahrenheit" &&
            toUnit === "Kelvin"
        ) {

            converted =
                ((temp - 32) * 5/9) + 273.15;
        }

        else if (
            fromUnit === "Kelvin" &&
            toUnit === "Fahrenheit"
        ) {

            converted =
                ((temp - 273.15) * 9/5) + 32;
        }

        setResult(
            `${temp} ${fromUnit} = ${converted.toFixed(2)} ${toUnit}`
        );
    }

    function clearFields() {

        setValue("");

        setFromUnit("Celsius");

        setToUnit("Fahrenheit");

        setResult("");
    }

    return (

        <div className="converter-wrapper">

            <div className="converter-container">

                <div className="converter-sensor"></div>

                <h1 className="converter-title">
                    Temperature Converter
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

                        <option>Celsius</option>
                        <option>Fahrenheit</option>
                        <option>Kelvin</option>

                    </select>

                    <select
                        value={toUnit}
                        onChange={(e) =>
                            setToUnit(e.target.value)
                        }
                    >

                        <option>Celsius</option>
                        <option>Fahrenheit</option>
                        <option>Kelvin</option>

                    </select>

                </div>

                <div className="converter-buttons">

                    <button
                        className="convert-btn"
                        onClick={convertTemperature}
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

export default TemperatureConverter;