import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-logo">
          <NavLink to="/">
            <img src="./groupomaniablack.svg" alt="logo groupomania" />
          </NavLink>
        </div>
        <div className="nav-link">
          <ul className="main-nav">
            <li className="menu-item">
              <NavLink to="/">Accueil</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/login">Se connecter</NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/register">S'inscrire</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
