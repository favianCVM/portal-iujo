import React, { useEffect, useState } from "react";
import "./Bookmark.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Bookmark = ({ title }) => {
  const [bookmarkColor, setBookmarkColor] = useState("bookmark");

  useEffect(() => {
    let app = JSON.parse(localStorage.getItem("app"));
    if (app.bookmarks.includes(title)) {
      setBookmarkColor("bookmark--checked");
    }
  }, []);

  const saveBookmark = () => {
    let app = JSON.parse(localStorage.getItem("app"));
    if (!app.bookmarks.includes(title)) {
      app.bookmarks.push(title);
      setBookmarkColor("bookmark--checked");
    } else if (app.bookmarks.includes(title)) {
      app.bookmarks.splice(app.bookmarks.indexOf(title), 1);
      setBookmarkColor("bookmark");
    }
    localStorage.setItem("app", JSON.stringify(app));
  };

  return (
    <FontAwesomeIcon
      onClick={saveBookmark}
      className={bookmarkColor}
      icon={faStar}
    ></FontAwesomeIcon>
  );
};

export default Bookmark;
