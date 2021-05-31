import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { data } from "../../content/data.json";
import "./History.scss";

const History = () => {
  const [elements, setElements] = useState([]);
  const [app] = useState(JSON.parse(localStorage.getItem("app")));

  const findContent = () => {
    let dataArray = [...data[0].content, ...data[1].content];
    let target = [];

    if (app) {
      dataArray.forEach((contentItem) => {
        app.history.forEach((historyItem) => {
          if (contentItem.title === historyItem) {
            target.unshift({ url: contentItem.url, title: contentItem.title });
          } else {
            contentItem.subContent.forEach((subItem) => {
              if (subItem.title === historyItem)
                target.unshift({
                  url: contentItem.url,
                  state: subItem.title,
                  title: subItem.title,
                });
            });
          }
        });
      });
    }

    return target;
  };

  useEffect(() => {
    let historyData = findContent();

    setElements(
      historyData.reduce((accumulator, item) => {
        let element = (
          <Link
            to={{
              pathname: `/theme/${item.url}`,
              state: item.state,
            }}
            className="history__element"
            key={item.title}
          >
            {item.title}
          </Link>
        );

        accumulator.push(element);
        return accumulator;
      }, [])
    );
  }, []);

  return (
    <div className="history">
      <h2 className="history__title">Historial</h2>
      {elements}
    </div>
  );
};

export default History;
