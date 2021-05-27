import React from "react";
import "./Navigator.scss";
import { useHistory } from "react-router-dom";
import { data } from "../../content/placeholder.json";

const Navigator = ({ contentIndex }) => {
  const history = useHistory();

  const navigate = (e) => {
    let dataArray = [...data[0].content, ...data[1].content];

    if (e.currentTarget.innerHTML === "Anterior") {
      if (contentIndex === 0) {
        history.push("/");
      } else {
        history.push(`/theme/${dataArray[contentIndex - 1].url}`);
      }
    } else if (e.currentTarget.innerHTML === "Siguiente") {
      if (dataArray[dataArray.length - 1] === dataArray[contentIndex]) {
        history.push("/");
      } else {
        history.push(`/theme/${dataArray[contentIndex + 1].url}`);
      }
    }
  };

  return (
    <div className="navigator">
      <span onClick={navigate} className="navigator__button left">
        Anterior
      </span>
      <span onClick={navigate} className="navigator__button right">
        Siguiente
      </span>
    </div>
  );
};

export default Navigator;
