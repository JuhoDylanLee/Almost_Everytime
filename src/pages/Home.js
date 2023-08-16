import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div div className="App">
      <h1>Three Idiots</h1>
      <img src="/images/3idiots.jpeg" className="App-logo" alt="logo" />
      <ul className="header">
        <li>
          <Link to="/Login">
            <button> Login</button>
          </Link>
        </li>
        <li>
          <Link to="/Register">
            <button> Register</button>
          </Link>
        </li>
      </ul>
      <div className="content"></div>
    </div>
  );
}

export default Home;
