import React from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "./NavBar.css";


const GOOGLE_CLIENT_ID = "580988859886-5erda5h8q54ha0knsjql9ha87vi7bcll.apps.googleusercontent.com";


/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {


  return (
    <nav className="Navbar-container">
      <div className="Navbar-title">
        <Link to="/" className="Navbar-title">
          Graph Ninja
        </Link>
        {props.userId ? (
          <GoogleLogout
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={props.handleLogout}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        ) : (
          <GoogleLogin
            clientId={GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </div>
      <div className="Navbar-link-container">
        <Link to="/about/" className="Navbar-link">
          about
        </Link>
        {props.userId && (
          <Link to={`/profile/${props.userId}`} className="Navbar-link">
            profile
          </Link>
        )}
        <div className="dropdown">
          <button className="dropbtn">
            dojo ▼
          </button>
          <div className="dropdown-content">
            <Link to="/training/" className="Navbar-link dropdown-padding">train</Link>
            <Link to="/battle/" className="Navbar-link dropdown-padding">battle</Link>
          </div>
        </div>
      </div>
      <div className=""></div>
    </nav>
  );
};

export default NavBar;