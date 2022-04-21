import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navigation />
      <form className="login">
        <p>
          Vous avez déjà un compte ? <NavLink to="/login">Se connecter</NavLink>
        </p>
        <h2>Créez votre compte Groupomania</h2>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Nom"></input>
          </div>
          <div className="input">
            <input type="text" placeholder="Prénom"></input>
          </div>
          <div className="input">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="input">
            <input type="password" placeholder="Password"></input>
          </div>
        </div>

        <button>S'inscrire</button>
      </form>
    </>
  );
};

export default Register;
