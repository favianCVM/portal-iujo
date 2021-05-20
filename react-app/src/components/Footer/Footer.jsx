import React from "react";
import "./Footer.scss";
import references from "../../content/references.json";

const Footer = () => {
  const displayReferences = () => {
    console.log(references);
  };

  return (
    <footer className="footer">
      <div className="footer__info">
        <span className="footer__copyright">
          Copyright © All rights reserved to I.U.J.O
        </span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          explicabo dicta libero sed culpa esse iusto, enim quas, magnam nihil
          fuga, maxime magni deleniti aliquid possimus cumque consequuntur?
          Explicabo, doloremque.
        </span>
      </div>
      <hr />

      <div className="footer__flex__container">
        <div className="footer__container">
          <h2 className="footer__title">titulo lorem</h2>
          <ul className="footer__list">
            <li className="footer__list-element">
              <a
                rel="noreferrer"
                target="_blank"
                className="footer__list-link"
                href="https://www.google.com/"
              >
                lorem reference
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
