import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/Litnerd_letters_logo_name.png"

const login = () => {
  return (
    <div className='auth'>
      <form>
        <div className='register-logo'>
          <img src={ Logo } alt="logo" />
          <h3>Welcome back!</h3>
          <p>Snippets of stories and insights</p>
        </div>
        <h1>Sign In</h1>
        <input required type="text" placeholder='Username' />
        <input required type="password" placeholder='Password' />
        <button>Login</button>
        <p>This is an error</p>
        <span>Don't have an account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default login
