import React from "react";

function LoginForm() {
  return (
    <div>
      <form>
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
