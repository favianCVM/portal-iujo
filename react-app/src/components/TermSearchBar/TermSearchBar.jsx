import React from "react";
import Term from "../Term/Term";
import "./TermSearchBar.scss";

const TermSearchBar = ({ terms, setSelectedTerm }) => {
  const getTerm = (e) => {
    if (!e.target.value) setSelectedTerm(null);
    else {
      let query = e.target.value.trim().toLowerCase();

      terms.reduce((accumulator, item) => {
        if (item.title.toLowerCase().includes(query)) {
          setSelectedTerm(<Term content={item} />);
        }

        return accumulator;
      }, []);
    }
  };

  return (
    <div className="term-searchbar__container">
      <input
        onChange={getTerm}
        placeholder="Buscar un término"
        type="text"
        className="term-searchbar"
      />
    </div>
  );
};

export default TermSearchBar;
