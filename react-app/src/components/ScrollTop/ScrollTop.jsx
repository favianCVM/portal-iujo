import { useState, useEffect } from "react";
import "./ScrollTop.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const [didMount, setDidMount] = useState(false);

  const checkScrollTop = () => {
    if (!visible && window.pageYOffset > 500) {
      if (visible) return;
      else setVisible(true);
    } else if (visible && window.pageYOffset <= 400) {
      if (!visible) return;
      else setVisible(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  useEffect(() => {
    setDidMount(true);
    return () => setDidMount(false);
  }, []);

  if (!didMount) {
    return null;
  }

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
