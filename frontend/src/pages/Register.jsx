import React from 'react'
import { Link } from 'react-router-dom'

const register = () => {
  return (
    <div className='auth'>
      <form>
        <h1>Create Account</h1>
        <input required type="text" placeholder='Username' />
        <input required type="text" placeholder='Email' />
        <input required type="password" placeholder='Password' />
        <button>Sign up</button>
        <p>This is an error</p>
        <span>Already have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default register
