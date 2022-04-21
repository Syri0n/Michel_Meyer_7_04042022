import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import "./styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* path='*' fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route patch="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
