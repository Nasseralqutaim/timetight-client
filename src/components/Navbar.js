import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  console.log("Rendering Navbar.. all good");
  return (
    <nav>
      <h1>TimeTight</h1>
      <Link to="/signup" className="signup-button">
        Sign Up
      </Link>
    </nav>
  );
}

export default Navbar;
