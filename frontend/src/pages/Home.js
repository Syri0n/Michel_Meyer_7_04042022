import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="app">
      <Navigation />
      <div className="home">
        <h2>Bienvenue !</h2>

        <p>
          Groupomania - Réseau social d'entreprise <br />
          Projet 7 du parcours Développeur Web
        </p>

        <NavLink className="link" to="/login">
          <div className="login-register">Se connecter</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
