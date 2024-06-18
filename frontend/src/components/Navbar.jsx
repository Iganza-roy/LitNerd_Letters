import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../images/Litnerd_letters_logo_name.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="links">
                <Link className='link category' to='/?cat=science'>
                <h6>Science</h6>
                </Link>
                <Link className='link category' to='/?cat=technology'>
                <h6>Technology</h6>
                </Link>
                <Link className='link category' to='/?cat=art'>
                <h6>Art</h6>
                </Link>
                <Link className='link category' to='/?cat=lifestyle'>
                <h6>Lifestyle</h6> 
                </Link>
                <Link className='link category' to='/?cat=education'>
                <h6>Education</h6>
                </Link>
            </div>
            <span className='write'>
                    <Link className='link' to='/write'>New Article &#128240;</Link>
            </span>
            <div className='profile'>
                <span>Roy</span>
                <span>Logout</span>
            </div>
            {/* <div>Searchbox</div> */}
        </div>
    </div>
  )
}

export default Navbar
