import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Health.css";

function BMICalculator() {

    const navigate = useNavigate();

    const [weight, setWeight] =
        useState("");

    const [height, setHeight] =
        useState("");

    const [result, setResult] =
        useState(null);

    function calculateBMI() {

        const weightValue =
            parseFloat(weight);

        const heightValue =
            parseFloat(height);

        if (isNaN(weightValue) || isNaN(heightValue))
        {
            setResult(
                "Please enter valid values"
            );
            return;
        }

        const heightInMeters = heightValue / 100;
        const bmi = weightValue / (heightInMeters * heightInMeters);
        let category = "";
        if (bmi < 18.5) {
            category =
                "Underweight";
        }
        else if (bmi < 24.9) {
            category =
                "Normal Weight";
        }
        else if (bmi < 29.9) {
            category =
                "Overweight";
        }
        else {
            category =
                "Obese";
        }
        setResult({
            bmi:
                bmi.toFixed(2),
            category
        });
    }

    function clearFields() {
        setWeight("");
        setHeight("");
        setResult(null);
    }
    return (
        <div className="health-wrapper">
            <div className="health-container">
                <div className="health-sensor"></div>
                <h1 className="health-title">BMI Calculator</h1>
                <div className="health-inputs">
                    <div className="health-input-group">
                        <label>Weight (kg)</label>
                        <input type="number" placeholder="Enter Weight" value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="health-input-group">
                        <label>Height (cm)</label>
                        <input type="number" placeholder="Enter Height" value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                </div>
                <div className="health-buttons">
                    <button className="health-calc-btn" onClick={calculateBMI}>Calculate</button>
                    <button className="health-clear-btn" onClick={clearFields}>Clear</button>
                </div>
                <div className="health-result">
                    {typeof result === "string" ? (
                        <p>{result}</p>

                    ) : result ? (
                        <>
                            <h2>BMI Value<span>{result.bmi}</span></h2>
                            <h2>Category<span>{result.category}</span></h2>
                        </>
                    ) : (
                        <p>Result will appear here</p>
                    )}
                </div>
            </div>
            <button className="explore-button"
                onClick={() => navigate("/home#calculators-section")}>Explore More Calculators
            </button>
        </div>
    );
}

export default BMICalculator;