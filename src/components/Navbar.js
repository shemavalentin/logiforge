import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useTheme();

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <strong>LogiForge</strong>
      </div>
      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/about">About</Link>
        {" | "}
        <Link to="/projects">Projects</Link>
        {" | "}
        <Link to="/contact">Contact</Link>
        {" | "}
        <button onClick={toggleTheme}>🌓</button>
      </div>
    </nav>
  );
};

export default Navbar;
