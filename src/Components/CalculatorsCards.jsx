import "./CalculatorCards.css";
import { useNavigate } from "react-router-dom";

const calculatorData = [
  {
    id: 1,
    title: "Basic Calculator",
    route: "/basic-calculator",
    types: ["Standard Calculator", "Percentage Calculator", "Scientific Calculator"],
    icon: "bi-calculator"
  },
  {
    id: 2,
    title: "Student Calculator",
    route: "/student-calculator",
    types: [
      "Attendance Calculator",
      "CGPA Calculator",
      "GPA Calculator"
    ],
    icon: "bi-mortarboard"
  },
  {
    id: 3,
    title: "Financial Calculator",
    route: "/financial-calculator",
    types: ["EMI Calculator", "Simple Interest Calculator", "Compound Interest Calculator"],
    icon: "bi-cash-stack"
  },
  {
    id: 4,
    title: "Health Calculator",
    route: "/health-calculator",
    types: ["BMI Calculator", "Age Calculator"],
    icon: "bi-heart-pulse"
  },
  {
    id: 5,
    title: "Unit Converter",
    route: "/unit-converter",
    types: ["Length Converter", "Weight Converter", "Temperature Converter"],
    icon: "bi-arrow-left-right"
  },
  {
    id: 6,
    title: "Currency Converter",
    route: "/currency-converter",
    types: ["USD to INR", "INR to USD", "Currency Exchange Rates"],
    icon: "bi-currency-exchange"
  },
  {
    id: 7,
    title: "Utility Calculator",
    route: "/utility-calculator",
    types: [
      "Days Calculator",
      "Time Difference Calculator"
    ],
    icon: "bi-calendar-date"
  }
];

function CalculatorCards() {

  const navigate = useNavigate();

  return (

    <section className="calculators-section" id="calculators-section">

      <div className="section-header">
        <h1>Explore Calculators</h1>
        <p>Everything you need in one smart calculator platform.</p>
      </div>
      <div className="cards-container">
        {calculatorData.map((data) => (
          <div key={data.id} className="calculator-card">
            <div className="card-icon">
              <i className={`bi ${data.icon}`}></i>
            </div>

            <h2>{data.title}</h2>

            <ul>
              {data.types.map((type, index) => (
                <li key={index}>{type}</li>
              ))}
            </ul>

            <button className="explore-button" onClick={() => navigate(data.route)}>
              Explore
            </button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CalculatorCards;