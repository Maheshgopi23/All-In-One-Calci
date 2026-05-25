import { useNavigate } from "react-router-dom";
import "./CalculatorTypes.css";

function UnitConverter() {

  const navigate = useNavigate();

  return (

    <div className="calculator-type-wrapper">

      <h1 className="calculator-type-title">
        Unit Converters
      </h1>

      <p className="calculator-type-subtitle">
        Convert different units quickly and accurately.
      </p>

      <div className="calculator-cards">

        {/* Length Converter */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-rulers"></i>
            </div>

            <div className="card-content">

              <h2>
                Length Converter
              </h2>

              <p>
                Convert meters, kilometers,
                miles, feet and more.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/unit-converter/length"
              )
            }
          >
            Open Converter
          </button>

        </div>

        {/* Weight Converter */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-speedometer2"></i>
            </div>

            <div className="card-content">

              <h2>
                Weight Converter
              </h2>

              <p>
                Convert kilograms, grams,
                pounds and tons instantly.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/unit-converter/weight"
              )
            }
          >
            Open Converter
          </button>

        </div>

        {/* Temperature Converter */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-thermometer-half"></i>
            </div>

            <div className="card-content">

              <h2>
                Temperature Converter
              </h2>

              <p>
                Convert Celsius, Fahrenheit
                and Kelvin values easily.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/unit-converter/temperature"
              )
            }
          >
            Open Converter
          </button>

        </div>

        {/* Time Converter */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-clock-history"></i>
            </div>

            <div className="card-content">

              <h2>
                Time Converter
              </h2>

              <p>
                Convert seconds, minutes,
                hours and days accurately.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/unit-converter/time"
              )
            }
          >
            Open Converter
          </button>

        </div>

        {/* Speed Converter */}
        <div className="calculator-card-item">

          <div className="card-left">

            <div className="card-icon">
              <i className="bi bi-speedometer2"></i>
            </div>

            <div className="card-content">

              <h2>
                Speed Converter
              </h2>

              <p>
                Convert kilometers per hour,
                miles per hour, meters per second
                and more.
              </p>

            </div>

          </div>

          <button
            className="open-btn"
            onClick={() =>
              navigate(
                "/unit-converter/speed"
              )
            }
          >
            Open Converter
          </button>

        </div>

      </div>

    </div>
  );
}

export default UnitConverter;