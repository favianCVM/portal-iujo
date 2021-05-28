import React, { useState, useEffect } from "react";
import "./TermsGlossary.scss";
import Term from "../Term/Term";
import TermSearchBar from "../TermSearchBar/TermSearchBar";
import { data } from "../../content/termsPlaceholder.json";

const TermsGlosary = () => {
  const [terms, setTerms] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  useEffect(() => {
    let termsArray = shuffleArray(data);
    setTerms(termsArray.slice(0, 9));
  }, []);

  return (
    <div className="term-glossary">
      <h2 className="term-glosary__title">Glosario de términos</h2>
      <TermSearchBar terms={data} setSelectedTerm={setSelectedTerm} />
      <div className="term__container">
        {selectedTerm
          ? selectedTerm
          : terms.map((item) => <Term key={item.title} content={item} />)}
      </div>
    </div>
  );
};

export default TermsGlosary;
