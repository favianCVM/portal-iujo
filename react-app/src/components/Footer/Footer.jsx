import React, { useState, useEffect } from "react";
import "./Footer.scss";
import data from "../../content/references.json";

const Footer = () => {
  const [references, setReferences] = useState([]);

  const getReferences = (array) => {
    return array.reduce((accumulator, item) => {
      accumulator.push(
        <li key={item.title} className="footer__list-element">
          <a
            rel="noreferrer"
            target="_blank"
            className="footer__list-link"
            href={item.url}
          >
            {item.author}. {item.date}. {item.title}
          </a>
        </li>
      );
      return accumulator;
    }, []);
  };

  useEffect(() => {
    let { desarrollo_web, poo } = data;

    let referenceArray1 = (
      <div key="desarrollo_web" className="footer__container">
        <h2 className="footer__title">Desarrollo de software</h2>

        <ul className="footer__list">{getReferences(desarrollo_web)}</ul>
      </div>
    );

    let referenceArray2 = (
      <div key="poo" className="footer__container">
        <h2 className="footer__title">Programación orientada a objetos</h2>
        <ul className="footer__list">{getReferences(poo)}</ul>
      </div>
    );
    setReferences([referenceArray1, referenceArray2]);
  }, []);

  return (
    <footer className="footer">
      <div className="footer__info">
        <span className="footer__copyright">
          Copyright © All rights reserved to I.U.J.O
        </span>
        <ul className="iujo-socials">
          <h2>Redes sociales</h2>
          <li className="iujo-social-networks">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://m.facebook.com/iujocatia/?locale2=es_LA"
            >
              Facebook
            </a>
          </li>
          <li className="iujo-social-networks">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/iujocatia/?hl=es-la"
            >
              Instagram
            </a>
          </li>
          <li className="iujo-social-networks">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://webiujocatia.wordpress.com"
            >
              Sitio Web Oficial
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <h2 className="footer__reference-title">Referencias bibliográficas</h2>
      <div className="footer__flex__container">{references}</div>
    </footer>
  );
};

export default Footer;
