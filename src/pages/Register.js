import React, { useState } from "react";

import { Link } from "react-router-dom";
function Register(props) {
  const [email, setEmail] = useState("");
  const [passw, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" action="/" method="post">
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="name" name="name" id="name" placeholder="Full Name" />
        </div>
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
          <button type="submit">Register</button>
        </div>
        <Link to="/">
          <button> Go Back </button>
        </Link>
        <Link to="/Login">
          <button className="link-btn" onClick={props.onFormSwitch}>
            Already have an account? Login here.
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;
