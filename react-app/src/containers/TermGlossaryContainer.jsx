import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import TermGlossaryDisplay from "../components/TermGlossaryDisplay/TermGlossaryDisplay";
import Footer from "../components/Footer/Footer";

const TermsGlossaryContainer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <TermGlossaryDisplay />
      <Footer />
    </div>
  );
};

export default TermsGlossaryContainer;
