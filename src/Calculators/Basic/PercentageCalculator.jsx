import { useState } from "react";
import "./BasicStyles.css";
import { useNavigate } from "react-router-dom";

function PercentageCalculator() {

    const navigate = useNavigate();
    const [mode, setMode] = useState("percentage");
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState("");

    function calculate() {
        const num1 = parseFloat(value1);
        const num2 = parseFloat(value2);
        if (isNaN(num1) || isNaN(num2)) {
            setResult("Enter valid numbers");
            return;
        }
        let output = "";
        if (mode === "percentage") {
            output = `${((num1 / 100) * num2).toFixed(2)}`;
        }
        else if (mode === "findPercent") {
            output = `${((num1 / num2) * 100).toFixed(2)}%`;
        }
        else if (mode === "increase") {
            output = `${(((num2 - num1) / num1) * 100).toFixed(2)}% Increase`;
        }
        else if (mode === "decrease") {

            output = `${(((num1 - num2) / num1) * 100).toFixed(2)}% Decrease`;
        }
        setResult(output);
    }
    function clearFields() {
        setValue1("");
        setValue2("");
        setResult("");
    }
    const placeholders = {
        percentage: [
            "Enter Percentage",
            "Enter Number"
        ],
        findPercent: [
            "Enter Value",
            "Enter Total Value"
        ],
        increase: [
            "Old Value",
            "New Value"
        ],
        decrease: [
            "Old Value",
            "New Value"
        ]
    };

    return (
        <div className="calculator-wrapper">
            <div className="calculator-container percentage-container">
                <div className="sensor"></div>
                <h1>Percentage Calculator</h1>
                <div className="percentage-modes">
                    <button className={mode === "percentage" ? "active-mode" : ""}
                        onClick={() => setMode("percentage")}
                    >
                        X% of Y
                    </button>
                    <button className={mode === "findPercent" ? "active-mode" : ""}
                        onClick={() => setMode("findPercent")}
                    >
                        Find %
                    </button>
                    <button className={mode === "increase" ? "active-mode" : ""}
                        onClick={() => setMode("increase")}
                    >
                        Increase %
                    </button>
                    <button className={mode === "decrease" ? "active-mode" : ""}
                        onClick={() => setMode("decrease")}
                    >
                        Decrease %
                    </button>
                </div>

                {/* Inputs */}
                <div className="percentage-inputs">
                    <input type="number" placeholder={placeholders[mode][0]} value={value1}
                        onChange={(e) =>
                            setValue1(e.target.value)
                        }
                    />
                    <input type="number" placeholder={placeholders[mode][1]} value={value2}
                        onChange={(e) =>
                            setValue2(e.target.value)
                        }
                    />
                </div>

                {/* Result */}
                <div className="percentage-result">
                    {result || "Result will appear here"}
                </div>

                {/* Buttons */}
                <div className="percentage-buttons">
                    <button className="fun-key" onClick={calculate}>Calculate</button>
                    <button className="digit" onClick={clearFields}>Clear</button>
                </div>
            </div>
            <button className="explore-button"
                onClick={() => navigate("/home#calculators-section")}
            >Explore More Calculators</button>
        </div>
    );
}
export default PercentageCalculator;