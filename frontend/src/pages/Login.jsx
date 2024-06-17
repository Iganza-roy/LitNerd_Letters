import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='auth'>
      <form>
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
