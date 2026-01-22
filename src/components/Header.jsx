import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const btnHandler = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  }

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            {/* <li><a href="/about">About Us</a></li> */}
            {/* <li><NavLink style={({isActive}) => ({
              backgroundColor: isActive ? 'green' : 'yellow'

            })} to={"/about"}>About Us</NavLink></li> */}
             <li><Link to={"/about"}>About Us</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/grocery"}>Grocery</Link></li>
            <li>Cart </li>
            <button className="login" onClick={btnHandler}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;