import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Pages/Home";

/* CATEGORY PAGES */

import BasicCalculator from "./CalculatorsTypes/BasicCalculator";
import StudentCalculator from "./CalculatorsTypes/StudentCalculator";
import FinanceCalculator from "./CalculatorsTypes/FinanceCalculator";
import HealthCalculator from "./CalculatorsTypes/HealthCalculator";

/* BASIC */

import StandardCalculator from "./Calculators/Basic/StandardCalculator";
import PercentageCalculator from "./Calculators/Basic/PercentageCalculator";
import ScientificCalculator from "./Calculators/Basic/ScientificCalculator";

/* STUDENT */

import AttendanceCalculator from "./Calculators/Student/AttendanceCalculator";
import CGPACalculator from "./Calculators/Student/CGPACalculator";
import GPACalculator from "./Calculators/Student/GPACalculator";
import MarksPercentageCalculator from "./Calculators/Student/MarksPercentageCalculator";

/* FINANCE */

import EMICalculator from "./Calculators/Finance/EMICalculator";
import SICalculator from "./Calculators/Finance/SICalculator";
import CICalculator from "./Calculators/Finance/CICalculator";

/* HEALTH */

import BMICalculator from "./Calculators/Health/BMICalculator";
import AgeCalculator from "./Calculators/Health/AgeCalculator";

/* UNIT CONVERTER */

import UnitConverter from "./CalculatorsTypes/UnitConverter";
import LengthConverter from "./Calculators/Units/LengthConverter";
import WeightConverter from "./Calculators/Units/WeightConverter";
import TemperatureConverter from "./Calculators/Units/TemperatureConverter";
import TimeConverter from "./Calculators/Units/TimeConverter";
import SpeedConverter from "./Calculators/Units/SpeedConverter";

/* Currency Converter */

import CurrencyConverters from "./CalculatorsTypes/CurrencyConverters";
import CurrencyConverter from "./Calculators/Currency/CurrencyConverter";
import INRConverter from "./Calculators/Currency/INRConverter";

/* UTILITY CONVERTER */

import UtilityCalculator from "./CalculatorsTypes/UtilityCalculator";
import DaysCalculator from "./Calculators/Utility/DateCalculator";
import TimeDifferenceCalculator from "./Calculators/Utility/TimeDifferenceCalculator"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/basic-calculator" element={<BasicCalculator />} />
        <Route path="/calculator" element={<ScientificCalculator />} />
        <Route path="/basic-calculator/calculator" element={<StandardCalculator />} />
        <Route path="/basic-calculator/standard" element={<StandardCalculator />} />
        <Route path="/basic-calculator/percentage" element={<PercentageCalculator />} />
        <Route path="/basic-calculator/scientific" element={<ScientificCalculator />} />

        <Route path="/student-calculator" element={<StudentCalculator />} />
        <Route path="/student-calculator/attendance" element={<AttendanceCalculator />} />
        <Route path="/student-calculator/cgpa" element={<CGPACalculator />} />
        <Route path="/student-calculator/gpa" element={<GPACalculator />} />
        <Route path="/student-calculator/marks-percentage" element={<MarksPercentageCalculator />} />
        
        <Route path="/financial-calculator" element={<FinanceCalculator />} />
        <Route path="/financial-calculator/emi" element={<EMICalculator />} />
        <Route path="/financial-calculator/simple-interest" element={<SICalculator />} />
        <Route path="/financial-calculator/compound-interest" element={<CICalculator />} />

        <Route path="/health-calculator" element={<HealthCalculator />} />
        <Route path="/health-calculator/bmi" element={<BMICalculator />} />
        <Route path="/health-calculator/age" element={<AgeCalculator />} />

        <Route path="/unit-converter" element={<UnitConverter />} />
        <Route path="/unit-converter/length" element={<LengthConverter />} />
        <Route path="/unit-converter/weight" element={<WeightConverter />} />
        <Route path="/unit-converter/temperature" element={<TemperatureConverter />} />
        <Route path="/unit-converter/time" element={<TimeConverter />} />
        <Route path="/unit-converter/speed" element={<SpeedConverter />} />
        
        <Route path="/currency-converter" element={<CurrencyConverters />} />
        <Route path="/currency-converter/converter" element={<CurrencyConverter />} />
        <Route path="/currency-converter/inr" element={<INRConverter />} />

        <Route path="utility-calculator" element={<UtilityCalculator />}/>
        <Route path="/utility-calculator/days-calculator" element={<DaysCalculator />}/>
        <Route path="/utility-calculator/time-difference-calculator" element={<TimeDifferenceCalculator />}/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;