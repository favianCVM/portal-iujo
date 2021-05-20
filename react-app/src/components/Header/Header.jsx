import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/iujo.jpg";
import { HashLink as Link } from "react-router-hash-link";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__link">
        <img src={Logo} alt="Logo" className="header__logo" />
      </Link>

      <Link to="/" className="header__link">
        <h1 className="header__title">Portal educativo IUJO</h1>
      </Link>
    </header>
  );
};

export default Header;
