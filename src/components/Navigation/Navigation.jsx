import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

function Navigation() {
  const isLogedin = useSelector((state) => state.auth.accessToken);
  return (
    <>
      <nav className={css.navContainer}>
        <Link className={css.navItem} to="/">
          Home page
        </Link>
        {isLogedin ? (
          <>
            <Link className={css.navItem} to="/companies">
              Companies
            </Link>
            <Link className={css.navItem} to="/profile">
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link className={css.navItem} to="/register">
              Sign Up
            </Link>
            <Link className={css.navItem} to="/login">
              Log In
            </Link>
          </>
        )}
      </nav>
    </>
  );
}

export default Navigation;
