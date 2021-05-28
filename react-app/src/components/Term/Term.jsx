import React from "react";
import "./Term.scss";

const Term = ({ content }) => {
  return (
    <div className="term">
      <h2 className="term__title">{content.title}</h2>
      <p className="term__definition">{content.definition}</p>
    </div>
  );
};

export default Term;
