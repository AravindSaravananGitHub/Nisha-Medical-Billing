import React from "react";
import "../CSS/navbar.css";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
  const navItems = ["About", "Experience", "Projects", "Contacts"];

  return (
    <div className="nav-container">
      <div className="nav-content">
        <ul className="nav-menu">
          {navItems.map((item, itemPosition) => (
            <li key={itemPosition}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-logo">
        <h3>
          <a href="#">
            <span>NISHA </span>
            <span>RAVIKUMAR</span>
          </a>
        </h3>
      </div>

      <div className="nav-contacts">
        <ul>
          <li>
            <a href="#">
              <MarkunreadIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <CallIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
