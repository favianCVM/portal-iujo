import React from "react";
import "./TermSearchBar.scss";

const TermSearchBar = ({ query, setQuery, data, setTerms }) => {
  const getTerm = (e) => {
    if (e.target.value) {
      setQuery(e.target.value.trim().toLowerCase());

      setTerms(
        data.reduce((accumulator, item) => {
          if (item.title.toLowerCase().includes(query)) {
            accumulator.push(item);
          }
          return accumulator;
        }, [])
      );
    } else {
      setQuery(null);
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
