import "./Content.css";
import { useNavigate } from "react-router-dom";

function Content() {

    const navigate = useNavigate();

    return(

        <>

            <div className="content container-fluid d-flex flex-column justify-content-center align-items-center text-center" id="content">
                <div className="hero-section">
                    <h1 className="heading"> All In One Calculator </h1>
                    <p className="hero-subtitle">
                        Smart, Fast and Beautiful Calculators
                        for Students, Finance, Health and
                        Everyday Needs.
                    </p>
                    <button className="hero-button" onClick={() => {navigate('/basic-calculator/scientific')}}>Get Started &gt;&gt;</button>
                </div>
                {/* Calculator Showcase */}

                <div className="calculator-showcase">
                    <div className="showcase-card">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
                            alt="Student Calculator"
                        />
                        <h3>Student Tools</h3>
                        <p>
                            GPA, CGPA, Attendance &
                            Marks Calculators
                        </p>
                    </div>
                    <div className="showcase-card">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Finance Calculator"
                        />
                        <h3>Finance Tools</h3>
                        <p>
                            EMI, Interest and
                            Investment Calculators
                        </p>
                    </div>
                    <div className="showcase-card">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png"
                            alt="INR Calculator"
                        />
                        <h3>Currency</h3>
                        <p>
                            INR Calculator
                            for Better Financial Management
                        </p>
                    </div>
                </div>
            </div>

        </>

    );
}

export default Content;