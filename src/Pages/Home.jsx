import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../Components/NavBar";
import Content from "../Components/Content";
import CalculatorCards from "../Components/CalculatorsCards";
import Footer from "../Components/Footer.jsx";

function Home() {

    const location = useLocation();

    useEffect(() => {

        if (location.hash) {

            const element = document.getElementById(
                location.hash.substring(1)
            );

            if (element) {

                element.scrollIntoView({
                    behavior: "smooth"
                });

            }
        }

    }, [location]);

    return(
        <>
            <NavBar />
            <Content />
            <CalculatorCards />
            <Footer />
        </>
    )
}

export default Home;