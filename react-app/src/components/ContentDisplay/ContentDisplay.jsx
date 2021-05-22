import React from "react";
import "./ContentDisplay.scss";
import SideBar from "../Sidebar/SideBar";
import Article from "../Article/Article";

const ContentDisplay = ({ content }) => {
  return (
    <div className="content-display">
      <Article content={content} />
      <SideBar />
    </div>
  );
};

export default ContentDisplay;
