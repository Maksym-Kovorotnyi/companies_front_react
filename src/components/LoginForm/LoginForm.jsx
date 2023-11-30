import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginUser = {
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
    };
    dispatch(login(loginUser));
    navigate("/profile", { replace: true });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="email">
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          <input
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
            type="password"
            name="password"
            required
          />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
