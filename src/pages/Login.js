import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [passw, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="youremail@gamil.com"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="passw">Password</label>
          <input
            type="password"
            value={passw}
            onChange={(e) => setPass(e.target.value)}
            placeholder="********"
            name="passw"
            id="passw"
          />
          <button type="submit">Login</button>
        </div>
        <Link to="/">
          <button> Go Back </button>
        </Link>
        <Link to="/Register">
          <button className="link-btn" onClick={props.onFormSwitch}>
            Don't have an account? Register here.
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
