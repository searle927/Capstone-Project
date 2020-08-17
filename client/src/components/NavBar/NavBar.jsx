import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <div className="Nav">
          <h2 className='rslogo'>R+S Wedding</h2>
          <Link to="/">R+S Wedding</Link>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
              <li>
                <Link to="/destination">Destination</Link>
              </li>
              <li>
                <Link to="/advice">Advice</Link>
              </li>
              <li>
                <Link to="/registry">Registry</Link>
              </li>
              <li>
                <Link to="/RSVP">RSVP</Link>
              </li>
            </ul>
          </nav>
        </div>
    );
  }
  
export default NavBar
