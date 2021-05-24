import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./SearchBar.scss";

const SearchBar = ({ data }) => {
  const [options, setOptions] = useState(null);
  const dataArr = [...data[0].content, ...data[1].content];

  const getOptions = (e) => {
    let query = e.target.value.toLowerCase().trim();
    if (!query) return setOptions(null);

    setOptions(
      dataArr.reduce((accumulator, item) => {
        if (item.title.toLowerCase().includes(query)) {
          accumulator.push(
            <li key={item.title} className="searchbar__result">
              <Link className="searchbar__result-link" to={item.url}>
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
      />
      <ul className="searchbar__result-list">{options}</ul>
    </div>
  );
};

export default SearchBar;
