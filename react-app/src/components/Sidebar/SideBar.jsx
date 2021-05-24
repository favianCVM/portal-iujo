import React from "react";
import "./SideBar.scss";
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
    </nav>
  );
};

export default SideBar;
