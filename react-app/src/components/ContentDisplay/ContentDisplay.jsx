import React from "react";
import "./ContentDisplay.scss";
import SideBar from "../Sidebar/SideBar";
import Article from "../Article/Article";

const ContentDisplay = ({ content, objective }) => {
  return (
    <div className="content-display">
      <Article content={content} objective={objective} />
      <SideBar />
    </div>
  );
};

export default ContentDisplay;
