import React from "react";
import "./TermGlosaryDisplay.scss";
import TermGlosary from "../TermsGlosary/TermGlosary";
import SideBar from "../Sidebar/SideBar";

const TermGlosaryDisplay = () => {
  return (
    <div className="term-glosary-display">
      <TermGlosary />
      <SideBar />
    </div>
  );
};

export default TermGlosaryDisplay;
