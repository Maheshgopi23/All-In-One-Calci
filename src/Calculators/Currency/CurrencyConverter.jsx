import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Units/Converter.css";

function CurencyConverter() {

    const navigate = useNavigate();
    const [amount, setAmount] =
        useState("");
    const [fromCurrency, setFromCurrency] =
        useState("USD");
    const [toCurrency, setToCurrency] =
        useState("INR");
    const [result, setResult] =
        useState("");
    const currencyRates = {
        USD: 1,
        INR: 83.12,
        EUR: 0.92,
        GBP: 0.78,
        JPY: 157.45,
        AUD: 1.52,
        CAD: 1.36
    };

    function convertCurrency() {
        if (!amount) {
            setResult(
                "Please enter amount"
            );
            return;
        }
        const usdValue =
            parseFloat(amount) /
            currencyRates[fromCurrency];
        const converted =
            usdValue *
            currencyRates[toCurrency];
        setResult(
            `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`
        );
    }

    function clearFields() {
        setAmount("");
        setFromCurrency("USD");
        setToCurrency("INR");
        setResult("");
    }

    return (
        <div className="converter-wrapper">
            <div className="converter-container">
                <div className="converter-sensor"></div>
                <h1 className="converter-title">Currency Converter</h1>
                <div className="converter-inputs">
                    <input type="number" placeholder="Enter Amount" value={amount}
                        onChange={(e) =>
                            setAmount(
                                e.target.value
                            )
                        }
                    />
                    <select value={fromCurrency}
                        onChange={(e) =>
                            setFromCurrency(
                                e.target.value
                            )
                        }
                    >

                        {Object.keys(currencyRates).map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                    <select value={toCurrency}
                        onChange={(e) =>
                            setToCurrency(
                                e.target.value
                            )
                        }
                    >
                        {Object.keys(currencyRates).map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
                <div className="converter-buttons">
                    <button className="convert-btn" onClick={convertCurrency}>Convert</button>
                    <button className="clear-btn" onClick={clearFields}>Clear</button>
                </div>
                <div className="converter-result">
                    {result || "Result will appear here"}
                </div>
            </div>
            <button className="explore-button" onClick={() => navigate( "/home#calculators-section")}>
                Explore More Calculators
            </button>
        </div>
    );
}

export default CurencyConverter;