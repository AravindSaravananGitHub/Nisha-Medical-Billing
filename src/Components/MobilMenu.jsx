import React, { useState } from "react";
import "../CSS/mobileMenu.css";
import MenuIcon from "@mui/icons-material/Menu";

const MobilMenu = () => {
  const [open, setOpen] = useState(false);

  const menus = ["Home", "About", "Experience", "Software", "Contact"];

  const openMenu = () => {
    setOpen(true);
  };

  return (
    <div className="burger-wrap">
      <div className="burger-container">
        {!open && (
          <button className="burger-icon" onClick={openMenu}>
            <MenuIcon />
          </button>
        )}

        {open && (
          <ul>
            {menus.map((item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MobilMenu;
