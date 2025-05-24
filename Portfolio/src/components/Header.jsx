import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Header.css";

const Header = () => {
  return (
    <div className="header fixed">
      <ul className="lien-header">
        <a href="#Accueil">Accueil</a>
        <a href="#aPropos">À Propos</a>
        <a href="#Portfolio">Portfolio</a>
        <a href="#Contact">Contact</a>
      </ul>
    </div>
  );
};

export default Header;
