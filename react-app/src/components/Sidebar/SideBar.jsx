import React from "react";
import "./SideBar.scss";
import { HashLink as Link } from "react-router-hash-link";
import { data } from "../../content/placeholder.json";
import SearchBar from "../SearchBar/SearchBar";
import ContentList from "../ContentList/ContentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <input type="checkbox" id="dropdown" />
      <label htmlFor="dropdown" className="dropdown__button">
        <FontAwesomeIcon icon={faBars} />
      </label>

      <div className="sidebar-dropdown">
        <SearchBar data={data} />
        {data.map((item) => (
          <ContentList key={item.theme} content={item} />
        ))}
        <Link className="terms-glosary__link" to="/term_glosary">
          Glosario de términos
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
