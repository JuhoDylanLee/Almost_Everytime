import React from "react";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <form action="/" method="post">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="passw">Password</label>
          <input type="password" name="passw" id="passw" />
        </div>
        <button type="submit">Register</button>
        <Link to="/">
          <button> Go Back </button>
        </Link>
      </form>
    </>
  );
}

export default Register;
