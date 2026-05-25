import "./Footer.css";
import { Link, useNavigate } from "react-router-dom";

function Footer() {

  const navigate = useNavigate();
  return (

    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-brand">
          <h2>All In One Calc</h2>
          <p>
            Smart, fast and modern calculators
            for students, finance, health,
            developers and everyone.
          </p>
          <div className="social-icons">
            <i className="bi bi-github"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter-x"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="#">Home</Link>
          <Link to="#calculators-section">Calculators</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* Categories */}
        <div className="footer-links">
          <h3>Categories</h3>
          <Link to="/basic-calculator">Basic Calculator</Link>
          <Link to="/financial-calculator">Financial</Link>
          <Link to="/health-calculator">Health</Link>
          <Link to="/student-calculator">Student</Link>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Stay Updated</h3>
          <p>
            Get updates when new calculators
            are added.
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2026 All In One Calculator.
          All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;