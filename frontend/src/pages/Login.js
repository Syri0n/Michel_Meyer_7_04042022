import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const Login = () => {
  return (
    <>
      <Navigation />
      <form className="login">
        <p>
          Pas encore inscrit ? <NavLink to="/register">S'enregister</NavLink>
        </p>
        <h2>Se connecter à Groupomania</h2>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="input">
            <input type="password" placeholder="Password"></input>
          </div>
        </div>

        <button>Se connecter</button>
      </form>
    </>
  );
};

export default Login;
