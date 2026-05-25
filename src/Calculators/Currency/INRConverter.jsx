import { useState } from "react";
import "../Units/Converter.css";
import { useNavigate } from "react-router-dom";

function INRConverter() {

    const navigate = useNavigate();
    const [counts, setCounts] = useState({
        1: "",
        2: "",
        5: "",
        10: "",
        20: "",
        50: "",
        100: "",
        200: "",
        500: ""
    });
    const [total, setTotal] =
        useState(0);
    function handleChange(value, count) {
        setCounts({
            ...counts,
            [value]: count
        });
    }

    function calculateTotal() {
        let sum = 0;
        for (let note in counts) {
            sum += Number(note) * Number(counts[note] || 0);
        }
        setTotal(sum);
    }

    function clearFields() {
        setCounts({
            1: "",
            2: "",
            5: "",
            10: "",
            20: "",
            50: "",
            100: "",
            200: "",
            500: ""
        });
        setTotal(0);
    }

    return(
        <div className="converter-wrapper">
            <div className="converter-container">
                <div className="converter-sensor"></div>
                <h1 className="converter-title">INR Converter</h1>
                <div className="converter-inputs">
                    {Object.keys(counts).map((value) => (
                        <div className="inr-row" key={value}>
                            <label>₹{value}</label>
                            <input type="number" placeholder={`Number of ₹${value}`} value={counts[value]}
                                onChange={(e) =>
                                    handleChange(
                                        value,
                                        e.target.value
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
                <div className="converter-buttons">
                    <button className="convert-btn" onClick={calculateTotal}>Calculate Total</button>
                    <button className="clear-btn" onClick={clearFields}>Clear</button>
                </div>
                <div className="converter-result">
                    Total Amount: <br />₹{total}
                </div>
            </div>
            <button className="explore-button" onClick={() => navigate( "/home#calculators-section")}>
                Explore More Calculators
            </button>
        </div>
    );
}

export default INRConverter;