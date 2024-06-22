import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Logo from "../images/Litnerd_letters_logo_name.png"
import { AuthContext } from '../context/authContext.js';

const Navbar = () => {

    const { currentUser, logout } = useContext(AuthContext);
    
    return (
    <div className='navbar'>
        <div className="container">
             <div className="logo">
                <Link to='/'><img src={Logo} alt="logo" /></Link>
            </div>
            <div className="links">
                <Link className='link category' to='/?cat=science'>
                <h6>Science</h6>
                </Link>
                <Link className='link category' to='/?cat=technology'>
                <h6>Technology</h6>
                </Link>
                <Link className='link category' to='/?cat=health'>
                <h6>Health</h6>
                </Link>
                <Link className='link category' to='/?cat=lifestyle'>
                <h6>Lifestyle</h6> 
                </Link>
                <Link className='link category' to='/?cat=fashion'>
                <h6>Fashion</h6>
                </Link>
            </div>
            <span className='new-article'>
                    <Link className='link' to='/write'>New Article &#128240;</Link>
            </span>
            <div className='profile'>
                <Link className='link'><span>{currentUser?.username}</span></Link>
                {currentUser ? <Link className='link'><span onClick={logout}>Logout</span></Link> : <Link className='link' to="/login">Login</Link>}
            </div>
            {/* <div>Searchbox</div> */}
        </div>
        </div>
    )
}

export default Navbar;
