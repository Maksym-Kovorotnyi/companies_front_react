import React from "react";

function RegisterForm() {
  return (
    <div>
      <form>
        <label htmlFor="firstname">
          {" "}
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
