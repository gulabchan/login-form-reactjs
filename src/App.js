import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === "myusername" && password === "mypassword") {
      setLoginError("");
      setUsername("");
      setPassword("");
      alert(`Welcome, ${username}!`);
    } else {
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {loginError && <div>{loginError}</div>}
      </form>
    </div>
  );
}

export default LoginForm;
