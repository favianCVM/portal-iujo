import React, { useEffect } from "react";
import Router from "./services/Router";

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem("app")) {
      localStorage.setItem(
        "app",
        JSON.stringify({
          history: [],
          bookmarks: [],
        })
      );
    }
  }, []);
  return <Router></Router>;
};

export default App;
