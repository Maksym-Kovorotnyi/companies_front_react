import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navigation() {
  const isLogedin = useSelector((state) => state.auth.accessToken);
  return (
    <div>
      <nav>
        {isLogedin ? (
          <>
            <Link to="/companies">Companies</Link>
            <Link to="/profile">Profile</Link>
          </>
        ) : (
          <>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Log In</Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
