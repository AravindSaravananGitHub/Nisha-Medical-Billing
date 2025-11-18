import React, { useEffect, useState } from "react";
import "../CSS/navbar.css";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = () => {
  const navItems = ["About", "Experience", "Projects", "Contact"];
  const [activeItem, setActiveItem] = useState("About");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3); // cycles 0 → 1 → 2 → 0
    }, 2000); // 2 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="nav-container">
      <div className="nav-content">
        <ul className="nav-menu">
          {navItems.map((item, itemPosition) => (
            <li
              key={itemPosition}
              className={activeItem === item ? "active" : ""}
              onClick={() => setActiveItem(item)}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-logo">
        <h3>
          <a href="#">
            <span className="name-logo1">NISHA </span>
            <span className="name-logo2">RAVIKUMAR</span>
          </a>
        </h3>
      </div>

      <div className="nav-contacts">
        <ul>
          <li className={activeIndex === 0 ? "active" : ""}>
            <a href="#">
              <MarkunreadIcon />
            </a>
          </li>
          <li className={activeIndex === 1 ? "active" : ""}>
            <a href="#">
              <CallIcon />
            </a>
          </li>
          <li className={activeIndex === 2 ? "active" : ""}>
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
