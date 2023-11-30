import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log In</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </div>
  );
}

export default Navigation;
