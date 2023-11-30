import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNewUser = useSelector((state) => state.auth.isNewUser);

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
    if (isNewUser) {
      navigate("/login", { replace: true });
    }
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="firstname">
          First name
          <input type="text" name="firstname" placeholder="John" required />
        </label>
        <label htmlFor="lastname">
          Last name
          <input type="text" name="lastname" placeholder="Smith" required />
        </label>
        <label htmlFor="nickname">
          Nickname
          <input type="text" name="nickname" placeholder="John_S" required />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            required
          />
        </label>
        <label htmlFor="phone">
          Phone number
          <input
            type="text"
            name="phone"
            placeholder="+380999999999"
            required
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea type="text" name="description" required />
        </label>
        <label htmlFor="password">
          Password
          <input
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
            type="password"
            name="password"
            placeholder="Qwerty1@"
            required
          />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default RegisterForm;
