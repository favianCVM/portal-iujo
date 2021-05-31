import { useState } from "react";
import "./ScrollTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (!visible && window.pageYOffset > 500) {
      setVisible(true);
    } else if (visible && window.pageYOffset <= 400) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={visible ? "scroll-button show-button" : "scroll-button"}
    >
      <FontAwesomeIcon icon={faArrowAltCircleUp} />
    </button>
  );
};

export default ScrollTop;
