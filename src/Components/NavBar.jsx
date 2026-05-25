import "./NavBar.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {

  const [search, setSearch] = useState("");

  const [mobileSearch, setMobileSearch] = useState(false);

  const navigate = useNavigate();

  /* ================= CALCULATORS ================= */

  const calculators = [

    {
      name: "Standard Calculator",
      route: "/basic-calculator/standard"
    },

    {
      name: "Percentage Calculator",
      route: "/basic-calculator/percentage"
    },
    {
      name: "Scientific Calculator",
      route: "/basic-calculator/scientific"
    },
    {
      name: "Attendance Calculator",
      route: "/student-calculator/attendance"
    },

    {
      name: "CGPA Calculator",
      route: "/student-calculator/cgpa"
    },

    {
      name: "GPA Calculator",
      route: "/student-calculator/gpa"
    },

    {
      name: "Marks Percentage Calculator",
      route: "/student-calculator/marks-percentage"
    },

    {
      name: "EMI Calculator",
      route: "/financial-calculator/emi"
    },
    {
      name: "Simple Interest Calculator",
      route: "/financial-calculator/si"
    },
    {
      name: "Compound Interest Calculator",
      route: "/financial-calculator/ci"
    },
    
    {
      name: "BMI Calculator",
      route: "/health-calculator/bmi"
    },
    {
      name: "Age Calculator",
      route: "/health-calculator/age"
    },
    {
      name: "Length Converter",
      route: "/unit-converter/length"
    },
    {
      name: "Weight Converter",
      route: "/unit-converter/weight"
    },
    {
      name: "Temperature Converter",
      route: "/unit-converter/temperature"
    },
    {
      name: "Time Converter",
      route: "/unit-converter/time"
    },
    {
      name: "Speed Converter",
      route: "/unit-converter/speed"
    },
    {
      name: "Currency Converter",
      route: "/currency-converter/converter"
    },
    {
      name: "INR Converter",
      route: "/currency-converter/inr"
    }
  ];


  const filteredCalculators = calculators.filter((calc) =>
    calc.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  function handleNavigate(route) {

    navigate(route);

    setSearch("");

    setMobileSearch(false);
  }

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section">
        <img src="/logo.png" alt="All In One Calculator" className="logo" />
        <h1 className="logo-text">
          All In One <span>Calci</span>
        </h1>
      </div>

      {/* MOBILE SEARCH ICON */}
      <div className="mobile-search-icon" onClick={() => setMobileSearch(!mobileSearch) }>
        <i className="bi bi-search"></i>
      </div>

      {/* Search */}
      <div className={`search-section ${mobileSearch ? "show-search" : ""}`}>
        <div className="search-bar">
          <i className="bi bi-search search-icon"></i>
          <input type="text" placeholder="Search calculators..." value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          {/* CLOSE BUTTON MOBILE */}
          <div className="close-search" onClick={() => setMobileSearch(false) } >
            <i className="bi bi-x-lg"></i>
          </div>

          {/* Suggestions */}
          {search && (
            <div className="search-results">
              {filteredCalculators.length > 0 ? (
                filteredCalculators.map((calc, index) => (
                  <div key={index} className="search-item" onClick={() => handleNavigate(calc.route) }>
                    <i className="bi bi-calculator"></i>
                    {calc.name}
                  </div>
                ))
              ) : (
                <div className="no-results">
                  No calculator found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;