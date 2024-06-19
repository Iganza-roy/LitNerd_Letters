import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/Litnerd_letters_logo_name.png";

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  });


  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}));
  }

  console.log(inputs)

  return (
    <div className='auth'>
      <form>
        <div className='register-logo'>
          <img src={ Logo } alt="logo" />
          <h3>Welcome to LitNerd Letters!</h3>
          <p>Snippets of stories and insights</p>
        </div>
        <h1>Create Account</h1>
        <input required type="text" placeholder='Username' name='username' onChange={handleChange} />
        <input required type="text" placeholder='Email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='Password' name='password' onChange={handleChange} />
        <button>Sign up</button>
        <p>This is an error</p>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register;
