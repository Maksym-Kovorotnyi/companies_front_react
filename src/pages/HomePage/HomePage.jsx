import React from "react";
import css from "./HomePage.module.css";
import { useSelector } from "react-redux";

function HomePage() {
  const logined = useSelector((state) => state.auth.accessToken);
  return (
    <div className={css.container}>
      {logined ? (
        <h1 className={css.title}>
          You've already registered, go check out your companies or your
          profile.
        </h1>
      ) : (
        <h1 className={css.title}>
          Hello, you are now on the welcome page of the application that allows
          you to keep track of companies! To continue, please register or log in
          to your account.
        </h1>
      )}
    </div>
  );
}

export default HomePage;
