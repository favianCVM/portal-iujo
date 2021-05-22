import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContentList.scss";

const ContentList = ({ content }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    let listElement = content.content.reduce((accumulator, item) => {
      accumulator.push(
        <li key={item.title} className="content-list__element">
          <Link className="content-list__link" to={`/theme/${item.url}`}>
            {item.title}
          </Link>
        </li>
      );

      if (item.subContent.length) {
        accumulator.push(
          <ul
            key={`sub-content${item.title}`}
            className="content-list__sub-list"
          >
            {item.subContent.reduce((accumulator, item) => {
              accumulator.push(
                <li key={item.title} className="content-list__element">
                  {item.title}
                </li>
              );
              return accumulator;
            }, [])}
          </ul>
        );
      }

      return accumulator;
    }, []);

    setElements([listElement]);
  }, []);

  return (
    <ul className="content-list">
      {
        <h2 key={content.theme} className="content-list__title">
          {content.theme}
        </h2>
      }
      {elements}
    </ul>
  );
};

export default ContentList;
