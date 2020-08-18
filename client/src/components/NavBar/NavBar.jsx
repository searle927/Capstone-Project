import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navigation(props) {
  const [menuStatus, setMenuStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    if (menuStatus === false && showMenu === false) {
      setMenuStatus(true);
      setShowMenu(true);
    } else {
      setMenuStatus(false);
      setShowMenu(false);
    }
  };

  return (
    <header>
      <div className="header">
        <Link to="/" class="R+S">
          <h1 className="logo">R+S Wedding</h1>
        </Link>
        <ul className="nav">
        <Link to="/" id="home" className="nav">
            <li className="nav-items" id="nav-zero" onClick={handleMenuToggle}>
              Home
            </li>
          </Link>
          <Link to="/details" id="details" className="nav">
            <li className="nav-items" id="nav-one" onClick={handleMenuToggle}>
              Details
            </li>
          </Link>

          <Link to="/destination" id="destination" className="nav">
            <li className="nav-items" id="nav-two" onClick={handleMenuToggle}>
              Destination
            </li>
          </Link>

          <Link to="/advice" id="advice" className="nav">
            <li className="nav-items" id="nav-three" onClick={handleMenuToggle}>
              Advice
            </li>
          </Link>

          <Link to="/registry" id="registry" className="nav">
            <li className="nav-items" id="nav-four" onClick={handleMenuToggle}>
              Registry
            </li>
          </Link>
          
          <Link to="/rsvp" id="rsvp" className="nav">
            <li className="nav-items" id="nav-five" onClick={handleMenuToggle}>
              RSVP
            </li>
          </Link>
        </ul>

        <div
          className={`hamburger-btn ${menuStatus ? "open" : ""}`}
          onClick={handleMenuToggle}>
          <div className="hamburger-patty"></div>
        </div>
      </div>

      <div className={`dropdown-menu ${showMenu ? "show" : ""}`}>
        <Link to="/" id="home" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            Home
          </h1>
        </Link>
        <Link to="/details" id="details" className="header-item">
          <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>
            Details
          </h1>
        </Link>

        <Link to="/destination" id="destination" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Destination
          </h1>
        </Link>

        <Link to="/advice" id="advice" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Advice
          </h1>
        </Link>

        <Link to="/registry" id="registry" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            Registry
          </h1>
        </Link>
        
        <Link to="/rsvp" id="rsvp" className="header-item">
          <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>
            RSVP
          </h1>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
