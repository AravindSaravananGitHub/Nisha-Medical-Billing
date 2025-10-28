import React from "react";
import "../CSS/navbar.css";

const Navbar = () => {
  const navItems = ["About", "Experience", "Projects", "Contacts"];

  return (
    <div className="nav-container">
      <div className="nav-content">
        {navItems.map((item, itemPosition) => (
          <ul key={itemPosition}>
            <li>{item}</li>
          </ul>
        ))}
      </div>

      <div className="nav-logo">
        <h3>
          Nisha <span>Ravikumar</span>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
