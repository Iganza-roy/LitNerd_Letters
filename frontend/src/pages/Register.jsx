// This file contains the implementation of the regiseration page

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Litnerd_letters_logo_name.png";
import axios from "axios";

// defining the register component
const Register = () => {
  // state to manage inputs
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  // handle form input change event
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt registration
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <form>
        <div className="register-logo">
          <img src={Logo} alt="logo" />
          <h3>Welcome to LitNerd Letters!</h3>
          <p>Snippets of stories and insights</p>
        </div>
        <h1>Create Account</h1>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Sign up</button>
        {err && <p>{err}</p>}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
