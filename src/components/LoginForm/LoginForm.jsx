import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import css from "./LoginForm.module.css";

function LoginForm() {
  const dispatch = useDispatch();
  const logined = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginUser = {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };
    dispatch(login(loginUser));
  };

  if (logined) {
    navigate("/profile", { replace: true });
  }
  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label} htmlFor="email">
          Email
          <input className={css.input} type="email" name="email" required />
        </label>
        <label className={css.label} htmlFor="password">
          Password
          <input
            className={css.input}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
            type="password"
            name="password"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </form>
    </>
  );
}

export default LoginForm;
