import React from "react";
import "./SideBar.scss";
import { HashLink as Link } from "react-router-hash-link";
import { data } from "../../content/placeholder.json";
import SearchBar from "../SearchBar/SearchBar";
import ContentList from "../ContentList/ContentList";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <SearchBar data={data} />
      {data.map((item) => (
        <ContentList key={item.theme} content={item} />
      ))}
      <Link className="terms-glosary__link" to="/terms_glosary">
        Glosario de términos
      </Link>
    </nav>
  );
};

export default SideBar;
