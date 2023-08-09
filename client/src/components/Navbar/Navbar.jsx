import { NavLink } from "react-router-dom";
import Logo from "../../assets/IndiLogo.png";
import "./NavbarStyle.css";

// Import Icons_
import { FaBars } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="nav">
        <NavLink
          className="Navlink"
          to="/"
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "",
              fontSize: "8px",
            };
          }}
        >
          <img src={Logo} alt="logo" className="logo-nav" />
          <h1>IndiLodge</h1>
        </NavLink>

        <div className="menu-dropdown">
          <button className="nav_profile menu-button" onClick={toggleDropdown}>
            <FaBars className="nav_profile_1" />
            <RxAvatar className="nav_profile_2" />
          </button>
          {isOpen && (
            <div className="dropdown-content">
              <a href="#">Register</a>
              <a href="#">Login</a>
              <a href="#">Logout</a>
              <a href="#">My Account</a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
