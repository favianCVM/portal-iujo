import React from "react";
import "./ContentDisplay.scss";
import SideBar from "../Sidebar/SideBar";
import Article from "../Article/Article";

const ContentDisplay = ({ content, objective, contentIndex }) => {
  return (
    <div className="content-display">
      <Article
        content={content}
        objective={objective}
        contentIndex={contentIndex}
      />
      <SideBar />
    </div>
  );
};

export default ContentDisplay;
