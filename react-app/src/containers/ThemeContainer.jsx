import React, { useState, useEffect, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { data } from "../content/placeholder.json";
import Header from "../components/Header/Header";
import ContentDisplay from "../components/ContentDisplay/ContentDisplay";
import Footer from "../components/Footer/Footer";

const ThemeContainer = () => {
  const [content, setContent] = useState(null);
  const params = useParams();
  const { state } = useLocation();

  useEffect(() => {
    let dataArray = [...data[0].content, ...data[1].content];

    setContent(
      dataArray.filter((item) => {
        return item.url === params.title;
      })[0]
    );
  }, [params]);

  return (
    <div className="container">
      <Header />
      <ContentDisplay content={content} objective={state} />
      <Footer />
    </div>
  );
};

export default ThemeContainer;
