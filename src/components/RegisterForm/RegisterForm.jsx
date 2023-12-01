import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import css from "./RegisterForm.module.css";

function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstname: e.currentTarget.elements.firstname.value,
      lastname: e.currentTarget.elements.lastname.value,
      nickname: e.currentTarget.elements.nickname.value,
      email: e.currentTarget.elements.email.value,
      phone: e.currentTarget.elements.phone.value,
      description: e.currentTarget.elements.description.value,
      password: e.currentTarget.elements.password.value,
    };
    dispatch(register(newUser));
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.form}>
        <label className={css.label} htmlFor="firstname">
          First name
          <input
            className={css.input}
            type="text"
            name="firstname"
            placeholder="John"
            required
          />
        </label>
        <label className={css.label} htmlFor="lastname">
          Last name
          <input
            className={css.input}
            type="text"
            name="lastname"
            placeholder="Smith"
            required
          />
        </label>
        <label className={css.label} htmlFor="nickname">
          Nickname
          <input
            className={css.input}
            type="text"
            name="nickname"
            placeholder="John_S"
            required
          />
        </label>
        <label className={css.label} htmlFor="email">
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            required
          />
        </label>
        <label className={css.label} htmlFor="phone">
          Phone number
          <input
            className={css.input}
            type="text"
            name="phone"
            placeholder="+380999999999"
            required
          />
        </label>
        <label className={css.label} htmlFor="description">
          Description
          <textarea
            className={css.textarea}
            type="text"
            name="description"
            required
          />
        </label>
        <label className={css.label} htmlFor="password">
          Password
          <input
            className={css.input}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
            type="password"
            name="password"
            placeholder="Qwerty1@"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Sign up
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
