import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./SearchBar.scss";

const SearchBar = ({ data }) => {
  const [options, setOptions] = useState(null);
  const [query, setQuery] = useState("");
  const dataArr = [...data[0].content, ...data[1].content];

  const getOptions = (e) => {
    setQuery(e.target.value.toLowerCase().trim());

    setOptions(
      dataArr.reduce((accumulator, item) => {
        if (item.title.toLowerCase().includes(query)) {
          accumulator.push(
            <li key={item.title} className="searchbar__result">
              <Link
                className="searchbar__result-link"
                onClick={() => {
                  setOptions(null);
                  setQuery("");
                }}
                to={`/theme/${item.url}`}
              >
                {item.title}
              </Link>
            </li>
          );
        }

        return accumulator;
      }, [])
    );
  };

  return (
    <div className="searchbar__container">
      <input
        onChange={getOptions}
        type="text"
        placeholder="Buscar un tema"
        className="searchbar"
        value={query}
      />
      <ul className="searchbar__result-list">{query && options}</ul>
    </div>
  );
};

export default SearchBar;
