import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const isLoggedIn = Boolean(localStorage.getItem("jwt"));

  return (
    <nav>
      <h1>TimeTight</h1>
      {isLoggedIn ? (
        <>
          <Link to="/logout" className="logout-button">
            Logout
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup" className="signup-button">
            Sign Up
          </Link>
          <br />
          <Link to="/login" className="login-button">
            Login
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
