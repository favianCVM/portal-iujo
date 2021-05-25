import React from "react";
import "./TermGlossaryDisplay.scss";
import TermGlosary from "../TermsGlossary/TermGlossary";
import SideBar from "../Sidebar/SideBar";

const TermGlosaryDisplay = () => {
  return (
    <div className="term-glossary-display">
      <TermGlosary />
      <SideBar />
    </div>
  );
};

export default TermGlosaryDisplay;
