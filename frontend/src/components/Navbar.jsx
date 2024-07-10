// handling the navigation bar

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Litnerd_letters_logo_name.png";
import { AuthContext } from "../context/authContext.js";

// Define the Navbar component
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <input type="checkbox" id="check" />
        <div className="links">
          <Link className="link category" to="/?cat=science">
            <h6>Science</h6>
          </Link>
          <Link className="link category" to="/?cat=technology">
            <h6>Technology</h6>
          </Link>
          <Link className="link category" to="/?cat=health">
            <h6>Health</h6>
          </Link>
          <Link className="link category" to="/?cat=lifestyle">
            <h6>Lifestyle</h6>
          </Link>
          <Link className="link category" to="/?cat=fashion">
            <h6>Fashion</h6>
          </Link>
          <label htmlFor="check" className="close-menu">
            <i className="fas fa-times"></i>
          </label>
        </div>
        <label htmlFor="check" className="open-menu">
          <i className="fas fa-bars"></i>
        </label>
        <span className="new-article">
          <Link className="link" to="/write">
            New Article &#128240;
          </Link>
        </span>
        <div className="profile">
          {" "}
          {/*display username and logout link if currentUser has a truthy value */}
          <Link className="link username">
            <span>{currentUser?.username}</span>
          </Link>
          {currentUser ? (
            <Link className="link username">
              <span onClick={logout}>Logout</span>
            </Link>
          ) : (
            <Link className="link username" to="/login">
              {" "}
              {/* display login link if currentUser is null or falsy*/}
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
