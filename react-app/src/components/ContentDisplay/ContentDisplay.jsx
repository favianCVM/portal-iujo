import React, { useEffect } from "react";
import "./ContentDisplay.scss";
import SideBar from "../Sidebar/SideBar";
import Article from "../Article/Article";

const ContentDisplay = ({ content, objective, contentIndex }) => {
  useEffect(() => {
    const app = JSON.parse(localStorage.getItem("app"));
    if (app && content) {
      if (objective) {
        if (!app.history.find((item) => item === objective))
          app.history.unshift(objective);
      } else if (!app.history.find((item) => item === content.title)) {
        app.history.unshift(content.title);
      }

      if (app.history.length > 3) {
        app.history.pop();
      }
      localStorage.setItem("app", JSON.stringify(app));
    }
  }, [content, objective]);

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
