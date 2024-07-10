// this code contains the implementation of the login page

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../images/Litnerd_letters_logo_name.png";
import { AuthContext } from "../context/authContext.js";

//defining the login component
const Login = () => {
  // state to manage form inputs
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // handle form input changes
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt login using the login function from AuthContext
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth">
      <form>
        <div className="register-logo">
          <img src={Logo} alt="logo" />
          <h3>Welcome back!</h3>
          <p>Snippets of stories and insights</p>
        </div>
        <h1>Sign In</h1>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
